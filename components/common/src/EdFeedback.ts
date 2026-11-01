import { css, html, LitElement, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { t } from "./i18n.js";
import { commonSheet } from "./styles.js";

export type FeedbackType = "correct" | "incorrect" | "info";

const labels = {
  correct: { icon: "✓", key: "feedbackCorrect" },
  incorrect: { icon: "✗", key: "feedbackIncorrect" },
  info: { icon: "ℹ", key: "feedbackInfo" },
} as const;

/**
 * Feedback on an answer or a question, shown once the learner answered: its
 * content stays hidden until `revealed`, so that it doesn't give the solution.
 *
 * @tag ed-feedback
 * @attr {"correct" | "incorrect" | "info"} type - Kind of feedback, "info" by default.
 * @attr {boolean} revealed - Shows the feedback.
 */
export class EdFeedbackElement extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    type: { type: String, reflect: true },
    revealed: { type: Boolean, reflect: true },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        /* empty block until revealed: no blank line under the answers */
        display: block;
        --_color: var(--ed-primary);
      }
      :host([revealed]) {
        /* inline-block: the line-through of a wrong answer doesn't
        propagate to the feedback */
        display: inline-block;
        inline-size: 100%;
      }
      :host([type="correct"]) {
        --_color: var(--ed-success);
      }
      :host([type="incorrect"]) {
        --_color: var(--ed-danger);
      }
      :host([revealed]) .feedback {
        margin-block: 0.3em;
        padding: 0.2em 0.8em;
        /* color on the border and icon only: the text keeps its contrast */
        border-inline-start: 0.3em solid var(--_color);
        border-radius: 0.3em;
        background-color: color-mix(in srgb, var(--_color) 10%, transparent);
      }
      .icon {
        color: var(--_color);
      }
      strong {
        margin-inline-end: 0.5ch;
      }
      /* the first paragraph follows the heading, on the same line */
      ::slotted(p:first-child) {
        display: inline;
      }
      ::slotted(:first-child) {
        margin-block-start: 0.2em;
      }
      ::slotted(:last-child) {
        margin-block-end: 0.2em;
      }
    `,
  ];

  declare type: FeedbackType;

  declare revealed: boolean;

  static define(tagName = "ed-feedback") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  constructor() {
    super();
    this.type = "info";
    this.revealed = false;
  }

  render() {
    const label = labels[this.type] ?? labels.info;
    // the status region exists before the feedback is revealed, so that
    // screen readers announce it
    return html`<div class="feedback" role="status">
      ${
        this.revealed
          ? html`<strong
              ><span class="icon" aria-hidden="true">${label.icon}</span>
              ${t(this, label.key)}</strong
            >
            <slot></slot>`
          : nothing
      }
    </div>`;
  }
}

/**
 * Split a blockquote at the end of `html`, the feedback of a question: returns
 * the html without it and the content of the blockquote.
 */
export function splitFeedback(html: string): {
  content: string;
  feedback?: string;
} {
  const template = document.createElement("template");
  template.innerHTML = html;
  const last = template.content.lastElementChild;
  if (last?.tagName !== "BLOCKQUOTE") {
    return { content: html };
  }
  last.remove();
  return { content: template.innerHTML.trim(), feedback: last.innerHTML };
}

/**
 * Feedbacks of a scored question, revealed once answered: the score with the
 * correct answer (when there is one), then the explanation (when there is one).
 * The elements render them in their shadow root, after defining ed-feedback.
 */
export function answerFeedbacks(
  el: Element,
  {
    answered,
    score,
    answer,
    explanation,
  }: {
    answered: boolean;
    score?: number;
    answer?: string;
    explanation?: string;
  },
) {
  return html`${
    answer === undefined
      ? nothing
      : html`<ed-feedback
          id="score-feedback"
          type=${score === 100 ? "correct" : "incorrect"}
          ?revealed=${answered}
          ><p>
            ${answered && score !== undefined ? t(el, "score", score, answer) : ""}
          </p></ed-feedback
        >`
  }${
    explanation
      ? html`<ed-feedback id="explanation" ?revealed=${answered}
          >${unsafeHTML(explanation)}</ed-feedback
        >`
      : nothing
  }`;
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-feedback": EdFeedbackElement;
  }
}
