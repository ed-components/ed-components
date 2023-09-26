// @ts-nocheck

import { md2HTML } from "@ed-components/common";

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
    // TODO use a template before mounting?
    console.log(this.innerHTML.trim());
    this.shadowRoot.querySelector("article").innerHTML = md2HTML(
      this.innerHTML.trim(),
    );

    // prepare html
    this.shadowRoot.querySelectorAll("ol > li").forEach((li: HTMLElement) => {
      console.log(li);
    });
  }

  private _handleResponse(evt: Event) {
    // TODO just listen to edEvent's of the childrens
  }
}
