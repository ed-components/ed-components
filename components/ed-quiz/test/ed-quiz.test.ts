import { html, fixture, expect } from "@open-wc/testing";
import { EdQuiz } from "../src/EdQuiz.js";

import "../src/ed-quiz.js";

const example = html`<ed-quiz>
  ## Test quiz 1. True/false? - [x] True - [ ] False 2. One two 3? - [ ] one - [
  ] two - [x] three
</ed-quiz>`;

describe("EdQuiz", () => {
  it('has a default title "Quiz"', async () => {
    const el: EdQuiz = await fixture<EdQuiz>(html`<ed-quiz></ed-quiz>`);
    expect(el.title).to.equal("Quiz");
  });

  it('Can customize title attribute', async () => {
    const el: EdQuiz = await fixture<EdQuiz>(html`<ed-quiz title="QCU"></ed-quiz>`);
    expect(el.title).to.equal("QCU");
  });

  it("passes the a11y audit", async () => {
    const el: EdQuiz = await fixture<EdQuiz>(html`<ed-quiz></ed-quiz>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
