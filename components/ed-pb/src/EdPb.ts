import { css, html, LitElement, type PropertyValues } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import type { FoundQuestion } from "../../common/src/emd.js";
import { t } from "../../common/src/i18n.js";
import { commonSheet } from "../../common/src/styles.js";
import { EdChoiceElement } from "../../ed-choice/src/EdChoice.js";
import { EdNumElement } from "../../ed-num/src/EdNum.js";
import { EdSpeechElement } from "../../ed-speech/src/EdSpeech.js";
import { EdProgressBarElement } from "./_EdProgressBar.js";

EdProgressBarElement.define();
// the components answering the questions, created by their tag name
EdChoiceElement.define();
EdNumElement.define();
EdSpeechElement.define();

/**
 * The question feedback, a blockquote right after the list, moved into the
 * component replacing the list, which reveals it once answered.
 */
function takeFeedback(ul: HTMLUListElement) {
  const next = ul.nextElementSibling;
  if (next?.tagName !== "BLOCKQUOTE") {
    return "";
  }
  next.remove();
  return next.outerHTML;
}

/**
 * Component answering a question, replacing its answer list; undefined when
 * the component isn't available
 */
function questionElement({ question }: FoundQuestion, ul: HTMLUListElement) {
  switch (question.type) {
    case "choice": {
      const edChoice = document.createElement("ed-choice");
      // already parsed, with the feedbacks
      edChoice.isHTML = true;
      edChoice.innerHTML = ul.outerHTML + takeFeedback(ul);
      return edChoice;
    }
    case "text": {
      // ed-ans is a work in progress, not part of the bundle: it answers text
      // questions only when the page defines it
      if (customElements.get("ed-ans") === undefined) {
        return undefined;
      }
      // ed-ans has no feedback
      const edAns = document.createElement("ed-ans");
      // content is already parsed (ed-ans names this attribute html)
      edAns.setAttribute("html", "");
      edAns.innerHTML = ul.outerHTML;
      return edAns;
    }
    case "numeric": {
      const edNum = document.createElement("ed-num");
      takeFeedback(ul);
      // the stem stays in the problem
      edNum.emdQuestion = { ...question, stem: "" };
      return edNum;
    }
    case "speech": {
      const edSpeech = document.createElement("ed-speech");
      takeFeedback(ul);
      edSpeech.emdQuestion = { ...question, stem: "" };
      return edSpeech;
    }
  }
}

/**
 * This component is a wrapper that allows to include multiple questions
 * with answers of different types in a lightweight markup langage based
 * on markdown.
 * Its questions are found by the emd parser (spec/emd.md):
 * - single and multiple choice answer via ed-choice component using gfm task-lists.
 * - text answer via ed-ans component using unordered lists with scores, when
 *   the page defines it (work in progress, not part of the bundle).
 * - numeric answers via ed-num component.
 * - speech answers via ed-speech component.
 * HTML content (`ishtml`) is shown as is, without questions.
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

    // parse markdown into html, and find its questions
    const { md2HTML, unescapeMarkdown } = this.isHTML
      ? { md2HTML: (s: string) => s, unescapeMarkdown: (s: string) => s }
      : await import("../../common/src/index.js");
    const found = this.isHTML
      ? []
      : (await import("../../common/src/emd.js")).parseQuestions(
          unescapeMarkdown(emdContent),
        );
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
    // the answer lists are the n-th lists of the html, before replacing them
    const lists = article.querySelectorAll("ul");
    found.forEach((question, i) => {
      const ul = lists[question.list];
      // raw html lists in the content would shift the lists
      if (ul === undefined) {
        return;
      }
      const element = questionElement(question, ul);
      if (element === undefined) {
        // the list holds the answers: the question is left unanswerable
        ul.remove();
        return;
      }
      // TODO make it uniques checking for collisions
      const stem = document.createElement("template");
      stem.innerHTML = md2HTML(question.question.stem);
      const text = (stem.content.textContent ?? "").trim().replace(/\s+/g, " ");
      element.label = `Q${i + 1}: ${text.slice(0, 30)}`;
      ul.replaceWith(element);
      this.nAnsTot += 1;
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
