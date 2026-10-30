/**
 * Detect the end of speech from the audio level (RMS) of the microphone,
 * sampled over time: speech is louder than the background noise, measured as
 * the lowest level since the start of the recording.
 */

/** Level below which nothing is considered as speech, whatever the noise */
const MIN_SPEECH_LEVEL = 0.02;

/** Speech is louder than this multiple of the background noise */
const NOISE_FACTOR = 3;

export class SilenceDetector {
  private noise = Infinity;

  private speaking = false;

  private silentSince?: number;

  /** @param silenceMs silence duration after speech ending the recording */
  constructor(private silenceMs: number) {}

  /**
   * Add a level measured at `time` (ms), and tell whether the speech ended:
   * the learner spoke, then was silent for `silenceMs`.
   */
  update(level: number, time: number): boolean {
    this.noise = Math.min(this.noise, level);
    const isSpeech =
      level > Math.max(MIN_SPEECH_LEVEL, this.noise * NOISE_FACTOR);
    if (isSpeech) {
      this.speaking = true;
      this.silentSince = undefined;
      return false;
    }
    // waiting for the learner to start speaking
    if (!this.speaking) return false;
    this.silentSince ??= time;
    return time - this.silentSince >= this.silenceMs;
  }
}

/** Root mean square of audio samples */
export function rms(samples: Float32Array): number {
  let sum = 0;
  for (const sample of samples) {
    sum += sample * sample;
  }
  return Math.sqrt(sum / samples.length);
}

/**
 * Remove the silence before and after speech, keeping a margin: Whisper can
 * hallucinate words on silence, and a recording stopped after a silence ends
 * with one.
 */
export function trimSilence(
  audio: Float32Array,
  sampleRate: number,
  marginSeconds = 0.3,
): Float32Array {
  const windowSize = Math.round(sampleRate * 0.02);
  const levels: number[] = [];
  for (let start = 0; start + windowSize <= audio.length; start += windowSize) {
    levels.push(rms(audio.subarray(start, start + windowSize)));
  }
  const noise = Math.min(...levels);
  const threshold = Math.max(MIN_SPEECH_LEVEL, noise * NOISE_FACTOR);
  const first = levels.findIndex((level) => level > threshold);
  if (first === -1) return audio;
  let last = levels.length - 1;
  while (levels[last] <= threshold) last--;
  const margin = Math.round(sampleRate * marginSeconds);
  return audio.subarray(
    Math.max(0, first * windowSize - margin),
    Math.min(audio.length, (last + 1) * windowSize + margin),
  );
}
