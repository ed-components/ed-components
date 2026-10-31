import { css, html, LitElement } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { NudeRating } from "./nudeui/nd-rating.js";
import { EdSmiley } from "./_EdSmiley.js";
import { commonSheet } from "../../common/src/styles.js";

NudeRating.define();
EdSmiley.define();

type SurveyType = "smiley" | "rating";

// This component implements a likert interaction activitie as defined in xapi spec
// ie, An interaction which asks the learner to select from a discrete set of choices on a scale
// see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities

export class EdSurveyElement extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    type: {
      reflect: true,
      // "smiley" unless "rating"
      converter: {
        fromAttribute: (value: string | null): SurveyType =>
          value === "rating" ? "rating" : "smiley",
      },
    },
    question: { type: String, reflect: true },
    choice: { type: String, reflect: true },
    readonly: { type: Boolean, reflect: true },
    // HTML lowercases attribute names
    isHTML: { type: Boolean, attribute: "ishtml" },
    // question rendered from the markdown content
    questionHTML: { state: true, attribute: false },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        display: block;
      }
      div {
        display: flex;
        justify-content: space-evenly;
      }
      .question {
        font-size: var(--font-size-fluid-2, max(1.5rem, min(6vw, 2.5rem)));
        font-weight: var(--font-weight-6, 600);
      }
    `,
  ];

  declare type: SurveyType;

  declare question: string;

  declare choice?: string;

  declare readonly: boolean;

  declare isHTML: boolean;

  declare private questionHTML: string;

  static define(tagName = "ed-survey") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  constructor() {
    super();
    this.type = "smiley";
    this.question = "How are you today?";
    this.readonly = false;
    this.isHTML = false;
    this.questionHTML = "";
  }

  async connectedCallback() {
    super.connectedCallback();
    const content = this.innerHTML.trim();
    this.question = content || "How are you today?";
    if (this.isHTML) {
      this.questionHTML = content;
    } else {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      this.questionHTML = md2HTML(content);
    }
  }

  render() {
    const choice = ifDefined(this.choice);
    return html`
      <p class="question" aria-description="question">
        ${unsafeHTML(this.questionHTML)}
      </p>
      <div @click=${this._handleResponse}>
        ${
          this.type === "rating"
            ? html`<nd-rating max="5" value=${choice}></nd-rating>`
            : html`<ed-smiley value=${choice}></ed-smiley>`
        }
      </div>
    `;
  }

  private _handleResponse(evt: Event) {
    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    // the clicked ed-smiley or nd-rating, whose value is set on click
    const value = (evt.target as EdSmiley | NudeRating).value;

    // if clicked outside a real choice return
    if (value === undefined || value === null || value === "") return;
    const choice = String(value);

    const url = this.ownerDocument.location as Location;
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
    this.readonly = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-survey": EdSurveyElement;
  }
}
