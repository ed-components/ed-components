import { md2HTML } from "../../common/src/index.js";
import { EdInputCheckBox } from "./_EdInputCheckBox.js";
import { EdInputRadio } from "./_EdInputRadio.js";

EdInputCheckBox.define();

const template = document.createElement("template");

template.innerHTML = `
  <style>
  :host {
      display: block;
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

export class EdChoiceElement extends HTMLElement {
  label: string;

  static define(tagName = "ed-choice") {
    customElements.define(tagName, this);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // add event listener to check response
    this.addEventListener("click", this._handleResponse.bind(this), {
      once: true,
    });
  }

  async connectedCallback() {
    // parse markdown into html
    const contents = md2HTML(this.innerHTML);

    // work on the DocumentFragment content before mounting it
    const fragment = template.content;

    fragment.querySelector("#content").innerHTML = contents.trim();

    // prepare html
    fragment.querySelectorAll("ul > li").forEach((li: HTMLLIElement) => {
      // handle answers
      const input = li.querySelector("input");

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
    this.shadowRoot.replaceChildren(fragment.cloneNode(true));
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
    this.shadowRoot.querySelectorAll(`li`).forEach((li: HTMLLIElement) => {
      const input: HTMLInputElement = li.querySelector("ed-input");
      const good = input.className; // "good-answer / bad-answer"
      if (input.checked) {
        score += good === "good-answer" ? 1 : 0;
        answers.push(li.textContent);
      }
      // disables all inputs
      input.setAttribute("disabled", "");

      // stroke all bad answers and higlight good one
      li.setAttribute("class", good);
    });

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
