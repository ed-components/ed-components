import { css, html } from "lit";
import { commonSheet } from "../../common/src/styles.js";
import { EdInput } from "./_EdInput.js";
/** @module _EdInputCheckBox
 *
 * Based on https://codepen.io/Foxxite/pen/LYEdOoX for svg input,
 * the element behavior is in EdInput
 *
 */

export class EdInputCheckBox extends EdInput {
  static ariaRole = "checkbox";

  static styles = [
    commonSheet,
    css`
      :host {
        display: inline-block;
        position: relative;
        top: 0.5em;
      }

      input[type="checkbox"] {
        display: none;
        pointer-events: none;
      }

      :host([disabled]) svg {
        cursor: not-allowed;
      }
      svg {
        width: 1.7em;
        stroke: #007ce2;
        stroke-width: 7;
        filter: blur;

        &:hover {
          cursor: help;
        }
      }

      .box {
        stroke-dasharray: 320;
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 0.3s linear;
      }

      .check {
        stroke-width: 13;
        stroke-dasharray: 67;
        stroke-dashoffset: 67;
        fill: none;
        transition: stroke-dashoffset 0.3s linear;
      }

      .cross {
        color: var(--red-7, #f03e3e);
        stroke-dasharray: 226;
        stroke-dashoffset: 226;
        fill: none;
        transition: stroke-dashoffset 0.3s linear;
      }

      :host([checked]) .box {
        stroke-dashoffset: 320;
      }

      :host([checked]) .check {
        stroke-dashoffset: 0;
      }

      :host(.bad-answer[checked][disabled]) .cross {
        stroke-dashoffset: 0;
      }

      :host(.good-answer[disabled]) .check {
        stroke: var(--ed-success);
      }

      :host(.bad-answer[disabled]) .check {
        stroke: var(--ed-danger);
      }
    `,
  ];

  static define(tagName = "ed-input-checkbox") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  render() {
    return html`
      <input type="checkbox" name="cb" id="cb" disabled />
      <label for="cb" id="checkbox">
        <svg viewBox="0 0 100 100">
          <path
            class="box"
            fill="none"
            d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
          />
          <polyline
            class="check"
            stroke-linecap="round"
            points="25.5,53.5 39.5,67.5 72.5,34.5 "
          />
          <path
            class="cross"
            d="M10,90L90,10M10,10L90,90 "
            fill="none"
            stroke="currentColor"
            stroke-width="7px"
          ></path>
        </svg>
        <slot name="text-label"></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-input-checkbox": EdInputCheckBox;
  }
}
