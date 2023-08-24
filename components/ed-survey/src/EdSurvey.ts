import "./nudeui/nd-rating.js";
import "./_EdSmiley.js";

// This component implements a likert interaction activitie as defined in xapi spec
// ie, An interaction which asks the learner to select from a discrete set of choices on a scale
// see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
export class EdSurvey extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: block;
    }
    div {
      display: flex;
      justify-content: space-evenly;
    }
    .question {
      font-size: var(--font-size-fluid-2, max(1.5rem,min(6vw,2.5rem)));
      font-weight: var(--font-weight-6, 600);
    }
    </style>
    <p class="question" aria-label="question"></p>
    <div></div>
    `;
  }

  connectedCallback() {
    this.question = this.innerHTML ? this.innerHTML : "How are you today?";
    this.shadowRoot.querySelector("p").innerHTML = this.question;
    const div = this.shadowRoot.querySelector("div");
    div.innerHTML =
      this.type === "rating"
        ? `<nd-rating max="5" value="3"> </nd-rating>`
        : `<ed-smiley></ed-smiley>`;
    div.addEventListener("click", this._handleResponse.bind(this));
  }

  get type() {
    return this.getAttribute("type") ?? "smiley";
  }

  set question(question: string) {
    this.setAttribute("question", question);
  }

  get question() {
    return this.getAttribute("question") ?? "How are you today";
  }

  static get observedAttributes() {
    return ["type", "question"];
  }

  private _handleResponse(evt: Event) {
    const el = evt.target as HTMLInputElement;
    const value = el.getAttribute("value");
    // CustomEvent
    this.dispatchEvent(
      new CustomEvent("edEvent", {
        bubbles: true,
        detail: {
          date: new Date().toISOString(),
          url: window.location.toString(),
          edc: this.constructor.name,
          type: this.type,
          question: this.question,
          verb: "RESPONDED",
          choice: value,
        },
      }),
    );
    el.setAttribute("readonly", "");
  }
}
