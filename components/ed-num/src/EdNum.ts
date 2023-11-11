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
  private _answer: number;

  static define(tagName = "ed-num") {
    customElements.define(tagName, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: block;
    }
    label, input {
      display: block;
    }
    </style>
    <input type="number" name="answer" placeholder="Enter number"/>
    <label for="answer"></label>
    <button type="submit">Submit</button>
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
    return ["max", "min", "step", "readonly"];
  }

  private _handleResponse(evt: Event) {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const input = this.shadowRoot.querySelector("input");
    const answer = Number(input.value);
    this.shadowRoot.querySelector("label").innerHTML = `You answered ${answer}`;

    // score calculated as a percentage based on error
    const error = Math.min(
      1,
      Math.abs(answer - this._answer) / Math.abs(this._answer),
    );
    const score = Math.round(100 * (1 - error));
    const url = this.ownerDocument.location as Location;
    // CustomEvent
    this.dispatchEvent(
      new CustomEvent("edEvent", {
        bubbles: true,
        detail: {
          date: new Date().toISOString(),
          url: url.host + url.pathname,
          tag: this.tagName,
          verb: "RESPONDED",
          score,
        },
      }),
    );
    this.setAttribute("readonly", "");
  }
}
