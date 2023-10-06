/** @module WCInputSvg
 *
 * Based on https://codepen.io/Foxxite/pen/LYEdOoX for svg input
 * and https://github.com/GoogleChromeLabs/howto-components/blob/master/elements/howto-checkbox/howto-checkbox.js
 * for the webcomponent part
 *
 */

const template = document.createElement("template");
template.innerHTML = `
  <style>
:host {
  display: inline-block;
  position: relative;
  top: 0.5em;
  --ed-success: var(--green-7, #37b24d);
  --ed-danger: var(--red-7, #f03e3e);
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

:host(.bad-answer[checked]) .cross {
  stroke-dashoffset: 0;
}

:host(.good-answer) .check {
  stroke: var(--ed-success); 
}

:host(.bad-answer) .check {
  stroke: var(--ed-danger); 
}

  </style>
  <input type="checkbox" name="cb" id="cb" disabled />
  <label for="cb" id="checkbox">
    <svg viewBox="0 0 100 100">
	    <path class="box" fill="none" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
      <polyline class="check" stroke-linecap="round" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
      <path class="cross" d="M10,90L90,10M10,10L90,90 " fill="none" stroke="currentColor" stroke-width="7px"></path>
    </svg>
    <slot name="text-label"></slot>
  </label>
  `;

export class EdInputCheckBox extends HTMLElement {
  static define(tagName = "ed-input") {
    customElements.define(tagName, this);
  }

  constructor() {
    super();
    // attach shadow if it do not exists
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
  }

  static get observedAttributes() {
    return ["checked", "disabled"];
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // calculate pathlength for animation
    // console.log(this.shadowRoot.querySelector(".check").getTotalLength());

    if (!this.hasAttribute("role")) this.setAttribute("role", "checkbox");

    this._upgradeProperty("checked");
    this._upgradeProperty("disabled");
    this.addEventListener("click", this._toggleChecked);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._toggleChecked);
  }

  _upgradeProperty(prop) {
    if (this.hasAttribute(prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  // Handle boolean attributes
  // https://developers.google.com/web/fundamentals/web-components/examples/howto-checkbox
  /**
   * Properties and their corresponding attributes should mirror one another.
   * The property setter for `checked` handles truthy/falsy values and
   * reflects those to the state of the attribute. See the [avoid
   * reentrancy](/web/fundamentals/architecture/building-components/best-practices#avoid-reentrancy)
   * section for more details.
   */
  set checked(value) {
    const isChecked = Boolean(value);
    if (isChecked) this.setAttribute("checked", "");
    else this.removeAttribute("checked");
  }

  get checked() {
    return this.hasAttribute("checked");
  }

  set disabled(value) {
    const isDisabled = Boolean(value);
    if (isDisabled) {
      this.setAttribute("disabled", "");
    } else this.removeAttribute("disabled");
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  /**
   * `attributeChangedCallback()` is called when any of the attributes in the
   * `observedAttributes` array are changed. It's a good place to handle
   * side effects, like setting ARIA attributes.
   */
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const hasValue = newValue !== null;
    switch (name) {
      case "checked":
        this.setAttribute("aria-checked", String(hasValue));
        break;
      case "disabled":
        this.setAttribute("aria-disabled", String(hasValue));
        break;
      default:
        if (oldValue !== newValue) {
          this[name] = newValue;
        }
        break;
    }
  }

  /**
   * `_toggleChecked()` calls the `checked` setter and flips its state.
   * Because `_toggleChecked()` is only caused by a user action, it will
   * also dispatch a change event. This event bubbles in order to mimic
   * the native behavior of `<input type=checkbox>`.
   */
  _toggleChecked() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
          disabled: "",
        },
        bubbles: true,
      }),
    );
  }
}
