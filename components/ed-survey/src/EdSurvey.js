var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { eventOptions, property } from 'lit/decorators.js';
import './nudeui/nd-rating.js';
import './_EdSmiley.js';
// This component implements a likert interaction activitie as defined in xapi spec
// ie, An interaction which asks the learner to select from a discrete set of choices on a scale
// see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
export class EdSurvey extends LitElement {
    constructor() {
        super();
        this.type = 'smiley';
        this.question = this.innerText ? this.innerText : 'How are you today?';
    }
    render() {
        return html `
      <h2 aria-label="question">${this.question}</h2>
      <div
        @click="${this._handleResponse}"
        @keyup="${(evt) => {
            if (evt.code === 'Enter') {
                this._handleResponse(evt);
            }
        }}"
      >
        ${this.type === 'rating'
            ? html `<nd-rating max="5" value="3"> </nd-rating>`
            : html `<ed-smiley></ed-smiley>`}
      </div>
    `;
    }
    _handleResponse(evt) {
        const el = evt.target;
        const value = el.getAttribute('value');
        // CustomEvent
        this.dispatchEvent(new CustomEvent('edEvent', {
            bubbles: true,
            detail: {
                date: new Date().toISOString(),
                verb: 'RESPONDED',
                type: this.type,
                choice: value,
                question: this.question,
            },
        }));
        el.setAttribute('readonly', '');
    }
}
EdSurvey.styles = css `
    :host {
      display: block;
    }
    div {
      display: flex;
      justify-content: space-evenly;
    }
  `;
__decorate([
    property({ attribute: true })
], EdSurvey.prototype, "type", void 0);
__decorate([
    property({ type: String, attribute: false })
], EdSurvey.prototype, "question", void 0);
__decorate([
    eventOptions({ once: true })
], EdSurvey.prototype, "_handleResponse", null);
//# sourceMappingURL=EdSurvey.js.map