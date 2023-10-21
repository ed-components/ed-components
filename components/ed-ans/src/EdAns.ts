import winkNLP from "https://cdn.jsdelivr.net/npm/wink-nlp@1.14.3/+esm";
import model from "https://cdn.jsdelivr.net/npm/wink-eng-lite-web-model@1.5.2/+esm";

const nlp = winkNLP(model);
// Acquire "its" and "as" helpers from nlp.
const its = nlp.its;
const as = nlp.as;

/**
 * @tag ed-ans
 *
 * @export
 * @class EdAnsElement
 * @extends {HTMLElement}
 *
 * @attr {string} eval - Select the type of evaluation allowed values are
 * 'exact' while give 100% or 0% wether it matches exactly the answer or not.
 * 'similarity' while eval similarity using nlp.
 *
 *  @attr {boolean} long - Turn answer into long fill-in that will open a textarea input element.
 *
 * @summary This component implements a fill-in interaction type as defined in xapi spec
 * ie, An interaction which requires the learner to supply a response in
 * the form of one or more strings of characters. A distinction between fill-in and long fill-in
 * is made via the boolean attribute long.
 * see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
 *
 */
export class EdAnsElement extends HTMLElement {
  static define(tagName = "ed-ans") {
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
    <label for="answer">Your answer</label>
    <input type="text" name="answer" placeholder="Enter your answer"/>
    <button type="submit">Submit</button>
    `;
  }

  connectedCallback() {
    // this.shadowRoot.querySelector("label").innerHTML = md2HTML(this.innerHTML);
    const correctAns = this.innerHTML;
    const button: HTMLButtonElement = this.shadowRoot.querySelector("button");
    const input: HTMLInputElement = this.shadowRoot.querySelector("input");
    // We allow 10% larger
    input.size = Math.round(correctAns.length * 1.1);
    input.addEventListener("change", (evt) => {
      const text = input.value;
      console.log(text);
      const doc = nlp.readDoc(text);

      doc.entities().each((e) => e.markup());
      this.shadowRoot.querySelector("input").innerHTML = doc.out(
        its.markedUpText,
      );
    });
    button.addEventListener("click", this._handleResponse.bind(this));
  }

  set eval(evaluation: string) {
    this.setAttribute("eval", evaluation);
  }

  get eval() {
    return this.getAttribute("eval") || "exact";
  }

  get long() {
    return this.hasAttribute("long");
  }

  set long(long: boolean) {
    if (long) {
      // TODO move to textarea???
      this.setAttribute("long", "");
    } else {
      this.removeAttribute("long");
    }
  }

  static get observedAttributes() {
    return ["eval", "long"];
  }

  private _handleResponse(evt: Event) {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const el = evt.target as HTMLInputElement;
    const input = this.shadowRoot.querySelector("input");
    const { value } = input;

    // TODO find a way to inform user
    if (value.length === 0) {
      return;
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
          verb: "RESPONDED",
          value,
        },
      }),
    );
    this.setAttribute("readonly", "");
  }
}
