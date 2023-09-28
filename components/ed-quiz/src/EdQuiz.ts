// @ts-nocheck

import { md2HTML } from "../../common/src/index.js";
import "./_ed-progress-bar.js";
import { EdProgressBar } from "./_EdProgressBar.js";

const xmlns = "http://www.w3.org/2000/svg";
const template = document.createElement("template");

template.innerHTML = `
  <style>
    article {
      font-family: var(--font-sans, system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif);
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-style: solid;
      border-color: rgb(192, 192, 192);
      border-radius: 2em;
      padding: 0em 1em;
    }
    
    #progress {
      position: sticky;
      backdrop-filter: blur(23px);
      top: 0;
      z-index: 10;
    }

    #note {
      scroll-margin: 195px;
    }
  </style>
  <article id="quiz">
    <section id="progress">
      <h1 id="title"></h1>
      <ed-progress-bar id="bar-progress" label="Avancée" percent="0" style="background-color: var(--blue-7, #1c7ed6);"></ed-progress-bar>
      <ed-progress-bar id="bar-results" label="Réussite" percent="0" style="background-color: var(--green-7, #37b24d);"></ed-progress-bar>
      <hr>
    </section>
    <section id="content">
    </section>
    <section id="results">
    <a href="#results" aria-label="Results"><hr></a>
    <h2>Résultat&nbsp;<span id="note"></span></h2>
    </section>
  </article>
  `;

export class EdQuizElement extends HTMLElement {
  goodAnswers: Array<number>;

  answers: Array<number>;

