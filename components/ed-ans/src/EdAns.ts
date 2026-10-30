//  TODO move this as dynamic import based on attribute lang
import winkNLP from "wink-nlp";
import similarity from "wink-nlp/utilities/similarity";
import model from "wink-eng-lite-web-model";

import { checkButtonHTML } from "../../common/src/checkButton.js";
import { commonSheet, stylesheet } from "../../common/src/styles.js";

const nlp = winkNLP(model);
// Acquire "its" and "as" helpers from nlp.
const { its } = nlp;
const { as } = nlp;

// Match score and ans as regexp
const regexScoreAns = /^:(?<score>\d+):\s(?<answer>.*$)/;
// typings
type answerData = {
  bow: Set<string>;
  score: number;
  answer: string;
};

// shared by all instances (adoptedStyleSheets)
const sheet = stylesheet(`
:host {
  display: block;
}
`);

/**
 * @tag ed-ans
 *
 * @export
 * @class EdAnsElement
 * @extends {HTMLElement}
 *
 *
 *  @attr {boolean} html - Is html already parsed.
 *
 * @summary This component implements a fill-in interaction type as defined in xapi spec
 * ie, An interaction which requires the learner to supply a response in
 * the form of one or more strings of characters. A distinction between fill-in and long fill-in
 * is made via the boolean attribute long.
 * see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
 *
 */
export class EdAnsElement extends HTMLElement {
  // attached in the constructor, never null
  declare readonly shadowRoot: ShadowRoot;

  label?: string;

  private _answers: answerData[] = [];

  // authored content, kept as connectedCallback replaces innerHTML with html
  private _source?: string;

  static define(tagName = "ed-ans") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  static get observedAttributes() {
    return ["html"];
  }

  get html() {
    return this.hasAttribute("html");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];
    this.shadowRoot.innerHTML = `
    <div class="user-input">
    <input type="text" name="answer" placeholder="Enter your answer"/>
    ${checkButtonHTML}
    </div>
    <output name="answer"></output>
    `;
    // registered once: connectedCallback may run several times
    this.shadowRoot
      .querySelector("button")!
      .addEventListener("click", this._handleResponse.bind(this));
  }

  async connectedCallback() {
    this._source ??= this.innerHTML;
    // parse markdown into html
    const { md2HTML } = this.html
      ? { md2HTML: (s: string) => s }
      : await import("../../common/src/index.js");

    // rebuild after the await: connectedCallback may run several times
    this.innerHTML = md2HTML(this._source);
    this._answers = [];
    this.querySelectorAll<HTMLLIElement>("ul > li").forEach((el) => {
      const m = regexScoreAns.exec(el.innerText);
      if (m === null) {
        return;
      }
      const { score, answer } = m.groups as { score: string; answer: string };
      const bow = new Set(this._bagOfWords(answer));
      this._answers.push({ score: Number(score), answer, bow });
    });
  }

  private _bagOfWords(s: string) {
    return nlp
      .readDoc(s.toLocaleLowerCase())
      .tokens()
      .filter((t) => t.out(its.type) !== "punctuation")
      .out(its.value, as.set);
  }

  private _handleResponse() {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350
    const input = this.shadowRoot.querySelector("input")!;
    // not evt.target, which may be the button icon
    const button = this.shadowRoot.querySelector("button")!;

    const answer = input.value;
    // TODO find a way to inform user(submit disabled)
    if (answer.length === 0) {
      return;
    }

    // we search for best similarity
    // The score is the product of similarity and best match score
    const bowAns: Set<string> = new Set(this._bagOfWords(answer));

    const score = Math.round(
      this._answers.reduce((acc, { score, bow }) => {
        const sim = similarity.set.tversky(bowAns, bow);
        if (sim * score > acc) {
          return sim * score;
        }
        return acc;
      }, 0),
    );

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
      `Score: ${score}% the correct answer was: ${
        this._answers[0]?.answer ?? ""
      }`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-ans": EdAnsElement;
  }
}
