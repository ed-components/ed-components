//  TODO move this as dynamic import based on attribute lang
import winkNLP, { Bow } from "wink-nlp";
import similarity from "wink-nlp/utilities/similarity";
import model from "wink-eng-lite-web-model";

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
  label: string;

  private _answers: answerData[] = [];

  static define(tagName = "ed-ans") {
    customElements.define(tagName, this);
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
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: block;
    }
    div {
      display: flex;
      width: 100%;
      font-size: 1.1em;
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
    <output name="answer"></out>
    `;
  }

  async connectedCallback() {
    if (!this.html) {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      this.innerHTML = md2HTML(this.innerHTML);
    }

    this.querySelectorAll("ul > li").forEach((el: HTMLLIElement) => {
      const m = regexScoreAns.exec(el.innerText);
      if (m === null) {
        return;
      }
      const { score, answer } = m.groups;
      const bow = new Set(this._bagOfWords(m.groups.answer));
      this._answers.push({ score: Number(score), answer, bow });
    });

    const button: HTMLButtonElement = this.shadowRoot.querySelector("button");
    button.addEventListener("click", this._handleResponse.bind(this));
  }

  private _bagOfWords(s: string) {
    return nlp
      .readDoc(s)
      .tokens()
      .filter((t) => t.out(its.type) !== "punctuation")
      .out(its.value, as.set);
  }

  private _handleResponse() {
    // TODO handle a default base interface(date, url)

    // TODO get unique identifier of html element ie id or // dompath:
    // https://stackoverflow.com/a/69104350

    const input = this.shadowRoot.querySelector("input");
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
    // Disapble input and output results
    input.setAttribute("disabled", "");
    this.shadowRoot.querySelector(
      "output",
    ).innerHTML = `Score: ${score}% the correct answer was: ${this._answers[0].answer}`;
  }
}
