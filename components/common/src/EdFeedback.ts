import { css, html, LitElement, nothing } from "lit";
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
        /* inline-block: the line-through of a wrong answer doesn't
        propagate to the feedback */
        display: inline-block;
        inline-size: 100%;
        --_color: var(--ed-primary);
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

declare global {
  interface HTMLElementTagNameMap {
    "ed-feedback": EdFeedbackElement;
  }
}