  static define(tagName = "ed-quiz") {
    customElements.define(tagName, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.goodAnswers = [];
    this.answers = [];
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  async connectedCallback() {
    this.style.display = "block";

    this.title = this.title ? this.title : "Quiz";

    // parse markdown into html
    const contents = md2HTML(this.innerHTML);

    // work on the DocumentFragment content before mounting it
    const fragment = template.content;

    fragment.querySelector("#content").innerHTML = contents.trim();
    fragment.querySelector("#title").innerHTML = this.title;

    // prepare html
    // retrieve goodAnswers
    let nQue = 0;
    fragment.querySelectorAll("ol > li").forEach((q: HTMLElement) => {
      let nAns = 0;
      nQue += 1;
      q.className = "question";
      q.id = `quest-${nQue}`;
      q.dataset.nque = String(nQue);
      q.querySelectorAll("ul > li").forEach((a: HTMLLIElement) => {
        nAns += 1;
        a.className = "answer";
        a.dataset.nque = String(nQue);
        a.dataset.nans = String(nAns);

        // handle answers
        const input = a.querySelector("input");
        input.removeAttribute("disabled");
        // is it a good answer?
        if (input.checked) {
          this.goodAnswers.push(nAns);
          input.removeAttribute("checked");
          try {
            if (this.goodAnswers.length !== nQue) {
              throw new Error(
                "md-quiz error there's must be only one valid answer per question",
              );
            }
          } catch (error) {
            console.error(error);
            // TODO render checked answers without interaction with message on screen
          }
        }
        // append svg after input
        const svgInput = document.createElementNS(xmlns, "svg");

        svgInput.setAttributeNS(null, "viewBox", "0 0 100 100");
        svgInput.setAttributeNS(null, "stroke-linecap", "round");

        // <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
        const box = document.createElementNS(xmlns, "path");
        box.setAttributeNS(null, "class", "box");
        box.setAttributeNS(
          null,
          "d",
          "M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z",
        );
        box.setAttributeNS(null, "fill", "none");
        box.setAttributeNS(null, "stroke", "currentColor");
        box.setAttributeNS(null, "stroke-width", "9px");
        svgInput.appendChild(box);
        // <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
        const check = document.createElementNS(xmlns, "polyline");
        check.setAttributeNS(null, "class", "check");
        check.setAttributeNS(null, "points", "20,53.5 40,75 80,25");
        check.setAttributeNS(null, "fill", "currentColor");
        check.setAttributeNS(null, "stroke", "currentColor");
        check.setAttributeNS(null, "stroke-width", "13");
        // console.log(check.getTotalLength())
        // check.setAttributeNS(null, 'stroke-dashoffset', 0)
        svgInput.appendChild(check);
        // <path class="cross" d="M10,90L90,10M10,10L90,90 " fill="none" stroke="currentColor" stroke-width="7px"></path>
        const cross = document.createElementNS(xmlns, "path");
        cross.setAttributeNS(null, "class", "cross");
        cross.setAttributeNS(null, "d", "M10,90L90,10M10,10L90,90");
        cross.setAttributeNS(null, "fill", "currentColor");
        cross.setAttributeNS(null, "stroke", "currentColor");
        cross.setAttributeNS(null, "stroke-width", "13");
        const crossPathLength = String(cross.getTotalLength());
        cross.setAttributeNS(null, "stroke-dasharray", crossPathLength);
        cross.setAttributeNS(null, "stroke-dashoffset", crossPathLength);
        svgInput.appendChild(cross);
        input.insertAdjacentElement("afterend", svgInput);
      });
    });

    // mount template
    this.shadowRoot.appendChild(fragment.cloneNode(true));

    // create answers array
    this.answers = this.goodAnswers.map(() => -1);

    // add event listener to check response
    this.shadowRoot
      .querySelectorAll("li.answer")
      .forEach((ans: HTMLLIElement) => {
        const nQue = ans.dataset.nque;
        const nAns = ans.dataset.nans;
        ans.querySelectorAll("input").forEach((input: HTMLElement) => {
          input.dataset.nque = nQue;
          input.dataset.nans = nAns;
          // get a reference of the function
          // see https://stackoverflow.com/a/22870717
          input.addEventListener("click", this.checkAnswer);
          input.addEventListener("click", this._handleResponse.bind(this));
        });
      });
  }

  static get observedAttributes() {
    return ["title"];
  }

  get title() {
    return this.getAttribute("title");
  }

  set title(value) {
    this.setAttribute("title", value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  checkAnswer(evt) {
    const el = evt.target;
    const nQue = Number(el.dataset.nque);
    const nAns = Number(el.dataset.nans);
    this.answers[nQue - 1] = nAns;

    // Update progress bars
    this.updateBars();
    // Update checks
    // disables all inputs
    this.shadowRoot.querySelectorAll(`#quest-${nQue} li`).forEach((li, i) => {
      const input = li.querySelector("input");

      input.setAttribute("disabled", "");
      // remove event listener
      input.removeEventListener("click", this.checkAnswer);

      // marque la bonne réponse
      const goodAnswer = Number(this.goodAnswers[nQue - 1]);
      if (i === goodAnswer - 1) {
        // la bonne réponse a été cochée
        // li.querySelector("svg").setAttribute("class", "good-answer")
        li.setAttribute("class", "answer good-answer");
        // la bonne réponse n'a pas été cochée
        if (i !== nAns - 1) {
          const cross = li.querySelector(".cross");
          cross.setAttribute("stroke-dashoffset", "0");
          el.parentNode.setAttribute("class", "answer bad-answer");
        }
      }
    });
    // is it finished?
    if (this.answers.indexOf(-1) < 0) {
      const note = this.shadowRoot.querySelector("#note");
      // retrieve results from progress bar
      const resultBar: EdProgressBar =
        this.shadowRoot.querySelector("#bar-results");
      const result = Math.round(Number(resultBar.percent) / 5);
      note.innerHTML = `${result}/20`;
      // Recadre la fenêtre sur le résultat
      note.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }

  /**
   * Update progress and score bars
   *
   * @private
   * @memberof EdQuizElement
   */
  private updateBars() {
    let score = 0;
    let answered = 0;
    this.answers.forEach((ans, i) => {
      score += ans === this.goodAnswers[i] ? 1 : 0;
      answered += ans !== -1 ? 1 : 0;
    });
    const nAnswers = this.answers.length;

    const progressBar: HTMLElement =
      this.shadowRoot.querySelector("#bar-progress");
    progressBar.setAttribute(
      "percent",
      String(Math.round((100 * answered) / nAnswers)),
    );

    const resultBar: HTMLElement =
      this.shadowRoot.querySelector("#bar-results");
    resultBar.setAttribute(
      "percent",
      String(Math.round((100 * score) / nAnswers)),
    );
  }

  /**
   * Dispatch event on user response
   *
   * @private
   * @param {Event} evt
   * @memberof EdQuizElement
   * @fires {EdEvent} edEvent containing user answers in details field
   */
  private _handleResponse(evt: Event) {
    const el = evt.target as HTMLInputElement;
    const nQue = Number(el.dataset.nque);
    const nAns = Number(el.dataset.nans);
    const url = this.ownerDocument.location as Location;
    // CustomEvent
    this.dispatchEvent(
      new CustomEvent("edEvent", {
        bubbles: true,
        detail: {
          date: new Date().toISOString(),
          url: url.host + url.pathname,
          tag: this.tagName,
          title: this.title,
          verb: "RESPONDED",
          question: nQue,
          answer: nAns,
        },
      }),
    );
    el.setAttribute("readonly", "");
  }
}
