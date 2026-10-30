import { html, fixture, expect, oneEvent } from "@open-wc/testing";
import { EdChoiceElement } from "../src/EdChoice.js";

import "../src/ed-choice.js";

describe("EdChoiceElement", () => {
  it("Convert markdown by default", async () => {
    const el: EdChoiceElement = await fixture<EdChoiceElement>(
      html`<ed-choice>Hello **from** here.</ed-choice>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("#content").innerHTML).equals(
      "<p>Hello <strong>from</strong> here.</p>",
    );
  });
  it("Don't convert content if html attribute is true", async () => {
    const el: EdChoiceElement = await fixture<EdChoiceElement>(
      html`<ed-choice isHTML>Hello **from** here.</ed-choice>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("#content").innerHTML).equals(
      "Hello **from** here.",
    );
  });
  it("passes the a11y audit", async () => {
    const el: EdChoiceElement = await fixture<EdChoiceElement>(
      html`<ed-choice></ed-choice>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });
  it("Single choice is only checked when an answer is selected", async () => {
    const el = await fixture<EdChoiceElement>(`<ed-choice>
Question

- [ ] A
- [x] B
</ed-choice>`);
    await el.connectedCallback();
    let responded = false;
    el.addEventListener("edEvent", () => {
      responded = true;
    });
    // clicking on the question text must not trigger correction
    (el.shadowRoot.querySelector("#content p") as HTMLElement).click();
    expect(responded).to.be.false;

    const radio: HTMLElement = el.shadowRoot.querySelector(
      "ed-input-radio.good-answer",
    );
    setTimeout(() => radio.click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail.score).to.equal(100);
  });
});
