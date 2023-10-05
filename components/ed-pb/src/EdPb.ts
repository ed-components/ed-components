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
    // turn task-lists into questions
    this.shadowRoot.querySelectorAll("ul").forEach((ul: HTMLElement) => {
      ul.querySelectorAll("& >li").forEach((li) => {
        console.log(li);
      });
      let edc = document.createElement("ed-sc");
      edc.innerHTML = ul.outerHTML;
      ul.insertAdjacentElement("afterend", edc);
      const edSc = `<ed-sc>${ul.outerHTML}</ed-sc>`;
      ul.insertAdjacentHTML("beforebegin", edSc);

      // insert wrapper before el in the DOM tree
      // ul.parentNode.insertBefore(edSc, ul);
      // // move el into wrapper
      // edSc.innerHTML = ul.innerHTML;
    });

    this.shadowRoot.querySelectorAll("ol > li").forEach((li: HTMLElement) => {
      // console.log(li);
    });

    // as a wrapper ed-pb catches events from his ed-components childrens
    article.addEventListener("edEvent", this._handleResponse.bind(this));
  }

  private _handleResponse(evt: Event) {
    console.log(evt);
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
          // value: input.value,
        },
      }),
    );
  }
}
