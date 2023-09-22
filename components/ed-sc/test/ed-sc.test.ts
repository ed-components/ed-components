import { html, fixture, expect } from "@open-wc/testing";
import { EdScElement } from "../src/EdSc.js";

import "../src/ed-sc.js";

const example = html`<ed-sc>
  ## Test quiz 1. True/false? - [x] True - [ ] False 2. One two 3? - [ ] one - [
  ] two - [x] three
</ed-sc>`;

describe("EdScElement", () => {
  it("passes the a11y audit", async () => {
    const el: EdScElement = await fixture<EdScElement>(html`<ed-sc></ed-sc>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
