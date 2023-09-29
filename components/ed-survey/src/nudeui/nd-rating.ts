// @ts-nocheck
// from https://github.com/LeaVerou/nudeui licence MIT
import MeterDiscrete, { internals } from "./meter-discrete.js";

export class NudeRating extends MeterDiscrete {
  static define(tagName = "nd-rating") {
    customElements.define(tagName, this);
  }

  constructor() {
    super();

    if (!this.hasAttribute("tabindex")) {
      this.tabIndex = 0;
    }
  }

  get readonly() {
    return this.hasAttribute("readonly");
  }

  set readonly(readonly) {
    if (readonly) {
      this.setAttribute("readonly", "");
    } else {
      this.removeAttribute("readonly");
    }
  }

  get value() {
    return super.value;
  }

  set value(value) {
    const oldValue = super.value;
    super.value = value;

    this[internals].setFormValue(value);
  }

  static get observedAttributes() {
    return [...super.observedAttributes, "readonly"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === "readonly" || (!name && !this.readonly)) {
      if (name === "readonly" && newValue !== null) {
        this.#endEditing();
      } else {
        this.#startEditing();
      }
    }
  }

  #startEditing() {
    this.addEventListener("mouseenter", this.edit);
    this.addEventListener("focus", this.edit);
  }

  #endEditing() {
    this.removeEventListener("mouseenter", this.edit);
    this.removeEventListener("focus", this.edit);
  }

  edit() {
    // Code adapted from Mavo: https://github.com/mavoweb/mavo/blob/master/src/elements.js#L378
    let { min = 0, max, step } = this;
    const range = max - min;

    step = step ?? (range > 1 ? 1 : range / 100);

    let { value } = this;

    const handlers = {
      mousemove: (evt) => {
        // Change property as mouse moves
        const { left, width } = this.getBoundingClientRect();
        const offset = evt.offsetX / width;
        const newValue = quantize(min + range * offset, step);

        this.value = newValue;
      },

      mouseleave: (evt) => {
        // Return to actual value
        this.value = value;

        for (const event in handlers) {
          this.removeEventListener(event, handlers[event]);
        }
      },

      click: (evt) => {
        // Register change
        value = this.value;

        this.dispatchEvent(new InputEvent("input", { bubbles: true }));
      },

      keydown: (evt) => {
        // Edit with arrow keys
        if (["ArrowLeft", "ArrowRight"].includes(evt.key)) {
          const increment =
            step *
            (evt.key === "ArrowRight" ? 1 : -1) *
            (evt.shiftKey ? 10 : 1);
          let newValue = this.value + increment;
          newValue = Math.max(min, Math.min(newValue, max));

          this.value = newValue;

          this.dispatchEvent(new InputEvent("input", { bubbles: true }));

          evt.preventDefault();
        }
      },
    };

    handlers.blur = handlers.mouseleave;

    for (const event in handlers) {
      this.addEventListener(event, handlers[event]);
    }
  }

  get labels() {
    return this[internals]?.labels;
  }

  static formAssociated = true;
}

function quantize(value, step) {
  return Math.round(value / step) * step;
}
