import { html, fixture, expect } from "@open-wc/testing";
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
});
