import { checkButtonHTML } from "../../common/src/checkButton.js";
import { commonSheet, stylesheet } from "../../common/src/styles.js";

// accept french decimal separator: "3,14" -> 3.14
const parseNumber = (s: string) => Number(s.trim().replace(",", "."));

// shared by all instances (adoptedStyleSheets)
const sheet = stylesheet(`
:host {
  display: block;
}
`);

/**
 * This component implements a numeric interaction activitie as defined in xapi spec
 * ie, any interaction which requires a numeric response from the learner.
 * see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
 *
 * @export
 * @class EdNumElement
 * @extends {HTMLElement}
 */
export class EdNumElement extends HTMLElement {
  // attached in the constructor, never null
  declare readonly shadowRoot: ShadowRoot;

  label?: string;

  // parsed from innerHTML when connected
  _answer = NaN;

  static define(tagName = "ed-num") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
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

  /**
   * Evaluation method
   *
   * By default calculate percentage of error
   *
   * If "exact": 100% if equal 0% if not
   *
   * @memberof EdNumElement
   */
  get eval(): string | null {
    return this.getAttribute("eval");
  }

  set eval(val: string) {
    this.setAttribute("eval", val);
  }

  get min() {
    return Number(this.getAttribute("min"));
  }

  set min(min: number) {
    this.setAttribute("min", String(min));
  }

  get max() {
    return Number(this.getAttribute("max"));
  }

  set max(max: number) {
    this.setAttribute("max", String(max));
  }

  get step() {
    return Number(this.getAttribute("step"));
  }

  set step(step: number) {
    this.setAttribute("step", String(step));
  }

  static get observedAttributes() {
    return ["max", "min", "step", "eval", "readonly"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];
    this.shadowRoot.innerHTML = `
    <div class="user-input">
    <input type="number" name="answer" placeholder="Enter number"/>
    ${checkButtonHTML}
    </div>
    <output name="answer"></output>
    `;
    // registered once: connectedCallback may run several times
    this.shadowRoot
      .querySelector("button")!
      .addEventListener("click", this._handleResponse.bind(this));
  }

  connectedCallback() {
    // this.innerHTML contains answer
    this._answer = parseNumber(this.innerHTML);

    // pass attributes to input
    const input = this.shadowRoot.querySelector("input")!;
    if (this.hasAttribute("min")) {
      input.setAttribute("min", String(this.min));
    }
    if (this.hasAttribute("max")) {
      input.setAttribute("max", String(this.max));
    }
    // default step is 1, which would flag decimal answers as invalid
    input.setAttribute(
      "step",
      this.hasAttribute("step") ? String(this.step) : "any",
    );
  }

  private _handleResponse() {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350
    const input = this.shadowRoot.querySelector("input")!;
    // not evt.target, which may be the button icon
    const button = this.shadowRoot.querySelector("button")!;

    // TODO find a way to inform user(submit disabled)
    if (input.value.length === 0) {
      return;
    }
    const answer = parseNumber(input.value);

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

    const url = this.ownerDocument.location as Location;
    // CustomEvent
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
    // Disable input and button
    input.setAttribute("disabled", "");
    button.setAttribute("disabled", "");
    // output results
    this.shadowRoot.querySelector("output")!.innerHTML =
      `Score: ${score}% the correct answer was: ${this._answer}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-num": EdNumElement;
  }
}
