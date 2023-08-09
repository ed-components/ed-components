// @ts-nocheck

import md2Html from "./lib/build.js";
import "./ed-progress-bar.js";

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

    h1 {
      font-size: calc(1.425rem + 2.1vw);
      font-weight: 300;
      line-height: 1.1;
    }
    
    h2 {
      font-size: calc(1.375rem + 1.5vw);
      font-weight: 300;
      line-height: 1.1;
    }

    input {
      /* remove the checkbox from flow */
      position: absolute;
  
      /* hide it visually */
      opacity: 0.00001;
  
      /* tweak size and position if needed */
      width: 1.9em;
      height: 1.9em;

      z-index: 10;

    }
    

    input:disabled {
      cursor: not-allowed;
    }
    
    li.answer {
      font-size: 1.1em;
      left: -2em;
      line-height: 1.6;
      list-style-type: none;
      position: relative;
    }
    
    svg {
      display: inline;
      width: 1.3em;
      height: 1.3em;
      color: black;
      position: relative;
      top: 0.3em;
      position: middle;
    }
    .box {
      stroke-dasharray: 320;
      stroke-dashoffset: 0;
      /*fill: white;*/
      transition: stroke-dashoffset 0.3s linear;
    }
    input:checked + svg .box {
      stroke-dashoffset: 320;
    }
    .check {
      color: var(--green-7, #37b24d);
      stroke-dasharray: 95;
      stroke-dashoffset: 95;
      fill: none;
      transition: stroke-dashoffset 0.3s linear;
    }
    .check {
      stroke-dasharray: 95;
      stroke-dashoffset: 95;
      fill: none;
      transition: stroke-dashoffset 0.3s linear;
    }
    li.good-answer input:checked + svg .check {
      color: var(--green-7, g#37b24d);
      stroke-dashoffset: 0;
    }
    li.bad-answer input:checked + svg .check  {
      color: var(--red-7, #f03e3e);
      stroke-dashoffset: 0;
    }
    .cross {
      color: var(--red-7, #f03e3e);
      fill: none;
      transition: stroke-dashoffset 0.3s linear;
    }
    li.bad-answer input:checked + svg .cross{
      stroke-dashoffset: 0;
    }
    li.bad-answer {
      text-decoration-line: line-through;
    }
    #note {
      scroll-margin: 195px;
    }
    .math-inline {
      font-size: 1.3em;
    }
    .math-display {
      font-size: 1.5em;
    }
  </style>
  <article id="quiz">
    <section id="progress">
      <h1 id="title"></h1>
      <ed-progress-bar id="bar-progress" label="Avancée" percent="0" style="display: block;background-color: var(--blue-7, #1c7ed6);"></ed-progress-bar>
      <ed-progress-bar id="bar-results" label="Réussite" percent="0" style="display: block;background-color: var(--green-7, #37b24d);"></ed-progress-bar>
      <hr>
    </section>
    <section id="content">
    </section>
    <section id="results">
    <a href="#results"><hr></a>
    <h2>Résultat&nbsp;<span id="note"></span></h2>
    </section>
  </article>
  `;

export class EdQuiz extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.goodAnswers = [];
    this.answers = [];
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  async connectedCallback() {
    this.style.display = "block";

    // Prepare content
    let contents = EdQuiz.dedentText(this.textContent);
    contents = await md2Html(contents);

    // work on the DocumentFragment content before mounting it
    const fragment = template.content;

    fragment.querySelector("#content").innerHTML = contents.trim();
    fragment.querySelector("#title").innerHTML = this.title
      ? this.title
      : "Quiz";

    // prepare html
    // retrieve goodAnswers
    let nQue = 0;
    fragment.querySelectorAll("ol > li").forEach((q) => {
      let nAns = 0;
      nQue++;
      q.className = "question";
      q.id = `quest-${nQue}`;
      q.dataset.nque = nQue;
      q.querySelectorAll("ul > li").forEach((a) => {
        nAns++;
        a.className = "answer";
        a.dataset.nque = nQue;
        a.dataset.nans = nAns;

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
                "md-quizz error there's must be only one valid answer per question"
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
          "M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
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
        check.setAttributeNS(null, "stroke-width", 13);
        // console.log(check.getTotalLength())
        // check.setAttributeNS(null, 'stroke-dashoffset', 0)
        svgInput.appendChild(check);
        // <path class="cross" d="M10,90L90,10M10,10L90,90 " fill="none" stroke="currentColor" stroke-width="7px"></path>
        const cross = document.createElementNS(xmlns, "path");
        cross.setAttributeNS(null, "class", "cross");
        cross.setAttributeNS(null, "d", "M10,90L90,10M10,10L90,90");
        cross.setAttributeNS(null, "fill", "currentColor");
        cross.setAttributeNS(null, "stroke", "currentColor");
        cross.setAttributeNS(null, "stroke-width", 13);
        const crossPathLength = cross.getTotalLength();
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
    this.shadowRoot.querySelectorAll("li.answer").forEach((ans) => {
      const nQue = ans.dataset.nque;
      const nAns = ans.dataset.nans;
      ans.querySelectorAll("input").forEach((input) => {
        input.dataset.nque = nQue;
        input.dataset.nans = nAns;
        // get a reference of the function
        // see https://stackoverflow.com/a/22870717
        input.addEventListener("click", this.checkAnswer);
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
      const goodAnswer = this.goodAnswers[nQue - 1];
      if (i === goodAnswer - 1) {
        // la bonne réponse a été cochée
        // li.querySelector("svg").setAttribute("class", "good-answer")
        li.setAttribute("class", "answer good-answer");
        // la bonne réponse n'a pas été cochée
        if (i !== nAns - 1) {
          const cross = li.querySelector(".cross");
          cross.setAttribute("stroke-dashoffset", 0);
          el.parentNode.setAttribute("class", "answer bad-answer");
        }
      }
    });
    // is it finished?
    if (this.answers.indexOf(-1) < 0) {
      const note = this.shadowRoot.querySelector("#note");
      // retrieve results from progress bar
      const result = Math.round(
        this.shadowRoot.querySelector("#bar-results").percent / 5
      );
      note.innerHTML = `${result}/20`;
      // Recadre la fenêtre sur le résultat
      note.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }

  updateBars() {
    let score = 0;
    let answered = 0;
    const nAnswers = this.answers.length;
    for (let i = 0; i < nAnswers; i++) {
      const ans = this.answers[i];
      score += ans === this.goodAnswers[i];
      answered += ans !== -1 ? 1 : 0;
    }
    this.shadowRoot.querySelector("#bar-progress").percent = Math.round(
      (100 * answered) / nAnswers
    );
    this.shadowRoot.querySelector("#bar-results").percent = Math.round(
      (100 * score) / nAnswers
    );
  }

  /**
   * De-dents the code by getting the padding from the first line,
   * then removes the same indent amount padding from the rest of the lines
   *
   * @param {string} text - the text to dedent
   * @returns {string} the dedented text
   */
  static dedentText(text) {
    const lines = text.split("\n");

    // remove the first line if it is an empty line
    if (lines[0] === "") lines.splice(0, 1);

    const initline = lines[0];
    let fwdPad = 0;
    const usingTabs = initline[0] === "\t";
    const checkChar = usingTabs ? "\t" : " ";

    while (true) {
      if (initline[fwdPad] === checkChar) {
        fwdPad += 1;
      } else {
        break;
      }
    }

    const fixedLines = [];

    for (const line of lines) {
      let fixedLine = line;
      for (let i = 0; i < fwdPad; i++) {
        if (fixedLine[0] === checkChar) {
          fixedLine = fixedLine.substring(1);
        } else {
          break;
        }
      }
      fixedLines.push(fixedLine);
    }

    if (fixedLines[fixedLines.length - 1] === "") {
      fixedLines.splice(fixedLines.length - 1, 1);
    }

    return fixedLines.join("\n");
  }
}

customElements.define("ed-quiz", EdQuiz);
