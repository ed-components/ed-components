import { css, html, LitElement, type PropertyValues } from "lit";
import { t } from "../../common/src/i18n.js";
import { commonSheet } from "../../common/src/styles.js";
import { submitButtonHTML } from "../../common/src/submitButton.js";
import { EdInputCheckBox } from "./_EdInputCheckBox.js";
import { EdInputRadio } from "./_EdInputRadio.js";

EdInputCheckBox.define();
EdInputRadio.define();

export class EdChoiceElement extends LitElement {
  // attached by LitElement, never null
  declare readonly shadowRoot: ShadowRoot;

  static properties = {
    // "single" or "multiple", from the number of good answers
    type: { type: String, reflect: true },
    // HTML lowercases attribute names
    isHTML: { type: Boolean, attribute: "ishtml" },
  };

  static styles = [
    commonSheet,
    css`
      :host {
        display: block;
      }

      article {
        font-family: var(--ed-font-sans);
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
        button {
          font-size: 1.1em;
        }
      }
    `,
  ];

  declare type?: string;

  declare isHTML: boolean;

  label?: string;

  // markdown content being turned into choices
  private processing?: Promise<void>;

  static define(tagName = "ed-choice") {
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
    // filled from the markdown content, not by the template
    return html`
      <article>
        <section id="content"></section>
        <section id="feedback"></section>
      </article>
    `;
  }

  protected updated(changed: PropertyValues<this>) {
    // processed once rendered, then when the content format changes (moving
    // the element in the page keeps the answers)
    if (this.processing === undefined || changed.has("isHTML")) {
      this.processing = this._processContent();
    }
  }

  /** Also wait for the choices built from the markdown content */
  protected async getUpdateComplete(): Promise<boolean> {
    const result = await super.getUpdateComplete();
    await this.processing;
    return result;
  }

  private async _processContent() {
    // parse markdown into html
    const contents = this.isHTML
      ? this.innerHTML
      : (await import("../../common/src/index.js"))
          .md2HTML(this.innerHTML)
          .trim();

    // state changes below must not happen during the update that started
    // processing (with html content, nothing was awaited)
    await null;

    // rebuild after the await: the content may be processed several times
    this.shadowRoot.querySelector("#content")!.innerHTML = contents;
    const feedback = this.shadowRoot.querySelector("#feedback")!;
    feedback.innerHTML = "";

    // prepare html
    this.shadowRoot.querySelectorAll("ul").forEach((ul: HTMLUListElement) => {
      // We inspect li elements to see if there is only one or multiple answers
      const inputs: [HTMLInputElement, boolean][] = [];
      let nCorrect = 0;
      ul.querySelectorAll("li").forEach((li) => {
        // handle answers, items without checkbox are not answers
        const input = li.querySelector("input");
        if (input === null) {
          return;
        }
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
        // accessible name from the answer text
        edInput.setAttribute(
          "aria-label",
          input.parentElement?.textContent?.trim() ?? "",
        );

        input.replaceWith(edInput);
      });
      // add check answer if multiple-choice
      if (this.type === "multiple") {
        feedback.insertAdjacentHTML(
          "beforeend",
          submitButtonHTML(t(this, "submit")),
        );
        const button = feedback.lastElementChild as HTMLButtonElement;
        // add event listener to button check response
        button.addEventListener("click", this._handleResponse.bind(this), {
          once: true,
        });
        // enabled once an answer is checked
        button.disabled = true;
        ul.addEventListener("change", () => {
          // checked property: Lit reflects the attribute after rendering
          button.disabled = ![...ul.querySelectorAll("ed-input-checkbox")].some(
            (box) => box.checked,
          );
        });
      } else {
        // check response once a radio is selected, clicks elsewhere are ignored
        ul.addEventListener("change", this._handleResponse.bind(this), {
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
    // count all possible good answers
    let nChoice = 0;
    // count selected good answers
    let score = 0;
    const answers: string[] = [];
    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      const input =
        this.type === "single"
          ? li.querySelector("ed-input-radio")
          : li.querySelector("ed-input-checkbox");
      if (input === null) {
        return;
      }

      const good = input.className; // "good-answer / bad-answer"

      nChoice += good === "good-answer" ? 1 : 0;

      if (input.checked) {
        // add one point if correct and remove 0.5 if not
        score += good === "good-answer" ? 1 : -0.5;
        answers.push(li.textContent ?? "");
      }

      // disables all inputs
      input.setAttribute("disabled", "");

      // stroke all bad answers and higlight good one
      li.setAttribute("class", good);
    });
    // convert score to percentage and zeroes negative scores
    score = Math.max(0, Math.round((100 * score) / nChoice));

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

declare global {
  interface HTMLElementTagNameMap {
    "ed-choice": EdChoiceElement;
  }
}
