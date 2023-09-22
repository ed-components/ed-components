import md2Html from "@ed-components/common";

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
  <section id="title"></section>
    <section id="content">
    </section>
  </article>
  `;

export class EdScElement extends HTMLElement {
  static define() {
    customElements.define("ed-sc", this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  async connectedCallback() {
    this.style.display = "block";

    this.title = this.title ? this.title : "Quiz";

    // parse markdown into html
    const contents = md2Html(this.innerHTML);

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
          input.removeAttribute("checked");
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

    // Update checks
    // disables all inputs
    this.shadowRoot.querySelectorAll(`#quest-${nQue} li`).forEach((li, i) => {
      const input = li.querySelector("input");

      input.setAttribute("disabled", "");
      // remove event listener
      input.removeEventListener("click", this.checkAnswer);

      // marque la bonne réponse
      // TODO allways first is good for this iteration of dev
      const goodAnswer = 0;
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
  }

  /**
   * Dispatch event on user response
   *
   * @private
   * @param {Event} evt
   * @memberof EdScElement
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
