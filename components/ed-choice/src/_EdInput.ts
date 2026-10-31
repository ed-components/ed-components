import { LitElement, type PropertyValues } from "lit";

/**
 * Base of ed-input-radio and ed-input-checkbox: a checkable element, based on
 * https://github.com/GoogleChromeLabs/howto-components/blob/master/elements/howto-checkbox/howto-checkbox.js
 * Subclasses give its role, styles and rendering.
 */
export abstract class EdInput extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  /** ARIA role of the element */
  static ariaRole: string;

  declare checked: boolean;

  declare disabled: boolean;

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    // listeners on the element itself, registered once
    this.addEventListener("click", this._toggleChecked);
    this.addEventListener("keydown", this._onKeyDown);
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", (this.constructor as typeof EdInput).ariaRole);
    }
  }

  protected updated(changed: PropertyValues<this>) {
    if (changed.has("checked")) {
      this.setAttribute("aria-checked", String(this.checked));
    }
    if (changed.has("disabled")) {
      this.setAttribute("aria-disabled", String(this.disabled));
      // keyboard reachable, unless disabled
      if (this.disabled) {
        this.removeAttribute("tabindex");
        this.blur();
      } else if (!this.hasAttribute("tabindex")) {
        this.setAttribute("tabindex", "0");
      }
    }
  }

  // space toggles the input, as for a native checkbox
  private _onKeyDown(evt: KeyboardEvent) {
    if (evt.key !== " " || evt.altKey) return;
    // don't scroll the page
    evt.preventDefault();
    this._toggleChecked();
  }

  /**
   * Flip the checked state. Only caused by a user action, it dispatches a
   * change event, which bubbles as for a native `<input type=checkbox>`.
   */
  private _toggleChecked() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked },
        bubbles: true,
      }),
    );
  }
}
