import { commonSheet, stylesheet } from "../../common/src/styles.js";
import { buttonHTML } from "../../common/src/button.js";
import { submitButtonHTML } from "../../common/src/submitButton.js";
import { similarityScore } from "./similarity.js";
import {
  DEFAULT_MODEL,
  DEFAULT_TRANSFORMERS_URL,
  MAX_RECORDING_SECONDS,
  preloadModel,
  recordMicrophone,
  transcribeWithWhisper,
  type Recorder,
  type Recording,
  type Transcriber,
} from "./whisper.js";

// shared by all instances (adoptedStyleSheets)
const sheet = stylesheet(`
:host {
  display: block;
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: var(--border-size-1, 1px) solid var(--gray-1, #f1f3f5);
  --bs-alert-border-radius: var(--radius-3, 1rem);
  --bs-alert-link-color: inherit;
}
main {
  display: flex;
  align-items: center;
  gap: 0.5ch;
}
/* base button in red, inverted while recording */
#mic-button {
  --ed-button-color: var(--ed-danger);
  color: white;
  &[aria-pressed="true"] {
    background-color: transparent;
    color: var(--ed-button-color);
  }
}
.question {
  font-size: var(--font-size-fluid-1, max(1.5rem,min(6vw,2.5rem)));
  font-weight: var(--font-weight-5, 500);
  flex-basis: 100%;
}
.alert {
  position: relative;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
  &.warning {
    /* text contrast of at least 4.5:1 on the background */
    --bs-alert-color: var(--orange-11, #99330b);
    --bs-alert-bg: var(--orange-1, #ffe8cc);
    --bs-alert-border-color: var(--orange-3, #ffc078);
    --bs-alert-link-color: var(--orange-1, #ffe8cc);
  }
  &.success {
    --bs-alert-color: var(--blue-9, #1864ab);
    --bs-alert-bg: var(--blue-1, #d0ebff);
    --bs-alert-border-color: var(--blue-3, #74c0fc);
    --bs-alert-link-color: var(--blue-1, #d0ebff);
  }
}
progress {
  inline-size: 100%;
}
.final {
  font-weight: var(--font-weight-8, 800);
}
`);

const messages = {
  start: {
    msg: "Click on the microphone and speak.",
    class: "alert success",
  },
  recording: {
    msg: "Recording… It stops when you stop speaking, or click on the microphone.",
    class: "alert success",
  },
  recording_manual: {
    msg: "Recording… Click on the microphone to stop.",
    class: "alert success",
  },
  loading: {
    msg: "Loading speech recognition (first time only), your voice stays on your device…",
    class: "alert success",
  },
  transcribing: {
    msg: "Transcribing…",
    class: "alert success",
  },
  transcribed: {
    msg: "Submit your answer, or click on the microphone to try again.",
    class: "alert success",
  },
  no_speech: {
    msg: "No speech was detected, click on the microphone to try again.",
    class: "alert warning",
  },
  no_microphone: {
    msg: "No microphone was found. Ensure that a microphone is connected and allowed for this page.",
    class: "alert warning",
  },
  denied: {
    msg: "Permission to use the microphone was denied. Allow it in the browser settings of this page.",
    class: "alert warning",
  },
  insecure: {
    msg: "The microphone is only available on secure pages (https).",
    class: "alert warning",
  },
  unsupported: {
    msg: "Recording audio is not supported by this browser.",
    class: "alert warning",
  },
  failed: {
    msg: "Speech recognition failed, please try again.",
    class: "alert warning",
  },
};

type Message = keyof typeof messages;

/**
 * @tag ed-speech
 *
 * @summary Speech to text answer, transcribed in the browser by a Whisper
 * model: the audio never leaves the device. The model is downloaded on first
 * use (about 80 MB with the default model), then cached by the browser.
 *
 * @attr {string} lang - Language of the expected answer (ISO code such as
 * "fr"), defaults to the page language.
 * @attr {string} answer - Expected answer: the event gets a score from 0 to
 * 100 based on the similarity with the transcription (ignoring case, accents
 * and punctuation).
 * @attr {number} silence - Seconds of silence after speech stopping the
 * recording, 2 by default, 0 to stop only with the microphone button.
 * @attr {string} model - Whisper model on the Hugging Face hub, e.g.
 * "onnx-community/whisper-small" for a better accuracy (larger download).
 *
 * @fires {CustomEvent} edEvent - When the learner submits the transcription.
 */
