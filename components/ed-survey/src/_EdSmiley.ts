import { css, html, LitElement } from "lit";
import { t } from "../../common/src/i18n.js";
import { commonSheet } from "../../common/src/styles.js";

export class EdSmiley extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    // rating value between 1 and 3
    value: { type: String, reflect: true },
    readonly: { type: Boolean, reflect: true },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        display: block;
      }
      div {
        display: flex;
        gap: var(--font-size-fluid-2, clamp(1.5rem, 6vw, 2.5rem));
      }
      button {
        font-size: var(--font-size-fluid-2, clamp(1.5rem, 6vw, 2.5rem));
        border-radius: var(--font-size-fluid-2, clamp(1.5rem, 6vw, 2.5rem));
        border: none;
      }
    `,
  ];

  declare value?: string;

  declare readonly: boolean;

  static define(tagName = "ed-smiley") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  constructor() {
    super();
    this.readonly = false;
  }

  render() {
    return html`
      <div @click=${this._clickHandler}>
        <button
          type="button"
          aria-label=${t(this, "confusedFace")}
          data-value="1"
        >
          &#128533;
        </button>
        <button
          type="button"
          aria-label=${t(this, "neutralFace")}
          data-value="2"
        >
          &#128528;
        </button>
        <button
          type="button"
          aria-label=${t(this, "grinningFace")}
          data-value="3"
        >
          &#128512;
        </button>
      </div>
    `;
  }

  private _clickHandler(evt: Event) {
    const { value } = (evt.target as HTMLElement).dataset;
    if (value) {
      this.value = value;
      this.readonly = true;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-smiley": EdSmiley;
  }
}
