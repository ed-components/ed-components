import { NudeRating } from "./nudeui/nd-rating.js";
import { EdSmiley } from "./_EdSmiley.js";

NudeRating.define();
EdSmiley.define();

type SurveyType = "smiley" | "rating";

// This component implements a likert interaction activitie as defined in xapi spec
// ie, An interaction which asks the learner to select from a discrete set of choices on a scale
// see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities

export class EdSurveyElement extends HTMLElement {
  static define(tagName = "ed-survey") {
    customElements.define(tagName, this);
  }

  get type() {
    const type = this.getAttribute("type");
    switch (type) {
      case "rating":
        return type;
      default:
        return "smiley";
    }
  }

  set type(type: SurveyType) {
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

  get isHTML() {
    return this.hasAttribute("isHTML");
  }

  static get observedAttributes() {
    return ["type", "question", "choice", "readonly", "isHTML"];
  }

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
    <p class="question" aria-description="question"></p>
    <div></div>
    `;
  }

  async connectedCallback() {
    this.question = this.innerHTML ? this.innerHTML : "How are you today?";
    const questionEl = this.shadowRoot.querySelector(".question");
    if (!this.isHTML) {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      questionEl.innerHTML = md2HTML(this.innerHTML.trim());
    } else {
      questionEl.innerHTML = this.innerHTML.trim();
    }

    /**
     * type could be "smiley"(default) or "survey"
     */
    const type: SurveyType = this.type ?? "smiley";
    this.type = type;
    const div = this.shadowRoot.querySelector("div");
    const { choice, readonly } = this;
    div.innerHTML =
      this.type === "rating"
        ? `<nd-rating max="5" value="${choice}"></nd-rating>`
        : `<ed-smiley value="${choice}"></ed-smiley>`;
    if (readonly) {
      // div.firstChild.setAttribue("readonly", "");
    }
    div.addEventListener("click", this._handleResponse.bind(this));
  }

  private _handleResponse(evt: Event) {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const el = evt.target as HTMLInputElement;
    const choice = el.getAttribute("value");

    // if clicked outside a real choice return
    if (!choice) return;

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
          choice,
        },
      }),
    );
    this.setAttribute("readonly", "");
  }
}