export class EdSpeechElement extends HTMLElement {
  // attached in the constructor, never null
  declare readonly shadowRoot: ShadowRoot;

  /**
   * transformers.js module URL, to self-host it. Models and WebAssembly files
   * locations can then be set on its `env` before the first transcription.
   */
  static transformersUrl = DEFAULT_TRANSFORMERS_URL;

  /** Microphone recorder, replaceable (tests) */
  static recorder: Recorder = recordMicrophone;

  /** Speech to text engine, replaceable (tests) */
  static transcriber: Transcriber = transcribeWithWhisper;

  question = "";

  private micButton: HTMLButtonElement;

  private submitButton: HTMLButtonElement;

  private transcript: HTMLParagraphElement;

  private progress: HTMLProgressElement;

  private recording?: Recording;

  private recordingTimeout?: ReturnType<typeof setTimeout>;

  // recording or transcribing
  private busy = false;

  static define(tagName = "ed-speech") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  static get observedAttributes() {
    // HTML lowercases attribute names: isHTML is observed as ishtml
    return ["lang", "answer", "silence", "model", "ishtml"];
  }

  set lang(lang: string) {
    this.setAttribute("lang", lang);
  }

  get lang() {
    return this.getAttribute("lang") ?? document.documentElement.lang;
  }

  get answer(): string | null {
    return this.getAttribute("answer");
  }

  set answer(answer: string) {
    this.setAttribute("answer", answer);
  }

  get silence(): number {
    const silence = Number(this.getAttribute("silence") ?? 2);
    return Number.isFinite(silence) && silence > 0 ? silence : 0;
  }

  set silence(seconds: number) {
    this.setAttribute("silence", String(seconds));
  }

  get model(): string {
    return this.getAttribute("model") ?? DEFAULT_MODEL;
  }

  set model(model: string) {
    this.setAttribute("model", model);
  }

  get isHTML() {
    return this.hasAttribute("isHTML");
  }

  get readonly() {
    return this.hasAttribute("readonly");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];

    this.shadowRoot.innerHTML = `
    <div id="info" role="status" class="${messages.start.class}">${messages.start.msg}</div>
    <main>
      <p class="question"></p>
      ${buttonHTML({
        attributes:
          'id="mic-button" aria-pressed="false" aria-label="Start recording"',
        content: `
        <!-- from bootstrap icons -->
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
          <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
        </svg>`,
      })}
      ${submitButtonHTML()}
    </main>
    <progress max="100" hidden></progress>
    <p id="transcript" class="final"></p>
    `;

    this.micButton =
      this.shadowRoot.querySelector<HTMLButtonElement>("#mic-button")!;
    this.submitButton =
      this.shadowRoot.querySelector<HTMLButtonElement>(".ed-submit-button")!;
    // enabled once there is a transcription
    this.submitButton.disabled = true;
    this.transcript =
      this.shadowRoot.querySelector<HTMLParagraphElement>("#transcript")!;
    this.progress = this.shadowRoot.querySelector("progress")!;

