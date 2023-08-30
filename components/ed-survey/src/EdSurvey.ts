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
    const type: "smiley" | "survey" = this.type ?? "smiley";
    /**
     * type could be "smiley"(default) or "survey"
     */
    this.type = type;
    const div = this.shadowRoot.querySelector("div");
    const { choice, readonly } = this;
    div.innerHTML =
      this.type === "rating"
        ? `<nd-rating max="5" value="${choice}"></nd-rating>`
        : `<ed-smiley value="${choice}"></ed-smiley>`;
    if (readonly) {
      div.firstChild.setAttribue("readonly", "");
    }
    div.addEventListener("click", this._handleResponse.bind(this));
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(type: string) {
    this.setAttribute("type", type);
  }

  set question(question: string) {
    this.setAttribute("question", question);
  }

  get question() {
    return this.getAttribute("question") ?? "How are you today";
  }

  set choice(choice: string) {
    this.setAttribute("choice", choice);
  }

  get choice() {
    return this.getAttribute("choice");
  }

  get readonly() {
    return this.hasAttribute("readonly");
  }

  set readonly(readonly) {
    if (readonly) {
      this.setAttribute("readonly", "");
    } else {
      this.removeAttribute("readonly");
    }
  }

  static get observedAttributes() {
    return ["type", "question", "choice", "readonly"];
  }

  private _handleResponse(evt: Event) {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const el = evt.target as HTMLInputElement;
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
          choice: el.getAttribute("value"),
        },
      }),
    );
    this.setAttribute("readonly", "");
  }
}
