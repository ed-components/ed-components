/** @module EdProgressBar
 *  Source: bootstrap 5
 *
 */

const template = document.createElement("template");
template.innerHTML = `
  <style>
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
      padding-right:0.5em ;
      min-width: 7ch;
    }
    #progress {
            background-color: var(--gray-6, #868e96);
            border-radius: 0.25em;
            display: flex;
            font-size: .75rem;
            width: 100%;
        }
 
    #progress-bar {
            animation: 1s linear infinite progress-bar-stripes;
            background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
            background-size: 1em 1em;
            border-radius: 0.3em;
            display: flex;
            flex-direction: column;
            font-size: .75rem;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
            transition: width .6s ease;
    }
    @keyframes progress-bar-stripes {
            0% {
                background-position-x:1rem
                }
    }
    
  </style>
  <div id="wrapper">
      <div id="label"></div>
      <div id="progress">
          <div id="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
  </div>
  `;

export class EdProgressBarElement extends HTMLElement {
  // attached in the constructor, never null
  declare readonly shadowRoot: ShadowRoot;

  static define(tagName = "ed-progress-bar") {
    customElements.define(tagName, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // between 0 and 100. Set here: a constructor must not add attributes, or
    // document.createElement() returns an HTMLUnknownElement
    if (!this.hasAttribute("percent")) {
      this.percent = "0";
    }
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#label")!.innerHTML = this.label ?? "";

    const progress =
      this.shadowRoot.querySelector<HTMLElement>("#progress-bar")!;
    progress.ariaLabel = this.label;
    progress.style.backgroundColor = this.style.backgroundColor;
  }

  static get observedAttributes() {
    return ["percent", "label"];
  }

  attributeChangedCallback(name: string) {
    switch (name) {
      case "percent":
        this.updateProgress();
        break;

      default:
        break;
    }
  }

  get percent(): string | null {
    return this.getAttribute("percent");
  }

  set percent(value: string) {
    this.setAttribute("percent", value);
  }

  get label(): string | null {
    return this.getAttribute("label");
  }

  set label(value: string) {
    this.setAttribute("label", value);
  }

  async updateProgress() {
    const { percent } = this;
    const progress =
      this.shadowRoot.querySelector<HTMLElement>("#progress-bar");
    if (progress && percent !== null) {
      progress.innerHTML = `&nbsp;${percent}&nbsp;%`;
      progress.style.width = `${percent}%`;
      progress.setAttribute("aria-valuenow", percent);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-progress-bar": EdProgressBarElement;
  }
}
