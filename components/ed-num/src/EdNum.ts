import md2Html from "@ed-components/common";

/**
 * This component implements a numeric interaction activitie as defined in xapi spec
 * ie, an interaction which requires a numeric response from the learner.
 * see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
 *
 * @export
 * @class EdNum
 * @extends {HTMLElement}
 */
export class EdNum extends HTMLElement {
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
    <label for="answer"></label>
    <input type="number" name="answer" placeholder="Enter number"/>
    <button type="submit">Submit</button>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("label").innerHTML = md2Html(this.innerHTML);
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

  get answer() {
    return Number(this.getAttribute("answer"));
  }

  set answer(answer: number) {
    this.setAttribute("answer", String(answer));
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
    return ["answer", "choice", "readonly", "max", "min", "step"];
  }

  private _handleResponse(evt: Event) {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const el = evt.target as HTMLInputElement;
    const input = this.shadowRoot.querySelector("input");
    console.log(el);

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
          value: input.value,
        },
      }),
    );
    this.setAttribute("readonly", "");
  }
}
