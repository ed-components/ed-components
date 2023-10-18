// @ts-nocheck

import { md2HTML } from "../../common/src/index.js";
import { EdProgressBarElement } from "./_EdProgressBar.js";

EdProgressBarElement.define();

/**
 * This component is a wrapper that allows to include multiple questions
 * with answers of different types in a lightweight markup langage based
 * on markdown
 *
 * @export
 * @class EdPbElement
 * @extends {HTMLElement}
 */
export class EdPbElement extends HTMLElement {
  // number of answers handled in the problem
  private nAnsTot = 0;

  // number of answers user responded
  private nAns = 0;

  // score on pb as petrcentage
  private score = 0;

  static define(tagName = "ed-pb") {
    customElements.define(tagName, this);
  }

  static get observedAttributes() {
    return ["label", "description"];
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

  connectedCallback() {
    // parse markdown into html
    const contents = md2HTML(this.innerHTML.trim());

    // TODO use a template before mounting?
    const article = this.shadowRoot.querySelector("article");
    article.innerHTML = contents;

    // prepare html
    // turn task-lists into ed-choices components
    this.shadowRoot
      .querySelectorAll("ul")
      .forEach((ul: HTMLUListElement, i: bigint) => {
        // verify if it a task-list
        if (ul.querySelector("li > input[type='checkbox']:disabled") === null) {
          // console.log("Not a task list");
          return;
        }

        this.nAnsTot += 1;
        // replace task-list with ed-choice
        const edc = document.createElement("ed-choice");

        // TODO make it uniques checking for collisions
        edc.label = `Q${i + 1}: ${ul.parentElement.innerText.slice(0, 30)}`;
        edc.innerHTML = ul.outerHTML;
        ul.parentNode.replaceChild(edc, ul);
      });

    // as a wrapper ed-pb catches events from his ed-components childrens
    article.addEventListener("edEvent", this._handleResponse.bind(this));
  }

  private _handleResponse(evt: Event) {
    evt.stopPropagation();
    this.nAns += 1;
    this.score += evt.detail.score;
    console.log(this.score);

    const progressBar: EdProgressBarElement =
      this.shadowRoot.querySelector("#bar-progress");
    progressBar.setAttribute(
      "percent",
      String(Math.round((100 * this.nAns) / this.nAnsTot)),
    );

    const resultBar: EdProgressBarElement =
      this.shadowRoot.querySelector("#bar-results");
    resultBar.setAttribute(
      "percent",
      String(Math.round(this.score / this.nAnsTot)),
    );

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
          score: this.score / this.nAnsTot,
        },
      }),
    );
  }
}
