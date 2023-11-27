import { EdCheckButtonElement } from "../../common/src/EdCheckButton.js";

EdCheckButtonElement.define();

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
  label: string;

  _answer: number;

  static define(tagName = "ed-num") {
    customElements.define(tagName, this);
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
  get eval() {
    return this.getAttribute("eval");
  }

  set eval(val) {
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
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: block;
    }
    div {
      display: flex;
      width: 100%;
      & > * {font-size: 1.1em;}
    }
    input {
      flex: 1;
    }
    </style>
    <div class="user-input">
    <input type="number" name="answer" placeholder="Enter number"/>
    <button is="ed-check-button"/>
    </div>
    <output name="answer"></out>
    `;
  }

  connectedCallback() {
    // this.innerHTML contains answer
    this._answer = Number(this.innerHTML);

    const button = this.shadowRoot.querySelector("button");
    // pass attributes to input
    const input = this.shadowRoot.querySelector("input");
    if (this.min) {
      input.setAttribute("min", String(this.min));
    }
    if (this.max) {
      input.setAttribute("max", String(this.max));
    }
    if (this.step) {
      input.setAttribute("step", String(this.step));
    }
    button.addEventListener("click", this._handleResponse.bind(this));
  }

  private _handleResponse(evt: Event) {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350
    const input = this.shadowRoot.querySelector("input");
    const button = evt.target as EdCheckButtonElement;

    // TODO find a way to inform user(submit disabled)
    if (input.value.length === 0) {
      return;
    }
    const answer = Number(input.value);

    // if answer is 0 can't calculate error!
    if (this._answer === 0) {
      this.eval = "exact";
    }

    // score calculated as a percentage based on error if not exact
    let score;
    if (this.eval !== "exact") {
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
    this.shadowRoot.querySelector(
      "output",
    ).innerHTML = `Score: ${score}% the correct answer was: ${this._answer}`;
  }
}
