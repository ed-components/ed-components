import { css, html, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import {
  answerFeedbacks,
  EdFeedbackElement,
  splitFeedback,
} from "../../common/src/EdFeedback.js";
import { t } from "../../common/src/i18n.js";
import { commonSheet } from "../../common/src/styles.js";
import { submitButton } from "../../common/src/submitButton.js";
import { similarityScore } from "./similarity.js";
import {
  DEFAULT_MODEL,
  DEFAULT_TRANSFORMERS_URL,
  MAX_RECORDING_SECONDS,
  preloadModel,
  type Recorder,
  type Recording,
  recordMicrophone,
  type Transcriber,
  transcribeWithWhisper,
} from "./whisper.js";

EdFeedbackElement.define();

// from bootstrap icons
const micIcon = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
</svg>`;

// status messages: translation key and alert style
const messages = {
  start: { text: "speechStart", class: "alert success" },
  recording: { text: "speechRecording", class: "alert success" },
  recording_manual: { text: "speechRecordingManual", class: "alert success" },
  loading: { text: "speechLoading", class: "alert success" },
  transcribing: { text: "speechTranscribing", class: "alert success" },
  transcribed: { text: "speechTranscribed", class: "alert success" },
  no_speech: { text: "speechNoSpeech", class: "alert warning" },
  no_microphone: { text: "speechNoMicrophone", class: "alert warning" },
  denied: { text: "speechDenied", class: "alert warning" },
  insecure: { text: "speechInsecure", class: "alert warning" },
  unsupported: { text: "speechUnsupported", class: "alert warning" },
  failed: { text: "speechFailed", class: "alert warning" },
} as const;

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
export class EdSpeechElement extends LitElement {
  // attached by LitElement, never null
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

  static properties = {
    answer: { type: String },
    silence: { type: Number },
    model: { type: String },
    readonly: { type: Boolean, reflect: true },
    // HTML lowercases attribute names
    isHTML: { type: Boolean, attribute: "ishtml" },
    // rendered state
    questionHTML: { state: true, attribute: false },
    message: { state: true, attribute: false },
    isRecording: { state: true, attribute: false },
    progress: { state: true, attribute: false },
    transcript: { state: true, attribute: false },
    explanation: { state: true, attribute: false },
    score: { state: true, attribute: false },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        display: block;
        --bs-alert-bg: transparent;
        --bs-alert-padding-x: 1rem;
        --bs-alert-padding-y: 1rem;
        --bs-alert-margin-bottom: 1rem;
        --bs-alert-color: inherit;
        --bs-alert-border-color: transparent;
        --bs-alert-border: var(--border-size-1, 1px) solid
          var(--gray-1, #f1f3f5);
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
        font-size: var(--font-size-fluid-1, max(1.5rem, min(6vw, 2.5rem)));
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
    `,
  ];

  declare answer?: string;

  declare silence: number;

  declare model: string;

  declare readonly: boolean;

  declare isHTML: boolean;

  declare private questionHTML: string;

  declare private message: Message;

  declare private isRecording: boolean;

  // model download, hidden when undefined
  declare private progress?: number;

  declare private transcript: string;

  // feedback of the question, shown once answered
  declare private explanation?: string;

  // similarity with the expected answer, once answered
  declare private score?: number;

  question = "";

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

  constructor() {
    super();
    this.silence = 2;
    this.model = DEFAULT_MODEL;
    this.readonly = false;
    this.isHTML = false;
    this.questionHTML = "";
    this.message = "start";
    this.isRecording = false;
    this.transcript = "";
  }

  // native lang property, not a Lit one: the language of the answer
  set lang(lang: string) {
    this.setAttribute("lang", lang);
  }

  get lang() {
    return this.getAttribute("lang") ?? document.documentElement.lang;
  }

  /** ISO 639-1 language code expected by Whisper, e.g. "fr" for "fr-FR" */
  get language() {
    return (this.lang || "en").split("-")[0].toLowerCase();
  }

  /** Seconds of silence stopping the recording, 0 when disabled */
  private get silenceSeconds() {
    return Number.isFinite(this.silence) && this.silence > 0 ? this.silence : 0;
  }

  async connectedCallback() {
    super.connectedCallback();
    const content = this.innerHTML.trim();
    this.question = content || t(this, "speechQuestion");
    // parse markdown into html
    const html = this.isHTML
      ? content
      : (await import("../../common/src/index.js")).md2HTML(content);
    // a blockquote at the end is the explanation
    const { content: question, feedback } = splitFeedback(html);
    this.questionHTML = question;
    this.explanation = feedback;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // release the microphone
    if (this.recording) {
      this._stopRecording();
    }
  }

  render() {
    const message = messages[this.message];
    return html`
      <div id="info" role="status" class=${message.class}>
        ${t(this, message.text)}
      </div>
      <main>
        <p class="question">${unsafeHTML(this.questionHTML)}</p>
        <button
          type="button"
          class="ed-button"
          id="mic-button"
          aria-pressed=${String(this.isRecording)}
          aria-label=${t(
            this,
            this.isRecording ? "stopRecording" : "startRecording",
          )}
          ?disabled=${this.readonly}
          @click=${this._handleMic}
        >
          ${unsafeHTML(micIcon)}
        </button>
        ${submitButton({
          label: t(this, "submit"),
          // enabled once there is a transcription
          disabled: this.readonly || this.transcript === "",
          onClick: this._handleResponse,
        })}
      </main>
      <progress
        max="100"
        ?hidden=${this.progress === undefined}
        .value=${this.progress ?? 0}
      ></progress>
      <p id="transcript" class="final">${this.transcript}</p>
      ${answerFeedbacks(this, {
        answered: this.readonly,
        score: this.score,
        answer: this.answer,
        explanation: this.explanation,
      })}
    `;
  }

  private _handleMic() {
    if (this.readonly) return;
    if (this.recording) {
      this._stopRecording();
    } else if (!this.busy) {
      this._startRecording();
    }
  }

  private async _startRecording() {
    const { recorder, transcriber, transformersUrl } = this
      .constructor as typeof EdSpeechElement;
    this.busy = true;
    this.transcript = "";
    const silence = this.silenceSeconds;
    try {
      this.recording = await recorder(
        silence > 0
          ? { silenceSeconds: silence, onSilence: () => this._stopRecording() }
          : {},
      );
    } catch (error) {
      this.busy = false;
      this.message = recordingError(error);
      return;
    }
    this.isRecording = true;
    this.message = silence > 0 ? "recording" : "recording_manual";
    // download the model while the learner speaks
    if (transcriber === transcribeWithWhisper) {
      preloadModel(this.model, transformersUrl, (percent) => {
        this.progress = percent;
      });
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
    this.isRecording = false;
    const { transcriber, transformersUrl } = this
      .constructor as typeof EdSpeechElement;
    try {
      const audio = await recording.stop();
      this.message = "transcribing";
      const text = await transcriber(audio, {
        model: this.model,
        language: this.language,
        transformersUrl,
        onProgress: (percent) => {
          this.message = "loading";
          this.progress = percent;
        },
      });
      this.transcript = text;
      this.message = text === "" ? "no_speech" : "transcribed";
    } catch (error) {
      console.error(error);
      this.message = "failed";
    } finally {
      this.progress = undefined;
      this.busy = false;
    }
  }

  private _handleResponse() {
    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const response = this.transcript;
    if (response.length === 0 || this.readonly) return;

    const { answer } = this;
    this.score =
      answer === undefined ? undefined : similarityScore(response, answer);
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
          ...(answer === undefined ? {} : { answer, score: this.score }),
        },
      }),
    );
    this.readonly = true;
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
