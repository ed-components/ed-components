/* eslint no-undef: 0 */
/** @module WCInputSvg
 *
 * Based on https://codepen.io/Foxxite/pen/LYEdOoX for svg input
 * and https://github.com/GoogleChromeLabs/howto-components/blob/master/elements/howto-checkbox/howto-checkbox.js
 * for the webcomponent part
 *
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }

    input[type="checkbox"] {
      display: none;
      pointer-events: none;
    }
    
    label {
      cursor: pointer;
      pointer-events: none;
      display: grid;
      grid-template-columns: auto 3fr;
      line-height: 1.5em;
    }
    
    svg {
      width: 1.7em;
      stroke: #007ce2;
      stroke-width: 7;
      fill: white;
    }
    
    .box {
      stroke-dasharray: 320;
      stroke-dashoffset: 0;
      fill: white;
      transition: stroke-dashoffset 0.3s linear;
    }
    
    .check {
      stroke-dasharray: 70;
      stroke-dashoffset: 70;
      fill: none;
      transition: stroke-dashoffset 0.3s linear;
    }
    
    ::slotted(*) {
      line-height: 1.7em;
      padding-left: 0.5em;
    }
    
    :host {
      margin:0.15em;
    }
    :host([disabled]) {
      cursor: not-allowed;
    }
    :host([checked]) .box {
      stroke-dashoffset: 320;
    }
    
    :host([checked]) .check {
      stroke-dashoffset: 0;
    }
  </style>
  <input type="checkbox" name="cb" id="cb" disabled />
  <label for="cb" id="checkbox">
    <svg viewBox="0 0 100 100">
	    <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
      <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
    </svg>
    <slot name="text-label"></slot>
  </label>
  `

export class WCInputSvg extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes () {
    return ['checked', 'disabled']
  }

  connectedCallback () {
    this.style.display = 'block'
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    if (!this.hasAttribute('role')) this.setAttribute('role', 'checkbox')

    this._upgradeProperty('checked')
    this._upgradeProperty('disabled')
    this.addEventListener('click', this._onClick)
  }

  _upgradeProperty (prop) {
    if (this.hasAttribute(prop)) {
      const value = this[prop]
      delete this[prop]
      this[prop] = value
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
  set checked (value) {
    const isChecked = Boolean(value)
    if (isChecked) this.setAttribute('checked', '')
    else this.removeAttribute('checked')
  }

  get checked () {
    return this.hasAttribute('checked')
  }

  set disabled (value) {
    const isDisabled = Boolean(value)
    if (isDisabled) {
      this.setAttribute('disabled', '')
    } else this.removeAttribute('disabled')
  }

  get disabled () {
    return this.hasAttribute('disabled')
  }

  /**
   * `attributeChangedCallback()` is called when any of the attributes in the
   * `observedAttributes` array are changed. It's a good place to handle
   * side effects, like setting ARIA attributes.
   */
  attributeChangedCallback (name, oldValue, newValue) {
    const hasValue = newValue !== null
    switch (name) {
      case 'checked':
        this.setAttribute('aria-checked', hasValue)
        break
      case 'disabled':
        this.setAttribute('aria-disabled', hasValue)
        break
    }
  }

  _onClick (event) {
    this._toggleChecked()
  }

  /**
   * `_toggleChecked()` calls the `checked` setter and flips its state.
   * Because `_toggleChecked()` is only caused by a user action, it will
   * also dispatch a change event. This event bubbles in order to mimic
   * the native behavior of `<input type=checkbox>`.
   */
  _toggleChecked () {
    if (this.disabled) return
    this.checked = !this.checked
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          checked: this.checked,
          disabled: ''
        },
        bubbles: true
      })
    )
  }
}

customElements.define('wc-input-svg', WCInputSvg)
