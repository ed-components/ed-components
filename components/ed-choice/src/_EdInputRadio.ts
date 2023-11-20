/** @module EdInputRadio
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
  --ed-primary: var(--blue-7, #1c7ed6);
  --ed-success: var(--green-7, green);
  --ed-danger: var(--red-7, red);
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
  stroke-dasharray: 50;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.3s linear;
}

.check {
  stroke: var(--ed-primary);
  stroke-dasharray: 586.365px;
  stroke-dashoffset: 586.365px;
  transition: stroke-dashoffset 0.8s ease-in 0s;
}

.cross {
  color: var(--ed-danger);
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
      <path class="check" fill="none" d="M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89 c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837 c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079 c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826 c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371 c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262 c0.643,4.698,0.646,10.775-3.811,13.746"/>
	    <path class="box" fill="blue" d="M50,50m50,0a50,50 0 1,0 -150.0 a 50,50 0 1,0 150.0"/>
      <circle cx="50" cy="50" r="45" fill="none"/>
      <path class="cross" d="M10,90L90,10M10,10L90,90 " fill="none" stroke="currentColor" stroke-width="7px"></path>
    </svg>
    <slot name="text-label"></slot>
  </label>
  `;

export class EdInputRadio extends HTMLElement {
  static define(tagName = "ed-input-radio") {
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
    // // calculate pathlength for animation
    // let svgPath: SVGPathElement =
    //   this.shadowRoot.querySelector("svg > path.check");
    // console.log(svgPath.getTotalLength());

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
