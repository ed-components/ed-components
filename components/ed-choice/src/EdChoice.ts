import { EdInputCheckBox } from "./_EdInputCheckBox.js";
import { EdInputRadio } from "./_EdInputRadio.js";

EdInputCheckBox.define();
EdInputRadio.define();

const template = `
  <style>
  :host {
      display: block;
      --ed-primary: var(--blue-7, #1c7ed6);
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
      --_accent: color-mix(in srgb, var(--ed-primary) 75%, white);
      background-color: var(--ed-primary);
      border-radius: 0.3em;
      border: 2px solid var(--_accent);
      box-shadow: 
        2px;,
        0 1px 3px,
        0 0 0 3px var(--_accent)
      ;
      text-shadow: var(--_accent);
       display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 0.2ch;
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
    return ["type", "html"];
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(type) {
    this.setAttribute("type", type);
  }

  get html() {
    return this.hasAttribute("html");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }

  async connectedCallback() {
    if (!this.html) {
      // parse markdown into html
      const { md2HTML } = await import("../../common/src/index.js");
      const contents = md2HTML(this.innerHTML);
      // work on the DocumentFragment content before mounting it
      this.shadowRoot.querySelector("#content").innerHTML = contents.trim();
    } else {
      this.shadowRoot.querySelector("#content").innerHTML = this.innerHTML;
    }

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
        // https://icons.getbootstrap.com/icons/card-checklist/
        let button = document.createElement("button");
        button.className = "check-answer";
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg>&nbsp;Correction`;

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
