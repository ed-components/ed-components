import { EdProgressBarElement } from "./_EdProgressBar.js";
import type { EdAnsElement } from "../../ed-ans/src/EdAns.js";
import type { EdNumElement } from "../../ed-num/src/EdNum.js";
import type { EdChoiceElement } from "../../ed-choice/src/EdChoice.js";

EdProgressBarElement.define();

const edNumRegex = /^:num:\s+(?<answer>\d+)$/m;

/**
 * This component is a wrapper that allows to include multiple questions
 * with answers of different types in a lightweight markup langage based
 * on markdown.
 * Currently:
 * - single and multiple choice answer via ed-choice component using gfm task-lists.
 * - text answer via ed-ans component using unordered lists with scores.
 * - numeric answers via vanilla ed-ans component.
 * @export
 * @class EdPbElement
 * @extends {HTMLElement}
 */
export class EdPbElement extends HTMLElement {
  // number of answers handled in the problem
  private nAnsTot = 0;

  // number of answers user responded
  private nAns = 0;

  // score on pb as percentage
  private score = 0;

  static define(tagName = "ed-pb") {
    customElements.define(tagName, this);
  }

  static get observedAttributes() {
    return ["label", "description", "isHTML"];
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  get isHTML() {
    return this.hasAttribute("isHTML");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: block;
    }
    main {
      font-family: var(--font-sans, system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif);
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-style: solid;
      border-color: rgb(192, 192, 192);
      border-radius: 2em;
      padding: 0em 1em;
    }
    #progress {
      position: sticky;
      backdrop-filter: blur(23px);
      top: 0;
      z-index: 10;
    }
    </style>
    <main>
    <section id="progress">
      <h1 id="label"></h1>
      <ed-progress-bar id="bar-progress" label="Progress" percent="0" style="background-color: var(--blue-7, #1c7ed6);"></ed-progress-bar>
      <ed-progress-bar id="bar-results" label="Success" percent="0" style="background-color: var(--green-7, #37b24d);"></ed-progress-bar>
      <hr>
    </section>
    <article></article>
    </main>
    `;
  }

  async connectedCallback() {
    if (this.label) {
      this.shadowRoot.querySelector("#label").innerHTML = this.label;
    }
    // TODO use a template before mounting?
    const article = this.shadowRoot.querySelector("article");
    if (!this.isHTML) {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      article.innerHTML = md2HTML(this.innerHTML.trim());
    } else {
      article.innerHTML = this.innerHTML.trim();
    }
    // turn lists into ed components
    this.shadowRoot
      .querySelectorAll("ul")
      .forEach((ul: HTMLUListElement, i: number) => {
        // type of answer depends on list item type
        const li = ul.querySelector("li");

        // task-list is turned into ed-choice component
        if (li.querySelector("input[type='checkbox']:disabled") !== null) {
          this.nAnsTot += 1;
          // replace task-list with ed-choice
          // @ts-ignore
          const edChoice: EdChoiceElement = document.createElement("ed-choice");

          // TODO make it uniques checking for collisions
          edChoice.label = `Q${i + 1}: ${ul.parentElement.innerText.slice(
            0,
            30,
          )}`;
          // we don't require to transform md->html
          edChoice.isHTML = true;
          edChoice.innerHTML = ul.outerHTML;
          ul.parentNode.replaceChild(edChoice, ul);
        } else if (li.innerText.startsWith(":100: ")) {
          // verify if it is an ed-ans
          this.nAnsTot += 1;
          // replace unorder-list with ed-ans
          // @ts-ignore
          const edAns: EdAnsElement = document.createElement("ed-ans");

          // TODO make it uniques checking for collisions
          edAns.label = `Q${i + 1}: ${ul.parentElement.innerText.slice(0, 30)}`;
          edAns.innerHTML = ul.outerHTML;
          ul.parentNode.replaceChild(edAns, ul);
        } else if (li.innerText.startsWith(":num: ")) {
          const answer = edNumRegex.exec(li.innerText)?.groups?.answer;
          if (answer) {
            // replace unorder-list with ed-num
            this.nAnsTot += 1;
            // @ts-ignore
            const edNum: EdNumElement = document.createElement("ed-num");
            // TODO make it uniques checking for collisions
            edNum.label = `Q${i + 1}: ${ul.parentElement.innerText.slice(
              0,
              30,
            )}`;
            edNum.innerHTML = answer;
            ul.parentNode.replaceChild(edNum, ul);
          }
        }
      });

    // as a wrapper ed-pb catches events from his ed-components childrens
    article.addEventListener("edEvent", this._handleResponse.bind(this));
  }

  private _handleResponse(evt: Event) {
    evt.stopPropagation();
    this.nAns += 1;
    // TODO need to type custom edevents!
    // @ts-ignore
    this.score += evt.detail.score;

    const progressBar: EdProgressBarElement =
      this.shadowRoot.querySelector("#bar-progress");
    progressBar.setAttribute(
      "percent",
      String(Math.round((100 * this.nAns) / this.nAnsTot)),
    );

    const resultBar: EdProgressBarElement =
      this.shadowRoot.querySelector("#bar-results");
    const score = Math.round(this.score / this.nAnsTot);
    resultBar.setAttribute("percent", String(score));

    // if finished bubble event
    if (this.nAns < this.nAnsTot) {
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
          verb: "COMPLETED",
          score,
        },
      }),
    );
  }
}
