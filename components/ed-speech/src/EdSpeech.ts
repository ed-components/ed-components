/// <reference types="dom-speech-recognition" />

import { commonSheet, stylesheet } from "../../common/src/styles.js";

// This component implements speech to text using web speech api

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
}
#mic-button {
  background-color: var(--red-5, #ff6b6b);
  color: white;
  &.recording {
    background-color: initial;
    color: initial;
  }
  &.error {
    &::before {
      content: "!";
    }
    
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
     --bs-alert-color: var(--orange-5, #ff922b);
     --bs-alert-bg: var(--orange-1, #ffe8cc);
     --bs-alert-border-color: var(--orange-3, #ffc078);
     --bs-alert-link-color: var(--orange-1, #ffe8cc);
  }
  &.success {
    --bs-alert-color: var(--blue-5, #339af0);
     --bs-alert-bg: var(--blue-1, #d0ebff);
     --bs-alert-border-color: var(--blue-3, #74c0fc);
     --bs-alert-link-color: var(--blue-1, #d0ebff);
  }
}
.final {
    font-weight: var(--font-weight-8, 800);
  }
  .interim {
    color: var(--blue-5, #339af0);
  }
`);

export class EdSpeechElement extends HTMLElement {
  // attached in the constructor, never null
  declare readonly shadowRoot: ShadowRoot;

  question = "";

  private startButton: HTMLButtonElement;

  private submitButton: HTMLButtonElement;

  private finalParagraph: HTMLParagraphElement;

  private interimParagraph: HTMLParagraphElement;

  private recognition?: SpeechRecognition;

  // recognition state, per instance
  private startTimestamp = 0;

  private ignoreOnend = false;

  private recognizing = false;

  static define(tagName = "ed-speech") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }
  static get observedAttributes() {
    // HTML lowercases attribute names: isHTML is observed as ishtml
    return ["question", "lang", "ishtml"];
  }

  set lang(lang: string) {
    this.setAttribute("lang", lang);
  }

  get lang() {
    return this.getAttribute("lang") ?? document.documentElement.lang;
  }

  get isHTML() {
    return this.hasAttribute("isHTML");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];

    this.shadowRoot.innerHTML = `
    <div id="info"></div>
    <main>
      <p class="question" aria-description="question"></p>
      <button id="mic-button" style="display: none;">
        <!-- from bootstrap icons -->
        <svg class="mic" aria-label="Start microphone" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          fill="currentColor" viewBox="0 0 16 16">
          <title>Mic</title>
          <path
            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
          <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
        </svg>
        </button>
        <button id="submit">Submit</button>
    </main>
    <div id="results">
          <p id="final-result" class="final"></p>
          <p id="interim-result" class="interim"></p>
    </div>
    `;

    this.startButton =
      this.shadowRoot.querySelector<HTMLButtonElement>("#mic-button")!;
    this.submitButton =
      this.shadowRoot.querySelector<HTMLButtonElement>("#submit")!;
    this.finalParagraph =
      this.shadowRoot.querySelector<HTMLParagraphElement>("#final-result")!;
    this.interimParagraph =
      this.shadowRoot.querySelector<HTMLParagraphElement>("#interim-result")!;

    // event listeners, registered once (connectedCallback may run several times)
    this.startButton.addEventListener("click", this._handleClick.bind(this));
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

    if (!("webkitSpeechRecognition" in window)) {
      this.showInfo("upgrade");
    } else {
      // webspeech available
      this.showInfo("start");
      this.startButton.style.display = "inline-block";
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onstart = () => {
        this.recognizing = true;
        this.showInfo("speak_now");
        this.startButton.className = "recording";
      };

      this.recognition.onerror = (evt) => {
        this.startButton.className = "error";
        if (evt.error === "no-speech") {
          this.showInfo("no_speech");
          this.ignoreOnend = true;
        }
        if (evt.error === "audio-capture") {
          this.showInfo("no_microphone");
          this.ignoreOnend = true;
        }
        if (evt.error === "not-allowed") {
          if (evt.timeStamp - this.startTimestamp < 100) {
            this.showInfo("blocked");
          } else {
            this.showInfo("denied");
          }
          this.ignoreOnend = true;
        }
      };
      this.recognition.onend = () => {
        this.startButton.className = "";
        this.recognizing = false;
        if (this.ignoreOnend) {
          return;
        }
        // start_img.src = "images/mic.gif";
        this.showInfo("stop");
      };

      this.recognition.onresult = (evt) => {
        let finalTranscript = "";
        let interimTranscript = "";
        for (let i = evt.resultIndex; i < evt.results.length; ++i) {
          if (evt.results[i].isFinal) {
            finalTranscript += evt.results[i][0].transcript;
          } else {
            interimTranscript += evt.results[i][0].transcript;
          }
        }

        this.finalParagraph.innerHTML = finalTranscript;
        this.interimParagraph.innerHTML = interimTranscript;
      };
    }
  }

  private showInfo(s: keyof typeof messages) {
    const message = messages[s];
    const info = this.shadowRoot.querySelector("#info")!;
    info.innerHTML = message.msg;
    info.className = message.class;
  }

  private _handleClick(evt: Event) {
    // the mic button is only displayed when speech recognition is available
    if (this.recognition === undefined) {
      return;
    }
    if (this.recognizing) {
      this.recognition.stop();
      return;
    }
    this.recognition.lang = this.lang;
    this.recognition.start();

    this.finalParagraph.innerHTML = "";
    this.interimParagraph.innerHTML = "";
    // start_img.src = "images/mic-slash.gif";
    this.showInfo("allow");
    this.startTimestamp = evt.timeStamp;
  }

  private _handleResponse() {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const response = this.finalParagraph.innerHTML;

    if (response.length === 0) return;

    const url = this.ownerDocument.location as Location;
    // CustomEvent
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
        },
      }),
    );
    this.setAttribute("readonly", "");
  }
}

const messages = {
  start: {
    msg: "Click on the microphone icon and begin speaking.",
    class: "alert success",
  },
  speak_now: {
    msg: "Speak now.",
    class: "alert success",
  },
  no_speech: {
    msg: 'No speech was detected. You may need to adjust your <a href="//support.google.com/chrome/answer/2693767" target="_blank">microphone settings</a>.',
    class: "alert warning",
  },
  no_microphone: {
    msg: 'No microphone was found. Ensure that a microphone is installed and that <a href="//support.google.com/chrome/answer/2693767" target="_blank">microphone settings</a> are configured correctly.',
    class: "alert warning",
  },
  allow: {
    msg: 'Click the "Allow" button above to enable your microphone.',
    class: "alert warning",
  },
  denied: {
    msg: "Permission to use microphone was denied.",
    class: "alert warning",
  },
  blocked: {
    msg: "Permission to use microphone is blocked. To change, go to chrome://settings/content/microphone",
    class: "alert warning",
  },
  upgrade: {
    msg: 'Web Speech API is not supported by this browser. It is only supported by <a href="//www.google.com/chrome">Chrome</a> version 25 or later on desktop and Android mobile.',
    class: "alert warning",
  },
  stop: {
    msg: "Stopped listening, click on the microphone icon to restart",
    class: "alert success",
  },
};

declare global {
  interface HTMLElementTagNameMap {
    "ed-speech": EdSpeechElement;
  }
}
