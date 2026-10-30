import { commonSheet, stylesheet } from "../../common/src/styles.js";

const template = document.createElement("template");
template.innerHTML = `
  <div>
    <button type="button" aria-label="Confused face" data-value="1">&#128533;</button>
    <button type="button" aria-label="Neutral face" data-value="2">&#128528;</button>
    <button type="button" aria-label="Grinning face" data-value="3">&#128512;</button>
  </div>
  `;

// shared by all instances (adoptedStyleSheets)
const sheet = stylesheet(`
:host {
  display: block;
}
div {
  display: flex;
  gap: var(--font-size-fluid-2, clamp(1.5rem, 6vw, 2.5rem));
}
button {
  font-size: var(--font-size-fluid-2, clamp(1.5rem, 6vw, 2.5rem));
  border-radius: var(--font-size-fluid-2, clamp(1.5rem, 6vw, 2.5rem));
  border: none;
}
`);

export class EdSmiley extends HTMLElement {
  // attached in the constructor, never null
  declare readonly shadowRoot: ShadowRoot;

  static define(tagName = "ed-smiley") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];
    // rendered once: connectedCallback may run several times
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot
      .querySelector("div")!
      .addEventListener("click", this._clickHandler.bind(this));
  }

  // rating value between 1 and 3
  get value(): string | null {
    return this.getAttribute("value");
  }

  set value(value: string) {
    this.setAttribute("value", value);
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

  private _clickHandler(evt: Event) {
    const { value } = (evt.target as HTMLDivElement).dataset;
    if (value) {
      this.value = value;
      this.readonly = true;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-smiley": EdSmiley;
  }
}
