// @ts-nocheck

import { md2HTML } from "../../common/src/index.js";

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
    </style>
    <article></article>
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
    this.shadowRoot.querySelectorAll("ul").forEach((ul: HTMLUListElement) => {
      // verify if it a task-list
      if (ul.querySelector("li > input[type='checkbox']:disabled") === null) {
        // console.log("Not a task list");
        return;
      }
      // replace task-list with ed-choice
      let edc = document.createElement("ed-choice");
      edc.innerHTML = ul.outerHTML;
      ul.parentNode.replaceChild(edc, ul);

      // insert wrapper before el in the DOM tree
      // ul.parentNode.insertBefore(edChoice, ul);
      // // move el into wrapper
      // edChoice.innerHTML = ul.innerHTML;
    });

    this.shadowRoot.querySelectorAll("ol > li").forEach((li: HTMLLIElement) => {
      console.log("QUESTION", li);
    });

    // as a wrapper ed-pb catches events from his ed-components childrens
    article.addEventListener("edEvent", this._handleResponse.bind(this));
  }

  private _handleResponse(evt: Event) {
    // resend evt from ed-components childs
    this.dispatchEvent(
      new CustomEvent("edEvent", {
        bubbles: true,
        detail: evt.detail,
      }),
    );
  }
}
