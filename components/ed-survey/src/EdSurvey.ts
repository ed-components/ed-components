import { html, css, LitElement } from 'lit';
import { eventOptions, property } from 'lit/decorators.js';

import './nudeui/nd-rating.js';
import './_EdSmiley.js';

// This component implements a likert interaction activitie as defined in xapi spec
// ie, An interaction which asks the learner to select from a discrete set of choices on a scale
// see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
export class EdSurvey extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    div {
      display: flex;
      justify-content: space-evenly;
    }
  `;

  @property({ attribute: true }) type = 'smiley';

  @property({ type: String, attribute: false }) question;

  constructor() {
    super();
    this.question = this.innerText ? this.innerText : 'How are you today?';
  }

  render() {
    return html`
      <h2 aria-label="question">${this.question}</h2>
      <div
        @click="${this._handleResponse}"
        @keyup="${(evt: KeyboardEvent) => {
          if (evt.code === 'Enter') {
            this._handleResponse(evt);
          }
        }}"
      >
        ${this.type === 'rating'
          ? html`<nd-rating max="5" value="3"> </nd-rating>`
          : html`<ed-smiley></ed-smiley>`}
      </div>
    `;
  }

  @eventOptions({ once: true })
  private _handleResponse(evt: Event) {
    const el = evt.target as HTMLInputElement;
    const value = el.getAttribute('value');
    // CustomEvent
    this.dispatchEvent(
      new CustomEvent('edEvent', {
        bubbles: true,
        detail: {
          date: new Date().toISOString(),
          verb: 'RESPONDED',
          type: this.type,
          choice: value,
          question: this.question,
        },
      })
    );
    el.setAttribute('readonly', '');
  }
}
