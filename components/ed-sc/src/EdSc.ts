import md2Html from "@ed-components/common";
import { EdInputSvg } from "./_ed-input-svg";

EdInputSvg.define();

const template = document.createElement("template");

template.innerHTML = `
  <style>
  :host {
      display: block;
    }

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
        #note {
      scroll-margin: 195px;
    }
    li.bad-answer {
      text-decoration-line: line-through;
    }
    
    {* TODO share math style*}
    .math-inline {
      font-size: 1.3em;
    }
    .math-display {
      font-size: 1.5em;
    }
  </style>
  <article id="quiz">
  <section id="content"></section>
  </article>
  `;

export class EdScElement extends HTMLElement {
  question: string;

  static define(tagName = "ed-sc") {
    customElements.define(tagName, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.checkAnswer = this.checkAnswer.bind(this);
    this.question = "";
  }

  async connectedCallback() {
    // parse markdown into html
    const contents = md2Html(this.innerHTML);

    // work on the DocumentFragment content before mounting it
    const fragment = template.content;

    fragment.querySelector("#content").innerHTML = contents.trim();

    // prepare html
    let nAns = 0;
    fragment.querySelectorAll("ul > li").forEach((a: HTMLLIElement) => {
      nAns += 1;
      a.className = "answer";
      a.dataset.nans = String(nAns);

      // handle answers
      const input = a.querySelector("input");

      const edInput = document.createElement("ed-input");
      // is it a good answer?
      if (input.checked) {
        edInput.className = "good-answer";
      } else {
        edInput.className = "bad-answer";
      }
      input.replaceWith(edInput);
    });

    // mount template
    this.shadowRoot.appendChild(fragment.cloneNode(true));

    // add event listener to check response
    this.shadowRoot
      .querySelectorAll("li.answer")
      .forEach((ans: HTMLLIElement) => {
        const nAns = ans.dataset.nans;
        ans.querySelectorAll("input").forEach((input: HTMLElement) => {
          input.dataset.nans = nAns;
          // get a reference of the function
          // see https://stackoverflow.com/a/22870717
          input.addEventListener("click", this.checkAnswer);
          input.addEventListener("click", this._handleResponse.bind(this));
        });
      });
  }

  checkAnswer(evt) {
    const el = evt.target;
    const nAns = Number(el.dataset.nans);

    // Update checks
    // disables all inputs
    this.shadowRoot.querySelectorAll(`li`).forEach((li, i) => {
      const input = li.querySelector("ed-input");

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
          // question: this.question,
          verb: "RESPONDED",
          answer: nAns,
        },
      }),
    );
    el.setAttribute("readonly", "");
  }
}
