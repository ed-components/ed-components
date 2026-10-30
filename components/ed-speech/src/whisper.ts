/**
 * Speech to text in the browser with Whisper models run by transformers.js:
 * the audio never leaves the device, and it works in any browser with
 * WebAssembly, getUserMedia and MediaRecorder.
 *
 * https://huggingface.co/docs/transformers.js
 */

/** Sample rate expected by Whisper */
export const SAMPLE_RATE = 16000;

/** Whisper transcribes 30 s windows: longer recordings are stopped */
export const MAX_RECORDING_SECONDS = 30;

/** Multilingual model, accurate enough on short French answers */
export const DEFAULT_MODEL = "onnx-community/whisper-base";

/**
 * transformers.js build loaded on first use. The jsDelivr +esm bundle
 * resolves its onnxruntime imports to the CDN, so it runs without bundler.
 */
export const DEFAULT_TRANSFORMERS_URL =
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/+esm";

/** An ongoing recording */
export interface Recording {
  /** Stop recording and return mono audio at SAMPLE_RATE */
  stop(): Promise<Float32Array>;
}

/** Start recording the microphone */
export type Recorder = () => Promise<Recording>;

export interface TranscribeOptions {
  model: string;
  /** ISO 639-1 language code, e.g. "fr" */
  language: string;
  transformersUrl: string;
  /** Model download progress, from 0 to 100 */
  onProgress?: (percent: number) => void;
}

/** Transcribe mono audio at SAMPLE_RATE */
export type Transcriber = (
  audio: Float32Array,
  options: TranscribeOptions,
) => Promise<string>;

// the part of the transformers.js API used here
type AsrPipeline = (
  audio: Float32Array,
  options: { language: string; task: "transcribe"; max_new_tokens: number },
) => Promise<{ text: string }>;

interface ProgressInfo {
  status: string;
  file?: string;
  loaded?: number;
  total?: number;
}

interface Transformers {
  env: { backends: { onnx: { wasm: { proxy: boolean } } } };
  pipeline(
    task: "automatic-speech-recognition",
    model: string,
    options: {
      device: "wasm";
      dtype: "q8";
      progress_callback: (info: ProgressInfo) => void;
    },
  ): Promise<AsrPipeline>;
}

export const recordMicrophone: Recorder = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];
  recorder.addEventListener("dataavailable", (evt) => chunks.push(evt.data));
  recorder.start();
  return {
    stop: () =>
      new Promise((resolve, reject) => {
        recorder.addEventListener(
          "stop",
          async () => {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
            try {
              // the audio context resamples while decoding
              const context = new AudioContext({ sampleRate: SAMPLE_RATE });
              const blob = new Blob(chunks, { type: recorder.mimeType });
              const buffer = await context.decodeAudioData(
                await blob.arrayBuffer(),
              );
              await context.close();
              resolve(buffer.getChannelData(0));
            } catch (error) {
              reject(error);
            }
          },
          { once: true },
        );
        recorder.stop();
      }),
  };
};

// models are loaded once per page and shared by all elements
interface LoadingModel {
  pipeline: Promise<AsrPipeline>;
  // progress listeners, until the model is ready
  listeners: Set<(percent: number) => void>;
  ready: boolean;
}
const models = new Map<string, LoadingModel>();

function loadModel(
  model: string,
  transformersUrl: string,
  onProgress?: (percent: number) => void,
): Promise<AsrPipeline> {
  let loading = models.get(model);
  if (loading === undefined) {
    const listeners = new Set<(percent: number) => void>();
    // download progress of each model file
    const files = new Map<string, { loaded: number; total: number }>();
    const progress = (info: ProgressInfo) => {
      if (info.status !== "progress" || !info.file || !info.total) return;
      files.set(info.file, { loaded: info.loaded ?? 0, total: info.total });
      let loaded = 0;
      let total = 0;
      files.forEach((file) => {
        loaded += file.loaded;
        total += file.total;
      });
      listeners.forEach((listener) => {
        listener((100 * loaded) / total);
      });
    };
    const pipeline = (async () => {
      const transformers = (await import(transformersUrl)) as Transformers;
      // run the model in a worker, keeping the page responsive
      transformers.env.backends.onnx.wasm.proxy = true;
      return transformers.pipeline("automatic-speech-recognition", model, {
        device: "wasm",
        dtype: "q8",
        progress_callback: progress,
      });
    })();
    const loadingModel: LoadingModel = { pipeline, listeners, ready: false };
    loading = loadingModel;
    models.set(model, loading);
    pipeline.then(
      () => {
        loadingModel.ready = true;
        listeners.clear();
      },
      // a failed download can be retried
      () => models.delete(model),
    );
  }
  if (onProgress && !loading.ready) {
    loading.listeners.add(onProgress);
  }
  return loading.pipeline;
}

/** Start downloading a model before it is needed */
export function preloadModel(
  model: string,
  transformersUrl: string,
  onProgress?: (percent: number) => void,
) {
  loadModel(model, transformersUrl, onProgress).catch(() => {
    // reported when transcribing
  });
}

export const transcribeWithWhisper: Transcriber = async (audio, options) => {
  const asr = await loadModel(
    options.model,
    options.transformersUrl,
    options.onProgress,
  );
  const seconds = audio.length / SAMPLE_RATE;
  const { text } = await asr(audio, {
    language: options.language,
    task: "transcribe",
    // small models can repeat a word endlessly: bound the output to what can
    // be said in the recording (Whisper decodes at most 448 tokens)
    max_new_tokens: Math.min(440, Math.ceil(seconds * 8) + 10),
  });
  return text.trim();
};
