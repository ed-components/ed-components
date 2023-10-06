import { html, fixture, expect } from "@open-wc/testing";
import { EdChoiceElement } from "../src/EdChoice.js";

import "../src/ed-choice.js";

describe("EdChoiceElement", () => {
  it("passes the a11y audit", async () => {
    const el: EdChoiceElement = await fixture<EdChoiceElement>(
      html`<ed-choice></ed-choice>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });
});
