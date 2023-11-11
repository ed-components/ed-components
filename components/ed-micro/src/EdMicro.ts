// adapted from bootstrap icons https://icons.getbootstrap.com/icons/chat-left-quote/
const microSvg = `<svg xmlns="http://www.w3.org/2000/svg"
  width="16" height="16" fill="var(--ed-primary)" viewBox="0 0 16 16"
  style="font-size: 1em; margin-left: 0.1875em;  padding-right: 0.1875em;  padding-left: 0.1875em; cursor: pointer">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <text x="4.1194029" y="7.8606968" id="text2">µ</text>
  </svg>`;

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
 * @extends {HTMLElement}
 */
export class EdMicroElement extends HTMLElement {
  static define(tagName = "ed-micro") {
    customElements.define(tagName, this);
  }

  static get observedAttributes() {
    return ["label", "html"];
  }

  get html() {
    return this.hasAttribute("html");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: block;
      --ed-primary: var(--blue-5, blue);
    }
    html:has(dialog[open][modal-mode="mega"]) {
  overflow: hidden;
}

dialog {
  display: grid;
  align-content: start;
  background: var(--surface-2);
  color: var(--text-1);
  max-inline-size: min(90vw, var(--size-content-3));
  margin: auto;
  padding: 0;
  position: fixed;
  inset: 0;
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-6);
  z-index: var(--layer-important);
  overflow: hidden;
  transition: opacity .5s var(--ease-3);
  
  @media (--motionOK) {
    animation: var(--animation-scale-down) forwards;
    animation-timing-function: var(--ease-squish-3);
  }

  @media (--OSdark) {
    border-block-start: var(--border-size-1) solid var(--surface-3);
  }

  @media (--md-n-below) {
    &[modal-mode="mega"] {
      margin-block-end: 0;
      border-end-end-radius: 0;
      border-end-start-radius: 0;
      
      @media (--motionOK) {
        animation: var(--animation-slide-out-down) forwards;
        animation-timing-function: var(--ease-squish-2);
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
    @media (--motionOK) {
      animation: var(--animation-slide-in-up) forwards;
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
      gap: var(--size-3);
      box-shadow: var(--shadow-2);
      z-index: var(--layer-1);
      padding-inline: var(--size-5);
      padding-block: var(--size-3);

      @media (--OSlight) {
        background: var(--surface-1);

        &::-webkit-scrollbar {
          background: var(--surface-1);
        }
      }

      @media (--OSdark) {
        border-block-start: var(--border-size-1) solid var(--surface-3);
      }
    }

    & > header {
      display: flex;
      gap: var(--size-3);
      justify-content: space-between;
      align-items: flex-start;
      padding-block: var(--size-3);
      padding-inline: var(--size-5);

      & > button {
        border-radius: var(--radius-round);
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
      gap: var(--size-3);
      justify-content: space-between;
      align-items: flex-start;
      padding-inline: var(--size-5);
      padding-block: var(--size-3);

      & > menu {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-3);
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
      background-color: var(--surface-2);

      @media (--OSdark) {
        background-color: var(--surface-1);
      }
    }
    
    svg {
      --_icon-size: var(--size-fluid-3);
      block-size: var(--_icon-size);
      filter: drop-shadow(var(--_ink-shadow));
      flex-shrink: 0;
      inline-size: var(--_icon-size);
      stroke: currentColor;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    header {background-color: var(--surface-1);}

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
    </style>
    <dialog id="MegaDialog" modal-mode="mega">
      <form method="dialog">
      <header>
        <h3 id="label">µLearning</h3>
               
        <button onclick="this.closest('dialog').close('close')" type="button" title="Close dialog"> 
            <title>Close dialog icon</title>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
      </header>
      <article id="slides"></article>
      </form>
    </dialog>
    <section id="open-label">
      Open micro-learning content
      ${microSvg}
    </section>
    `;
  }

  async connectedCallback() {
    if (this.innerHTML.length === 0) {
      return;
    }
    const slidesWrapper = this.shadowRoot.querySelector("#slides");

    if (!this.html) {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      slidesWrapper.innerHTML = md2HTML(this.innerHTML.trim());
    } else {
      slidesWrapper.innerHTML = this.innerHTML.trim();
    }

    // if no label is provided use first element
    if (this.label === null) {
      const firstChild = slidesWrapper.firstElementChild;
      this.label = firstChild.outerHTML;
      firstChild.remove();
    }
    this._updateLabel(this.label);

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
      let prevButton = document.createElement("span");
      prevButton.className = "carousel-arrow carousel-arrow--prev";
      prevButton.innerHTML = "&#8249;";
      prevButton.addEventListener("click", this._handleCarouselMove.bind(this));
      slidesWrapper.insertAdjacentElement("beforeend", prevButton);
      let nextButton = document.createElement("span");
      nextButton.className = "carousel-arrow carousel-arrow--next";
      nextButton.innerHTML = "&#8250;";
      nextButton.addEventListener("click", this._handleCarouselMove.bind(this));
      slidesWrapper.insertAdjacentElement("beforeend", nextButton);
    }
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(value) {
    this._updateLabel(value);
    this.setAttribute("label", value);
  }

  private _handleCarouselMove(evt) {
    const carousel = this.shadowRoot.querySelector("#slides");
    const slideWidth = this.shadowRoot.querySelector(".slide").clientWidth;
    carousel.scrollLeft = evt.target.classList.contains("carousel-arrow--next")
      ? carousel.scrollLeft + slideWidth
      : carousel.scrollLeft - slideWidth;
  }

  private _updateLabel(label) {
    this.shadowRoot.querySelector("#label").innerHTML = label;
    const openLabel = this.shadowRoot.querySelector("#open-label");
    openLabel.innerHTML = label;
    if (openLabel.childElementCount > 0) {
      openLabel.firstElementChild.insertAdjacentHTML("beforeend", microSvg);
    } else {
      openLabel.innerHTML += microSvg;
    }
    openLabel.querySelector("svg").addEventListener("click", () => {
      this.shadowRoot.querySelector("dialog").showModal();
      // move slider to the left on each opening
      this.shadowRoot.querySelector("#slides").scrollTo(0, 0);
    });
  }
}
