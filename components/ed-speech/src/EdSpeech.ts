// @ts-nocheck

import md2Html from "@ed-components/common";

let startTimestamp: number;
let ignoreOnend = false;
let recognizing = false;

// This component implements text to speech using web speech api
export class EdSurvey extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: block;
      --bs-alert-bg: transparent;
      --bs-alert-padding-x: 1rem;
      --bs-alert-padding-y: 1rem;
      --bs-alert-margin-bottom: 1rem;
      --bs-alert-color: inherit;
      --bs-alert-border-color: transparent;
      --bs-alert-border: var(--border-size-1) solid var(--gray-1);
      --bs-alert-border-radius: var(--border-radius-3);
      --bs-alert-link-color: inherit;
    }
    main {
      display: flex;
    }
    #mic-button {
      background-color: var(--red-5);
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
         --bs-alert-color: var(--orange-5);
         --bs-alert-bg: var(--orange-1);
         --bs-alert-border-color: var(--orange-3);
         --bs-alert-link-color: var(--orange-1mic-butt)mic-buuton;
      }
      &.success {
        --bs-alert-color: var(--blue-5);
         --bs-alert-bg: var(--blue-1);
         --bs-alert-border-color: var(--blue-3);
         --bs-alert-link-color: var(--blue-1);
      }
    }
    .final {
        font-weight: var(--font-weight-8);
      }
      .interim {
        color: var(--blue-5);
      }
    </style>
    <div id="info"></div>
    <main>
      <p class="question" aria-label="question"></p>
      <button id="mic-button" style="display: none;">
        <!-- from bootstrap icons -->
        <svg class="mic" role="icon" aria-label="Start microphone" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
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
  }

  connectedCallback() {
    this.question = this.innerHTML ? this.innerHTML : "Say something!";
    this.shadowRoot.querySelector("p").innerHTML = md2Html(this.question);

    this.startButton = this.shadowRoot.querySelector(
      "#mic-button",
    ) as HTMLButtonElement;
    this.submitButton = this.shadowRoot.querySelector(
      "#submit",
    ) as HTMLButtonElement;
    this.finalParagraph = this.shadowRoot.querySelector(
      "#final-result",
    ) as HTMLParagraphElement;
    this.interimParagraph = this.shadowRoot.querySelector(
      "#interim-result",
    ) as HTMLParagraphElement;

    // event listeners
    this.startButton.addEventListener("click", this._handleClick.bind(this));
    this.submitButton.addEventListener(
      "click",
      this._handleResponse.bind(this),
    );

    if (!("webkitSpeechRecognition" in window)) {
      this.showInfo("upgrade");
    } else {
      // webspeech available
      this.showInfo("start");
      this.startButton.style.display = "inline-block";
      // eslint-disable-next-line new-cap
      this.recognition = new webkitSpeechRecognition() as SpeechRecognition;
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onstart = () => {
        recognizing = true;
        this.showInfo("speak_now");
        this.startButton.className = "recording";
      };

      this.recognition.onerror = (evt) => {
        this.startButton.className = "error";
        if (evt.error === "no-speech") {
          this.showInfo("no_speech");
          ignoreOnend = true;
        }
        if (evt.error === "audio-capture") {
          this.showInfo("no_microphone");
          ignoreOnend = true;
        }
        if (evt.error === "not-allowed") {
          if (evt.timeStamp - startTimestamp < 100) {
            this.showInfo("blocked");
          } else {
            this.showInfo("denied");
          }
          ignoreOnend = true;
        }
      };
      this.recognition.onend = () => {
        this.startButton.className = "";
        recognizing = false;
        if (ignoreOnend) {
          return;
        }
        // start_img.src = "images/mic.gif";
        this.showInfo("stop");
      };

      this.recognition.onresult = (evt: SpeechRecognitionResult) => {
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

  set lang(lang: string) {
    this.setAttribute("lang", lang);
  }

  get lang() {
    return this.getAttribute("lang") ?? document.documentElement.lang;
  }

  static get observedAttributes() {
    return ["question"];
  }

  private showInfo(s: string) {
    if (s) {
      const message = messages[s];
      this.shadowRoot.querySelector("#info").innerHTML = message.msg;
      this.shadowRoot.querySelector("#info").className = message.class;
    } else {
      this.shadowRoot.querySelector("#info").style = "display: none;";
      this.shadowRoot.querySelector("#info").className = "";
    }
  }

  private _handleClick(evt: Event) {
    if (recognizing) {
      this.recognition.stop();
      return;
    }
    this.final_transcript = "";
    this.recognition.lang = this.lang;
    this.recognition.start();

    this.finalParagraph.innerHTML = "";
    this.interimParagraph.innerHTML = "";
    // start_img.src = "images/mic-slash.gif";
    this.showInfo("allow");
    startTimestamp = evt.timeStamp;
  }

  private _handleResponse(evt: Event) {
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
          type: this.type,
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
