import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { EdSurvey } from '../src/EdSurvey.js';
import '../src/ed-survey.js';

describe('EdSurvey', () => {
  it('has a default header "How are you today?"', async () => {
    const el = await fixture<EdSurvey>(html`<ed-survey></ed-survey>`);

    expect(el.question).to.equal('How are you today?');
    expect(el.shadowRoot?.querySelectorAll('button').length).to.equal(3);
  });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<EdSurvey>(html`<ed-survey></ed-survey>`);
  //   el.shadowRoot!.querySelector('button')!.click();
  //   expect(el.counter).to.equal(6);
  // });

  it('can override the type via attribute', async () => {
    const el = await fixture<EdSurvey>(
      html`<ed-survey type="stars"></ed-survey>`
    );
    expect(el.type).to.equal('stars');
    expect(el.shadowRoot?.querySelectorAll('button').length).to.equal(5);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<EdSurvey>(html`<ed-survey></ed-survey>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
