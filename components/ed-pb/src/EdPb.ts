import { css, html, LitElement, type PropertyValues } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { t } from "../../common/src/i18n.js";
import { commonSheet } from "../../common/src/styles.js";
import { EdProgressBarElement } from "./_EdProgressBar.js";

EdProgressBarElement.define();

// integers, decimals (dot or comma) and scientific notation: 42, -3.14, 6,02e23
const edNumRegex =
  /^:num:\s+(?<answer>[-+]?\d+(?:[.,]\d+)?(?:e[-+]?\d+)?)\s*$/im;

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
 * @extends {LitElement}
 */
export class EdPbElement extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    label: { type: String },
    // markdown content, instead of the element content
    emd: { type: String },
    // HTML lowercases attribute names
    isHTML: { type: Boolean, attribute: "ishtml" },
    // progress bars, as percentages
    progress: { state: true, attribute: false },
    result: { state: true, attribute: false },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        display: block;
      }
      main {
        font-family: var(--ed-font-sans);
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
    `,
  ];

  declare label?: string;

  declare emd?: string;

  declare isHTML: boolean;

  declare private progress: number;

  declare private result: number;

  // number of answers handled in the problem
  private nAnsTot = 0;

  // number of answers user responded
  private nAns = 0;

  // score on pb as percentage
  private score = 0;

  // markdown content being turned into questions
  private processing?: Promise<void>;

  static define(tagName = "ed-pb") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  constructor() {
    super();
    this.isHTML = false;
    this.progress = 0;
    this.result = 0;
  }

  render() {
    const progress = t(this, "progress");
    const success = t(this, "success");
    // the bars are aligned on the longest label, in characters
    const labelWidth = `${Math.max(progress.length, success.length)}ch`;
    return html`
      <main>
        <section
          id="progress"
          style=${styleMap({ "--ed-progress-label-width": labelWidth })}
        >
          <h1 id="label">${this.label ?? ""}</h1>
          <ed-progress-bar
            id="bar-progress"
            label=${progress}
            percent=${this.progress}
            style="background-color: var(--blue-7, #1c7ed6);"
          ></ed-progress-bar>
          <ed-progress-bar
            id="bar-results"
            label=${success}
            percent=${this.result}
            style="background-color: var(--green-7, #37b24d);"
          ></ed-progress-bar>
          <hr />
        </section>
        <!-- filled from the markdown content, not by the template -->
        <article></article>
      </main>
    `;
  }

  protected firstUpdated() {
    // as a wrapper ed-pb catches events from his ed-components childrens
    this.shadowRoot
      .querySelector("article")!
      .addEventListener("edEvent", this._handleResponse.bind(this));
  }

  protected updated(changed: PropertyValues<this>) {
    // processed once rendered, then when the content changes (moving the
    // element in the page keeps the answers)
    if (
      this.processing === undefined ||
      changed.has("emd") ||
      changed.has("isHTML")
    ) {
      this.processing = this._processEmd();
    }
  }

  /** Also wait for the questions built from the markdown content */
  protected async getUpdateComplete(): Promise<boolean> {
    const result = await super.getUpdateComplete();
    await this.processing;
    return result;
  }

  private async _processEmd() {
    // TODO use a template before mounting?
    const emdContent = this.emd ? this.emd.trim() : this.innerHTML.trim();

    // parse markdown into html
    const { md2HTML } = this.isHTML
      ? { md2HTML: (s: string) => s }
      : await import("../../common/src/index.js");
    // state changes below must not happen during the update that started
    // processing (with html content, nothing was awaited)
    await null;

    // Content may be processed several times (emd changes, attributeChangedCallback
    // and connectedCallback racing on upgrade): reset state after the await so
    // that rebuilding the article and counting answers stay atomic.
    this.nAnsTot = 0;
    this.nAns = 0;
    this.score = 0;
    this.progress = 0;
    this.result = 0;

    const article = this.shadowRoot.querySelector("article")!;
    article.innerHTML = md2HTML(emdContent);
    // turn lists into ed components
    this.shadowRoot
      .querySelectorAll("ul")
      .forEach((ul: HTMLUListElement, i: number) => {
        // type of answer depends on list item type
        const li = ul.querySelector("li");
        if (li === null) {
          return;
        }
        // TODO make it uniques checking for collisions
        const label = `Q${i + 1}: ${(ul.parentElement?.innerText ?? "").slice(
          0,
          30,
        )}`;

        // task-list is turned into ed-choice component
        if (li.querySelector("input[type='checkbox']:disabled") !== null) {
          this.nAnsTot += 1;
          // replace task-list with ed-choice
          const edChoice = document.createElement("ed-choice");
          edChoice.label = label;
          // we don't require to transform md->html
          edChoice.isHTML = true;
          edChoice.innerHTML = ul.outerHTML;
          ul.replaceWith(edChoice);
        } else if (li.innerText.startsWith(":100: ")) {
          // verify if it is an ed-ans
          this.nAnsTot += 1;
          // replace unorder-list with ed-ans
          const edAns = document.createElement("ed-ans");
          edAns.label = label;
          // content is already parsed (ed-ans names this attribute html)
          edAns.setAttribute("html", "");
          edAns.innerHTML = ul.outerHTML;
          ul.replaceWith(edAns);
        } else if (li.innerText.startsWith(":num: ")) {
          const answer = edNumRegex.exec(li.innerText)?.groups?.answer;
          if (answer) {
            // replace unorder-list with ed-num
            this.nAnsTot += 1;
            const edNum = document.createElement("ed-num");
            edNum.label = label;
            edNum.innerHTML = answer;
            ul.replaceWith(edNum);
          }
        }
      });
  }
  private _handleResponse(evt: Event) {
    evt.stopPropagation();
    this.nAns += 1;
    // TODO need to type custom edevents!
    this.score += (evt as CustomEvent<{ score: number }>).detail.score;

    this.progress = Math.round((100 * this.nAns) / this.nAnsTot);
    const score = Math.round(this.score / this.nAnsTot);
    this.result = score;

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
          label: this.label,
          verb: "COMPLETED",
          score,
        },
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-pb": EdPbElement;
  }
}
