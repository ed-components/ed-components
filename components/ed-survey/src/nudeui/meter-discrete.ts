// @ts-nocheck
// from https://github.com/LeaVerou/nudeui licence MIT

export const internals = Symbol('internals');

export default class MeterDiscrete extends HTMLElement {
  #internals;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
		<style>
			:host {
				display: flex;
				vertical-align: -.25em;
				height: var(--font-size-fluid-2);
				user-select: none;
			}

			#value,
			#inactive {
				background: var(--icon-image) 0 / auto 100%;
			}

			#value {
				width: calc(var(--value) / var(--max) * 100%);
			}

			#inactive {
				opacity: .5;
				filter: saturate(50%) contrast(.5);
				flex: 1;
				background-position-x: right;
			}

		</style>
		<div id=value part=value></div><div id=inactive part="inactive"></div>`;

    this[internals] = this.attachInternals?.() ?? {};
    this[internals].role = 'meter';
    this[internals].ariaValueMin = this.min;
  }

  get icon() {
    return this.getAttribute('icon') ?? '⭐️';
  }

  // So it can be handled like a <meter>
  get min() {
    return 0;
  }

  get max() {
    return +this.getAttribute('max') || 5;
  }

  set max(max) {
    if (max) {
      this.setAttribute('max', max);
    }
  }

  get value() {
    let value = this.getAttribute('value');

    if (value === null) {
      return null;
    }

    value = +value;

    const {step} = this;

    if (step !== null) {
      // Quantize by step
      value = quantize(value, step);
    }

    return value;
  }

  set value(value) {
    this.setAttribute('value', value);
  }

  get step() {
    return this.hasAttribute('step') ? +this.getAttribute('step') : null;
  }

  get #iconURL() {
    const isURL = this.icon.includes('.');

    return isURL ? this.icon : emojiToImage(this.icon);
  }

  static get observedAttributes() {
    return ['value', 'max', 'icon'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!name || name === 'max') {
      const {max} = this;
      this.style.setProperty('aspect-ratio', `${max} / 1`);
      this.style.setProperty('--max', max);
      this[internals].ariaValueMax = max;
    }

    if (!name || name === 'value') {
      const {value} = this;
      this.style.setProperty('--value', value);
      this[internals].ariaValueNow = value;
    }

    if (!name || name === 'icon') {
      this.style.setProperty('--icon-image', `url('${this.#iconURL}')`);
    }
  }

  connectedCallback() {
    this.attributeChangedCallback();
  }
}

function emojiToImage(emoji) {
  // For debug: <rect stroke="black" fill="none" stroke-width="2" width="100%" height="100%" />
  return (
    `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">` +
    `<text style="font-size: 95px" x="50%" y="0.61em" dominant-baseline="middle" text-anchor="middle">${emoji}</text></svg>`
  );
}

function quantize(value, step) {
  return Math.round(value / step) * step;
}

customElements.define('meter-discrete', MeterDiscrete);
