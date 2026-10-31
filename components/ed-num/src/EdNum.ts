import { css, html, LitElement } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { commonSheet } from "../../common/src/styles.js";
import { submitButton } from "../../common/src/submitButton.js";

// accept french decimal separator: "3,14" -> 3.14
const parseNumber = (s: string) => Number(s.trim().replace(",", "."));

/**
 * This component implements a numeric interaction activitie as defined in xapi spec
 * ie, any interaction which requires a numeric response from the learner.
 * see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
 *
 * @export
 * @class EdNumElement
 * @extends {LitElement}
 */
export class EdNumElement extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
    eval: { type: String },
    // learner input and score, once answered (attribute: false for the
    // custom elements manifest, which ignores state)
    value: { state: true, attribute: false },
    score: { state: true, attribute: false },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        display: block;
      }
    `,
  ];

  declare min?: number;

  declare max?: number;

  /** Step of the input, any decimal by default */
  declare step?: number;

  /**
   * Evaluation method
   *
   * By default calculate percentage of error
   *
   * If "exact": 100% if equal 0% if not
   */
  declare eval?: string;

  // reactive properties are declared, not class fields: a class field would
  // shadow the accessor of LitElement and disable updates
  declare private value: string;

  declare private score?: number;

  label?: string;

  // parsed from the content when connected
  _answer = NaN;

  constructor() {
    super();
    this.value = "";
  }

  static define(tagName = "ed-num") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    // the content is the answer
    this._answer = parseNumber(this.textContent ?? "");
  }

  render() {
    const answered = this.score !== undefined;
    return html`
      <div class="user-input">
        <input
          type="number"
          name="answer"
          placeholder="Enter number"
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${this.step ?? "any"}
          ?disabled=${answered}
          @input=${(evt: Event) => {
            this.value = (evt.target as HTMLInputElement).value;
          }}
        />
        ${submitButton({
          disabled: answered || this.value === "",
          onClick: this._handleResponse,
        })}
      </div>
      <output name="answer"
        >${
          answered
            ? `Score: ${this.score}% the correct answer was: ${this._answer}`
            : ""
        }</output
      >
    `;
  }

  private _handleResponse() {
    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350
    if (this.value === "") {
      return;
    }
    const answer = parseNumber(this.value);

    // if answer is 0 can't calculate error!
    const exact = this.eval === "exact" || this._answer === 0;

    // score calculated as a percentage based on error if not exact
    let score;
    if (!exact) {
      const error = Math.min(
        1,
        Math.abs(answer - this._answer) / Math.abs(this._answer),
      );
      score = Math.round(100 * (1 - error));
    } else {
      score = answer === this._answer ? 100 : 0;
    }
    this.score = score;

    const url = this.ownerDocument.location as Location;
    this.dispatchEvent(
      new CustomEvent("edEvent", {
        bubbles: true,
        detail: {
          date: new Date().toISOString(),
          url: url.host + url.pathname,
          tag: this.tagName,
          label: this.label,
          verb: "RESPONDED",
          score,
        },
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-num": EdNumElement;
  }
}
