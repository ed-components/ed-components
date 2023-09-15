import { html, fixture, expect } from "@open-wc/testing";
import { EdQuiz } from "../src/EdSc.js";

import "../src/ed-sc.js";

const example = html`<ed-sc>
  ## Test quiz 1. True/false? - [x] True - [ ] False 2. One two 3? - [ ] one - [
  ] two - [x] three
</ed-sc>`;

describe("EdQuiz", () => {
  it('has a default title "Quiz"', async () => {
    const el: EdQuiz = await fixture<EdQuiz>(html`<ed-sc></ed-sc>`);
    expect(el.title).to.equal("Quiz");
  });

  it("Can customize title attribute", async () => {
    const el: EdQuiz = await fixture<EdQuiz>(html`<ed-sc title="QCU"></ed-sc>`);
    expect(el.title).to.equal("QCU");
  });

  it("passes the a11y audit", async () => {
    const el: EdQuiz = await fixture<EdQuiz>(html`<ed-sc></ed-sc>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
