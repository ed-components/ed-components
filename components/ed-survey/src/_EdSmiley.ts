const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
    }
    div {
      display: flex;
      gap: var(--font-size-fluid-2);
    }
    button {
      font-size: var(--font-size-fluid-2);
      border-radius: var(--font-size-fluid-2);
      border: none;
    }
  </style>
  <div>
    <button alt="CONFUSED FACE" data-value="1">&#128533;</button>
    <button alt="NEUTRAL FACE" data-value="2">&#128528;</button>
    <button alt="GRINNING FACE" data-value="3">&#128512;</button>
  </div>
  `;

export class EdSmiley extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot
      .querySelector('div')
      .addEventListener('click', this._clickHandler.bind(this));
    // FIX called multiple times
    // this.shadowRoot.querySelector('div').addEventListener('keyup', this._clickHandler, {
    //   once: true,
    // })
  }

  static get observedAttributes() {
    // store rating value between 1 and 3
    return ['value', 'readonly'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get value() {
    return this.getAttribute('value');
  }

  set value(value) {
    this.setAttribute('value', value);
  }

  get readonly() {
    return this.hasAttribute('readonly');
  }

  set readonly(readonly) {
    if (readonly) {
      this.setAttribute('readonly', '');
    } else {
      this.removeAttribute('readonly');
    }
  }

  private _clickHandler(evt: Event) {
    const value = (evt.target as HTMLDivElement).dataset.value;
    if (value) {
      this.value = value;
      this.readonly = true;
    }
  }
}

customElements.define('ed-smiley', EdSmiley);
