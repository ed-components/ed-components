var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
// This component implements a likert interaction activitie as defined in xapi spec
// ie, An interaction which asks the learner to select from a discrete set of choices on a scale
// see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
export class EdSmiley extends LitElement {
    constructor() {
        super(...arguments);
        this.readonly = false;
        this.value = -1;
    }
    render() {
        return html `
      <div @click="${this._clickHandler}" @keyup="${this._clickHandler}">
        <button alt="CONFUSED FACE" data-value="1">&#128533;</button>
        <button alt="NEUTRAL FACE" data-value="2">&#128528;</button>
        <button alt="GRINNING FACE" data-value="3">&#128512;</button>
      </div>
    `;
    }
    _clickHandler(e) {
        this.value =
            e.target === e.currentTarget
                ? -1
                : Number(e.target.dataset.value);
    }
}
EdSmiley.styles = css `
    :host {
      dispaly: block;
    }
    div {
      display: flex;
      gap: var(--font-size-fluid-2);
    }
    button {
      font-size: var(--font-size-fluid-2);
      border-radius: var(--font-size-fluid-2);
      border: none;
    }
  `;
__decorate([
    property({ attribute: true })
], EdSmiley.prototype, "readonly", void 0);
__decorate([
    property({ reflect: true })
], EdSmiley.prototype, "value", void 0);
customElements.define('ed-smiley', EdSmiley);
//# sourceMappingURL=_EdSmiley.js.map