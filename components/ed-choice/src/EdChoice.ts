import { md2HTML } from "../../common/src/index.js";
import { EdInputCheckBox } from "./_EdInputCheckBox.js";
import { EdInputRadio } from "./_EdInputRadio.js";

EdInputCheckBox.define();
EdInputRadio.define();

const template = `
  <style>
  :host {
      display: block;
      --ed-primary: var(--blue-7, blue);
      --ed-success: var(--green-7, #37b24d);
      --ed-danger: var(--red-7, #f03e3e);
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

    li {
      font-size: 1.1em;
      list-style-type: none;
    }
    
    li.bad-answer {
      text-decoration: line-through;
    }

    li.good-answer {
      text-decoration: underline solid var(--ed-success);
      font-size: 1.5em;
      transition: font-size 0.3s linear;
    }

    #feedback {
      display: flex;
      justify-content: flex-end;
    }

    button.check-answer {
      background-color: var(--ed-primary);
    }

    {* TODO share math style*}
    .math-inline {
      font-size: 1.3em;
    }
    .math-display {
      font-size: 1.5em;
    }
  </style>
  <article>
  <section id="content"></section>
  <section id="feedback"></section>
  </article>
  `;

export class EdChoiceElement extends HTMLElement {
  label: string;

  static define(tagName = "ed-choice") {
    customElements.define(tagName, this);
  }

  static get observedAttributes() {
    return ["type"];
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(type) {
    this.setAttribute("type", type);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }

  async connectedCallback() {
    // parse markdown into html
    const contents = md2HTML(this.innerHTML);

    // work on the DocumentFragment content before mounting it
    this.shadowRoot.querySelector("#content").innerHTML = contents.trim();

    // prepare html
    this.shadowRoot.querySelectorAll("ul").forEach((ul: HTMLUListElement) => {
      // We inspect li elements to see if there is only one or multiple answers
      let inputs = [];
      let nCorrect = 0;
      ul.querySelectorAll("li").forEach((li: HTMLLIElement, i: number) => {
        // handle answers
        const input = li.querySelector("input");
        const isCorrect = input.checked;

        inputs.push([input, isCorrect]);
        nCorrect += Number(isCorrect);
      });
      // Don't allow no correct answer
      if (nCorrect === 0) {
        return;
      }
      // now we go for single or multiple choice
      this.type = nCorrect === 1 ? "single" : "multiple";

      inputs.forEach(([input, isCorrect]) => {
        const edInput =
          this.type === "single"
            ? document.createElement("ed-input-radio")
            : document.createElement("ed-input-checkbox");
        // is it a good answer?
        edInput.className = isCorrect ? "good-answer" : "bad-answer";

        input.replaceWith(edInput);
      });
      // add check answer if multiple-choice
      if (this.type === "multiple") {
        // svg icon from bootstrap icons
        // https://icons.getbootstrap.com/icons/ui-checks/
        let button = document.createElement("button");
        button.className = "check-answer";
        button.innerHTML = `Check answer
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks" viewBox="0 0 16 16">
  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg>`;

        // add event listener to button check response
        button.addEventListener("click", this._handleResponse.bind(this), {
          once: true,
        });
        this.shadowRoot.querySelector("#feedback").appendChild(button);
      } else {
        // add event listener to this to check response
        this.addEventListener("click", this._handleResponse.bind(this), {
          once: true,
        });
      }
    });
  }

  /**
   * Check answer and dispatch event on user response
   *
   * @private
   * @param {Event} evt
   * @memberof EdChoiceElement
   * @fires {EdEvent} edEvent containing user answers in details field
   */
  private _handleResponse(evt: Event) {
    const el = evt.target as HTMLInputElement;
    const url = this.ownerDocument.location as Location;

    // iterate over all possible answers
    let score = 0;
    let answers = [];
    // count all choices
    let nChoice = 0;
    this.shadowRoot.querySelectorAll(`li`).forEach((li: HTMLLIElement) => {
      nChoice += 1;
      const input: EdInputCheckBox | EdInputRadio =
        this.type === "single"
          ? li.querySelector("ed-input-radio")
          : li.querySelector("ed-input-checkbox");

      const good = input.className; // "good-answer / bad-answer"
      if (input.checked) {
        score += good === "good-answer" ? 1 : 0;
        answers.push(li.textContent);
      } else {
        score += good === "bad-answer" ? 1 : 0;
      }
      // disables all inputs
      input.setAttribute("disabled", "");

      // stroke all bad answers and higlight good one
      li.setAttribute("class", good);
    });
    // convert score to percentage
    score = Math.round((100 * score) / nChoice);

    // CustomEvent
    this.dispatchEvent(
      new CustomEvent("edEvent", {
        bubbles: true,
        detail: {
          date: new Date().toISOString(),
          url: url.host + url.pathname,
          tag: this.tagName,
          label: this.label,
          verb: "RESPONDED",
          answer: JSON.stringify(answers),
          score,
        },
      }),
    );
    el.setAttribute("readonly", "");
  }
}
