import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// This component implements a likert interaction activitie as defined in xapi spec
// ie, An interaction which asks the learner to select from a discrete set of choices on a scale
// see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-activities
export class EdSmiley extends LitElement {
  static styles = css`
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

  @property({ attribute: true }) readonly = false;

  @property({ reflect: true }) value = -1;

  render() {
    return html`
      <div @click="${this._clickHandler}" @keyup="${this._clickHandler}">
        <button alt="CONFUSED FACE" data-value="1">&#128533;</button>
        <button alt="NEUTRAL FACE" data-value="2">&#128528;</button>
        <button alt="GRINNING FACE" data-value="3">&#128512;</button>
      </div>
    `;
  }

  private _clickHandler(e: Event) {
    this.value =
      e.target === e.currentTarget
        ? -1
        : Number((e.target as HTMLDivElement).dataset.value!);
  }
}

customElements.define('ed-smiley', EdSmiley);
