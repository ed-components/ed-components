import { css, html, LitElement } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { commonSheet } from "../../common/src/styles.js";
/** @module EdProgressBar
 *  Source: bootstrap 5
 *
 */

export class EdProgressBarElement extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    // between 0 and 100
    percent: { type: Number, reflect: true },
    label: { type: String },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        display: block;
        border-radius: 0.3em;
      }
      #wrapper {
        display: flex;
        font: bold 1.1em var(--font-sans-serif, sans-serif);
        margin: 0.3em 0;
      }
      #label {
        padding-left: 0.3em;
        padding-right: 0.5em;
        /* same width for the bars of an ed-pb, set from its longest label in
        ch: exact with a monospace font, whatever the letters */
        inline-size: var(--ed-progress-label-width, auto);
        flex-shrink: 0;
        font-family: var(
          --font-mono,
          ui-monospace,
          SFMono-Regular,
          Menlo,
          Consolas,
          monospace
        );
      }
      #progress {
        background-color: var(--gray-6, #868e96);
        border-radius: 0.25em;
        display: flex;
        font-size: 0.75rem;
        width: 100%;
      }

      #progress-bar {
        animation: 1s linear infinite progress-bar-stripes;
        background-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        background-size: 1em 1em;
        border-radius: 0.3em;
        display: flex;
        flex-direction: column;
        font-size: 0.75rem;
        /* same width for all digits: the text doesn't move with the value */
        font-variant-numeric: tabular-nums;
        justify-content: center;
        text-align: center;
        white-space: nowrap;
        transition: width 0.6s ease;
      }
      @keyframes progress-bar-stripes {
        0% {
          background-position-x: 1rem;
        }
      }
    `,
  ];

  declare percent: number;

  declare label?: string;

  static define(tagName = "ed-progress-bar") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  constructor() {
    super();
    this.percent = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    // reflected now rather than at the next render. Not in the constructor:
    // it must not add attributes, or document.createElement() returns an
    // HTMLUnknownElement
    if (!this.hasAttribute("percent")) {
      this.setAttribute("percent", "0");
    }
  }

  render() {
    const { percent } = this;
    return html`
      <div id="wrapper">
        <div id="label">${this.label ?? ""}</div>
        <div id="progress">
          <div
            id="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${percent}
            aria-label=${ifDefined(this.label)}
            style=${styleMap({
              width: `${percent}%`,
              // color given on the host, e.g. by ed-pb
              backgroundColor: this.style.backgroundColor,
            })}
          >
            &nbsp;${percent}&nbsp;%
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-progress-bar": EdProgressBarElement;
  }
}
