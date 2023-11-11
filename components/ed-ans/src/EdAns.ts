// @ts-nocheck
//  TODO move this as dynamic import based on attribute lang
import winkNLP, { Bow } from "wink-nlp";
import similarity from "wink-nlp/utilities/similarity";
import model from "wink-eng-lite-web-model";
const nlp = winkNLP(model);
// Acquire "its" and "as" helpers from nlp.
const { its } = nlp;
const { as } = nlp;

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
  private _correctAns: string;

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
    div {
      display: flex;
      width: 100%;
    }
    input {
      flex: 1;
    }
    label {
      display: block;
    }
    </style>
    <div>
    <input type="text" name="answer" placeholder="Enter your answer"/>
    <button type="submit">Submit</button>
    </div>
    <label></label>
    <out></out>
    `;
  }

  connectedCallback() {
    // TODO mustn't be empty
    this._correctAns = this.innerHTML.trim();

    const button: HTMLButtonElement = this.shadowRoot.querySelector("button");
    button.addEventListener("click", this._handleResponse.bind(this));

    // For debug purposes
    // const input: HTMLInputElement = this.shadowRoot.querySelector("input");
    // input.addEventListener("keyup", (evt) => {
    //   const ans = input.value;
    //   const bowAns: Bow = nlp
    //     .readDoc(ans)
    //     .tokens()
    //     // .filter((t) => t.out(its.type) === "punctuation")
    //     .out(its.value, as.bow);
    //   const setAns = nlp
    //     .readDoc(ans)
    //     .tokens()
    //     // .filter((t) => t.out(its.type) === "punctuation")
    //     .out(its.value, as.set);

    //   this.shadowRoot.querySelector(
    //     "out",
    //   ).innerHTML = `COSINE SIMILARITY: ${similarity.bow.cosine(
    //     bowAns,
    //     bowCorrectAns,
    //   )}|TVERTSY:  ${similarity.set.tversky(
    //     setAns,
    //     setCorrectAns,
    //   )}|OO:  ${similarity.set.oo(setAns, setCorrectAns)}`;
    // });
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

  private _calculate_similarity(ans: string) {
    const bowAns: Bow = nlp
      .readDoc(ans)
      .tokens()
      // .filter((t) => t.out(its.type) === "punctuation")
      .out(its.value, as.bow);

    const bowCorrectAns: Bow = nlp
      .readDoc(this._correctAns)
      .tokens()
      // .filter((t) => t.out(its.type) === "punctuation")
      .out(its.value, as.bow);
    return similarity.bow.cosine(bowAns, bowCorrectAns);
  }

  private _handleResponse() {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const input = this.shadowRoot.querySelector("input");
    const answer = input.value;

    const score = Math.round(100 * this._calculate_similarity(answer));

    // TODO find a way to inform user(submit disabled)
    if (answer.length === 0) {
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
          score,
        },
      }),
    );
    // Replace input with answer
    const p = document.createElement("p");
    p.innerHTML = answer;
    input.parentNode.replaceWith(p);
    this.shadowRoot.querySelector(
      "label",
    ).innerHTML = `Score: ${score}% the correct answer was: ${this._correctAns}`;
  }
}
