import { css, html, LitElement, type PropertyValues } from "lit";
import { t } from "../../common/src/i18n.js";
import { commonSheet } from "../../common/src/styles.js";

// adapted from bootstrap icons https://icons.getbootstrap.com/icons/chat-left-quote/
const microSvg = `<svg xmlns="http://www.w3.org/2000/svg"
  width="16" height="16" fill="var(--ed-primary)" viewBox="0 0 16 16"
  style="font-size: 1em; margin-left: 0.1875em;  padding-right: 0.1875em;  padding-left: 0.1875em; cursor: pointer">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <text x="4.1194029" y="7.8606968" id="text2">µ</text>
  </svg>`;

const openButton = (label: string) =>
  `<button type="button" class="open-button" aria-label="${label}">${microSvg}</button>`;

/**
 * This component allows to present chunks of educational content
 * in a modal carousel to allow easy navigation and remove unecesary distraction.
 *
 * Heavily inspired from https://github.com/argyleink/gui-challenges/tree/main/dialog
 * and https://css-tricks.com/css-only-carousel/
 * and https://webdesign.tutsplus.com/easy-slider-carousel-with-pure-css--cms-107626t
 *
 * @export
 * @class EdMicroElement
 * @extends {LitElement}
 */
export class EdMicroElement extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    label: { type: String },
    // HTML lowercases attribute names
    isHTML: { type: Boolean, attribute: "ishtml" },
  };

  static styles = [
    commonSheet,
    css`
    :host {
      display: block;
    }
    /* Open Props keyframes, needed by the animations in shadow DOM */
    @keyframes scale-down { to { transform: scale(.75) } }
    @keyframes slide-in-up { from { transform: translateY(100%) } }
    @keyframes slide-out-down { to { transform: translateY(100%) } }
    .open-button {
      background: none;
      border: none;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    html:has(dialog[open][modal-mode="mega"]) {
  overflow: hidden;
}

dialog {
  display: grid;
  align-content: start;
  background: var(--surface-2, #e9ecef);
  color: var(--text-1, #212529);
  max-inline-size: min(90vw, var(--size-content-3, 60ch));
  margin: auto;
  padding: 0;
  position: fixed;
  inset: 0;
  border-radius: var(--radius-3, 1rem);
  box-shadow: var(--shadow-6, 0 -1px 2px 0 hsl(220 3% 15% / 3%), 0 3px 2px -2px hsl(220 3% 15% / 4%), 0 7px 5px -2px hsl(220 3% 15% / 4%), 0 12px 10px -2px hsl(220 3% 15% / 5%), 0 22px 18px -2px hsl(220 3% 15% / 6%), 0 41px 33px -2px hsl(220 3% 15% / 7%), 0 100px 80px -2px hsl(220 3% 15% / 8%));
  z-index: var(--layer-important, 2147483647);
  overflow: hidden;
  transition: opacity .5s var(--ease-3, cubic-bezier(.25, 0, .3, 1));
  
  @media (prefers-reduced-motion: no-preference) {
    animation: var(--animation-scale-down, scale-down .5s var(--ease-3, cubic-bezier(.25, 0, .3, 1))) forwards;
    animation-timing-function: var(--ease-squish-3, cubic-bezier(.5, -.5, .1, 1.5));
  }

  @media (prefers-color-scheme: dark) {
    border-block-start: var(--border-size-1, 1px) solid var(--surface-3, #dee2e6);
  }

  @media (max-width: 767px) {
    &[modal-mode="mega"] {
      margin-block-end: 0;
      border-end-end-radius: 0;
      border-end-start-radius: 0;
      
      @media (prefers-reduced-motion: no-preference) {
        animation: var(--animation-slide-out-down, slide-out-down .5s var(--ease-3, cubic-bezier(.25, 0, .3, 1))) forwards;
        animation-timing-function: var(--ease-squish-2, cubic-bezier(.5, -.3, .1, 1.5));
      }
    }
  }

  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }

  &[modal-mode="mega"]::backdrop {
    backdrop-filter: blur(25px);
  }

  &[modal-mode="mini"]::backdrop {
    backdrop-filter: none;
  }

  &::backdrop {
    transition: backdrop-filter .5s ease;
  }

  &[loading] {
    visibility: hidden;
  }

  &[open] {
    @media (prefers-reduced-motion: no-preference) {
      animation: var(--animation-slide-in-up, slide-in-up .5s var(--ease-3, cubic-bezier(.25, 0, .3, 1))) forwards;
    }
  }

  & > form {
    display: grid;
    grid-template-rows: auto 1fr auto;
    align-items: start;
    max-block-size: 80vh;
    max-block-size: 80dvb;

    & > article {
      overflow-y: auto; 
      max-block-size: 100%; /* safari */
      overscroll-behavior-y: contain;
      display: grid;
      justify-items: flex-start;
      gap: var(--size-3, 1rem);
      box-shadow: var(--shadow-2, 0 3px 5px -2px hsl(220 3% 15% / 4%), 0 7px 14px -5px hsl(220 3% 15% / 6%));
      z-index: var(--layer-1, 1);
      padding-inline: var(--size-5, 1.5rem);
      padding-block: var(--size-3, 1rem);

      @media (prefers-color-scheme: light) {
        background: var(--surface-1, #f8f9fa);

        &::-webkit-scrollbar {
          background: var(--surface-1, #f8f9fa);
        }
      }

      @media (prefers-color-scheme: dark) {
        border-block-start: var(--border-size-1, 1px) solid var(--surface-3, #dee2e6);
      }
    }

    & > header {
      display: flex;
      gap: var(--size-3, 1rem);
      justify-content: space-between;
      align-items: flex-start;
      padding-block: var(--size-3, 1rem);
      padding-inline: var(--size-5, 1.5rem);

      & > button {
        border-radius: var(--radius-round, 1e5px);
        padding: .75ch;
        aspect-ratio: 1;
        flex-shrink: 0;
        place-items: center;
        stroke: currentColor;
        stroke-width: 3px;
      }
    }

    & > footer {
      display: flex;
      flex-wrap: wrap;
      gap: var(--size-3, 1rem);
      justify-content: space-between;
      align-items: flex-start;
      padding-inline: var(--size-5, 1.5rem);
      padding-block: var(--size-3, 1rem);

      & > menu {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-3, 1rem);
        padding-inline-start: 0;

        &:only-child {
          margin-inline-start: auto;
        }

        @media (max-width: 410px) {
          & button[type="reset"] {
            display: none;
          }
        }
      }
    }

    & > :is(header, footer) {
      background-color: var(--surface-2, #e9ecef);

      @media (prefers-color-scheme: dark) {
        background-color: var(--surface-1, #f8f9fa);
      }
    }
    
    svg {
      --_icon-size: var(--size-fluid-3, clamp(1.5rem, 3vw, 2rem));
      block-size: var(--_icon-size);
      filter: drop-shadow(var(--_ink-shadow));
      flex-shrink: 0;
      inline-size: var(--_icon-size);
      stroke: currentColor;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    header {background-color: var(--surface-1, #f8f9fa);}

    /* slider part*/
    #slides {
  display: flex;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
    
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
#slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
#slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
#slides::-webkit-scrollbar-track {
  background: transparent;
}
#slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  padding: 1.3em;
  border-radius: 10px;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slide {
  flex: 0 0 95%;
}


.carousel-arrow {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 64px;
  margin-block: auto;
  height: fit-content;
  width: 48px;
  background-color: white;
  border: none;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 100ms;
}

.carousel-arrow:hover,
.carousel-arrow:focus {
  opacity: 1;
}

.carousel-arrow--prev {
  left: 0;
}

.carousel-arrow--next {
  right: 0;
}
`,
  ];

  declare label?: string;

  declare isHTML: boolean;

  // markdown content being turned into slides
  private processing?: Promise<void>;

  static define(tagName = "ed-micro") {
    // the element may be defined by several bundles or calls
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this);
    }
  }

  constructor() {
    super();
    this.isHTML = false;
  }

  render() {
    // the label and the slides are filled from the content, not by the
    // template
    return html`
      <dialog id="MegaDialog" modal-mode="mega">
        <form method="dialog">
          <header>
            <h3 id="label">µLearning</h3>
            <button
              type="button"
              title=${t(this, "closeDialog")}
              @click=${() => this.shadowRoot.querySelector("dialog")!.close()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </header>
          <article id="slides"></article>
        </form>
      </dialog>
      <section id="open-label" @click=${this._handleOpen}></section>
    `;
  }

  protected firstUpdated() {
    // default label until the content gives one
    const openLabel = this.shadowRoot.querySelector("#open-label")!;
    openLabel.innerHTML = `${t(this, "openMicro")} ${openButton(t(this, "openMicro"))}`;
  }

  protected updated(changed: PropertyValues<this>) {
    // processed once rendered, then when the content format changes
    if (this.processing === undefined || changed.has("isHTML")) {
      this.processing = this._processContent();
    } else if (changed.has("label") && this.label !== undefined) {
      this._updateLabel(this.label);
    }
  }

  /** Also wait for the slides built from the markdown content */
  protected async getUpdateComplete(): Promise<boolean> {
    const result = await super.getUpdateComplete();
    await this.processing;
    return result;
  }

  private async _processContent() {
    if (this.innerHTML.length === 0) {
      return;
    }
    const slidesWrapper = this.shadowRoot.querySelector("#slides")!;

    if (!this.isHTML) {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      slidesWrapper.innerHTML = md2HTML(this.innerHTML.trim());
    } else {
      slidesWrapper.innerHTML = this.innerHTML.trim();
    }

    // if no label is provided use first element (not stored in the label
    // attribute: the content may be processed several times)
    let label = this.label;
    if (label === undefined) {
      const firstChild = slidesWrapper.firstElementChild;
      label = firstChild?.outerHTML ?? "";
      firstChild?.remove();
    }
    this._updateLabel(label);

    // wrap headers inside slide units
    // first add hr before headings
    slidesWrapper.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((h) => {
      h.insertAdjacentHTML("beforebegin", `<hr>`);
    });

    slidesWrapper.innerHTML = `<div class="slide">${slidesWrapper.innerHTML.replace(
      /<hr>/g,
      '</div>\n<div class="slide">',
    )}</div>`;

    // remove empty slides
    let nSlide = 0;
    slidesWrapper.querySelectorAll(".slide").forEach((slide) => {
      if (slide.childElementCount === 0) {
        slide.remove();
      } else {
        nSlide += 1;
      }
    });

    // add arrows navigation if more than one slide
    if (nSlide > 1) {
      const prevButton = document.createElement("button");
      prevButton.type = "button";
      prevButton.className = "carousel-arrow carousel-arrow--prev";
      prevButton.ariaLabel = t(this, "previousSlide");
      prevButton.innerHTML = "&#8249;";
      prevButton.addEventListener("click", this._handleCarouselMove.bind(this));
      slidesWrapper.insertAdjacentElement("beforeend", prevButton);
      const nextButton = document.createElement("button");
      nextButton.type = "button";
      nextButton.className = "carousel-arrow carousel-arrow--next";
      nextButton.ariaLabel = t(this, "nextSlide");
      nextButton.innerHTML = "&#8250;";
      nextButton.addEventListener("click", this._handleCarouselMove.bind(this));
      slidesWrapper.insertAdjacentElement("beforeend", nextButton);
    }
  }

  private _handleOpen(evt: Event) {
    if ((evt.target as Element).closest(".open-button") === null) return;
    this.shadowRoot.querySelector("dialog")!.showModal();
    // move slider to the left on each opening
    this.shadowRoot.querySelector("#slides")!.scrollTo(0, 0);
  }

  private _handleCarouselMove(evt: Event) {
    const carousel = this.shadowRoot.querySelector("#slides")!;
    const slideWidth = this.shadowRoot.querySelector(".slide")!.clientWidth;
    const arrow = evt.currentTarget as HTMLElement;
    carousel.scrollLeft = arrow.classList.contains("carousel-arrow--next")
      ? carousel.scrollLeft + slideWidth
      : carousel.scrollLeft - slideWidth;
  }

  private _updateLabel(label: string) {
    this.shadowRoot.querySelector("#label")!.innerHTML = label;
    const openLabel = this.shadowRoot.querySelector("#open-label")!;
    openLabel.innerHTML = label;
    if (openLabel.firstElementChild !== null) {
      openLabel.firstElementChild.insertAdjacentHTML(
        "beforeend",
        openButton(t(this, "openMicro")),
      );
    } else {
      openLabel.innerHTML += openButton(t(this, "openMicro"));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ed-micro": EdMicroElement;
  }
}
