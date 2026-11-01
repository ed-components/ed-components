import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import {
  answerFeedbacks,
  EdFeedbackElement,
} from "../../common/src/EdFeedback.js";
import type { NumericQuestion } from "../../common/src/emd.js";
import { formatNumber, t } from "../../common/src/i18n.js";
import { commonSheet } from "../../common/src/styles.js";
import { submitButton } from "../../common/src/submitButton.js";

EdFeedbackElement.define();

// learner input: accept french decimal separator, "3,14" -> 3.14
const parseNumber = (s: string) => Number(s.trim().replace(",", "."));

/**
 * This component implements a numeric interaction activitie as defined in xapi spec
 * ie, any interaction which requires a numeric response from the learner.
 * see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
 *
 * Its content is an emd numeric question (spec/emd.md): a stem, the expected
 * number as `- :num: 3.14`, then an optional feedback. The expected number
 * alone (`3.14`) is still accepted.
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
    // question parsed by a wrapper (ed-pb), instead of the content
    emdQuestion: { attribute: false },
    // learner input and score, once answered (attribute: false for the
    // custom elements manifest, which ignores state)
    value: { state: true, attribute: false },
    score: { state: true, attribute: false },
    explanation: { state: true, attribute: false },
    stem: { state: true, attribute: false },
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

  declare emdQuestion?: NumericQuestion;

  // feedback of the question, shown once answered (html)
  declare private explanation?: string;

  // question before the input (html)
  declare private stem: string;

  // content being parsed
  private processing?: Promise<void>;

  label?: string;

  // parsed from the content
  _answer = NaN;

  constructor() {
    super();
    this.value = "";
    this.stem = "";
  }

  static define(tagName = "ed-num") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  protected updated(changed: PropertyValues<this>) {
    // processed once rendered, then when the question changes (moving the
    // element in the page keeps the answer)
    if (this.processing === undefined || changed.has("emdQuestion")) {
      this.processing = this._processContent();
    }
  }

  /** Also wait for the question parsed from the content, and its rendering */
  protected async getUpdateComplete(): Promise<boolean> {
    const result = await super.getUpdateComplete();
    await this.processing;
    return (await super.getUpdateComplete()) && result;
  }

  private async _processContent() {
    // state changes must not happen during the update that started processing
    await null;
    let question = this.emdQuestion;
    if (question === undefined) {
      const { bareNumber, parseQuestions } = await import(
        "../../common/src/emd.js"
      );
      const { unescapeMarkdown } = await import("../../common/src/index.js");
      // the expected number alone is the former syntax
      const source = unescapeMarkdown(this.innerHTML.trim()).replace(
        bareNumber,
        "- :num: $1\n",
      );
      question = parseQuestions(source)
        .map((found) => found.question)
        .find((found): found is NumericQuestion => found.type === "numeric");
    }
    const { md2HTML } = await import("../../common/src/index.js");
    this._answer = question?.answer ?? NaN;
    this.stem = question?.stem ? md2HTML(question.stem) : "";
    this.explanation = question?.feedback && md2HTML(question.feedback);
  }

  render() {
    const answered = this.score !== undefined;
    return html`
      ${this.stem ? html`<div class="stem">${unsafeHTML(this.stem)}</div>` : nothing}
      <div class="user-input">
        <input
          type="number"
          name="answer"
          placeholder=${t(this, "enterNumber")}
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${this.step ?? "any"}
          ?disabled=${answered}
          @input=${(evt: Event) => {
            this.value = (evt.target as HTMLInputElement).value;
          }}
        />
        ${submitButton({
          label: t(this, "submit"),
          disabled: answered || this.value === "",
          onClick: this._handleResponse,
        })}
      </div>
      ${answerFeedbacks(this, {
        answered,
        score: this.score,
        answer: formatNumber(this, this._answer),
        explanation: this.explanation,
      })}
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
