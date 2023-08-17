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
            background-color: rgb(192, 192, 192);
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
            color: #fff;
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

export class EdProgressBar extends HTMLElement {
  constructor() {
    super();
    // between 0 and 100
    this.percent = String(0);
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#label").innerHTML = this.label;

    const progress: HTMLElement =
      this.shadowRoot.querySelector("#progress-bar");
    progress.ariaLabel = this.label;
    progress.style.backgroundColor = this.style.backgroundColor;
  }

  static get observedAttributes() {
    return ["percent", "label"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
    switch (name) {
      case "percent":
        this.updateProgress();
        break;

      default:
        break;
    }
  }

  get percent() {
    return this.getAttribute("percent");
  }

  set percent(value) {
    this.setAttribute("percent", value);
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  async updateProgress() {
    const percent = this.percent;
    const progress: HTMLElement =
      this.shadowRoot.querySelector("#progress-bar");
    progress.innerHTML = `&nbsp;${percent}&nbsp;%`;
    progress.style.width = `${percent}%`;
    progress.setAttribute("aria-valuenow", percent);
  }
}

customElements.define("ed-progress-bar", EdProgressBar);