    // event listeners, registered once (connectedCallback may run several times)
    this.micButton.addEventListener("click", this._handleMic.bind(this));
    this.submitButton.addEventListener(
      "click",
      this._handleResponse.bind(this),
    );
  }

  async connectedCallback() {
    this.question = this.innerHTML ? this.innerHTML : "Say something!";
    const questionEl = this.shadowRoot.querySelector(".question")!;
    if (!this.isHTML) {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      questionEl.innerHTML = md2HTML(this.innerHTML.trim());
    } else {
      questionEl.innerHTML = this.innerHTML.trim();
    }
  }

  disconnectedCallback() {
    // release the microphone
    if (this.recording) {
      this._stopRecording();
    }
  }

  /** ISO 639-1 language code expected by Whisper, e.g. "fr" for "fr-FR" */
  get language() {
    return (this.lang || "en").split("-")[0].toLowerCase();
  }

  private showInfo(s: Message) {
    const message = messages[s];
    const info = this.shadowRoot.querySelector("#info")!;
    info.textContent = message.msg;
    info.className = message.class;
  }

  private setRecording(recording: boolean) {
    this.micButton.setAttribute("aria-pressed", String(recording));
    this.micButton.ariaLabel = recording ? "Stop recording" : "Start recording";
  }

  private _handleMic() {
    if (this.readonly) return;
    if (this.recording) {
      this._stopRecording();
    } else if (!this.busy) {
      this._startRecording();
    }
  }

  private showProgress(percent: number) {
    this.progress.hidden = false;
    this.progress.value = percent;
  }

  private async _startRecording() {
    const { recorder, transcriber, transformersUrl } = this
      .constructor as typeof EdSpeechElement;
    this.busy = true;
    this.submitButton.disabled = true;
    this.transcript.textContent = "";
    const { silence } = this;
    try {
      this.recording = await recorder(
        silence > 0
          ? { silenceSeconds: silence, onSilence: () => this._stopRecording() }
          : {},
      );
    } catch (error) {
      this.busy = false;
      this.showInfo(recordingError(error));
      return;
    }
    this.setRecording(true);
    this.showInfo(silence > 0 ? "recording" : "recording_manual");
    // download the model while the learner speaks
    if (transcriber === transcribeWithWhisper) {
      preloadModel(this.model, transformersUrl, (percent) =>
        this.showProgress(percent),
      );
    }
    this.recordingTimeout = setTimeout(
      () => this._stopRecording(),
      MAX_RECORDING_SECONDS * 1000,
    );
  }

  private async _stopRecording() {
    const { recording } = this;
    if (recording === undefined) return;
    this.recording = undefined;
    clearTimeout(this.recordingTimeout);
    this.setRecording(false);
    const { transcriber, transformersUrl } = this
      .constructor as typeof EdSpeechElement;
    try {
      const audio = await recording.stop();
      this.showInfo("transcribing");
      const text = await transcriber(audio, {
        model: this.model,
        language: this.language,
        transformersUrl,
        onProgress: (percent) => {
          this.showInfo("loading");
          this.showProgress(percent);
        },
      });
      this.progress.hidden = true;
      this.transcript.textContent = text;
      this.submitButton.disabled = text === "";
      this.showInfo(text === "" ? "no_speech" : "transcribed");
    } catch (error) {
      console.error(error);
      this.progress.hidden = true;
      this.showInfo("failed");
    } finally {
      this.busy = false;
    }
  }

  private _handleResponse() {
    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const response = this.transcript.textContent ?? "";
    if (response.length === 0 || this.readonly) return;

    const { answer } = this;
    const url = this.ownerDocument.location as Location;
    this.dispatchEvent(
      new CustomEvent("edEvent", {
        bubbles: true,
        detail: {
          date: new Date().toISOString(),
          url: url.host + url.pathname,
          tag: this.tagName,
          question: this.question,
          verb: "RESPONDED",
          response,
          ...(answer === null
            ? {}
            : { answer, score: similarityScore(response, answer) }),
        },
      }),
    );
    this.setAttribute("readonly", "");
    this.micButton.disabled = true;
    this.submitButton.disabled = true;
  }
}

/** Message for an error when starting to record */
function recordingError(error: unknown): Message {
  // browsers hide the microphone API on http pages (except localhost)
  if (!window.isSecureContext) return "insecure";
  if (!navigator.mediaDevices || typeof MediaRecorder === "undefined") {
    return "unsupported";
  }
  if (error instanceof DOMException) {
    if (error.name === "NotAllowedError") return "denied";
    if (error.name === "NotFoundError") return "no_microphone";
  }
  return "failed";
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-speech": EdSpeechElement;
  }
}
