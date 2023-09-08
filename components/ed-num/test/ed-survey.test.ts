import { fixture, expect } from "@open-wc/testing";
import { EdSurvey } from "../src/EdNum.js";
import "../src/ed-num.js";

describe("EdSurvey", () => {
  it('has a default question "How are you today?" and type smiley', async () => {
    const el = await fixture<EdSurvey>(`<ed-num></ed-num>`);
    expect(el.question).to.equal("How are you today?");
    expect(el.type).to.equal("smiley");
    expect(
      el.shadowRoot
        ?.querySelector("ed-smiley")
        .shadowRoot.querySelectorAll("button").length,
    ).to.equal(3);
  });

  it("innerHTML is used as question", async () => {
    const question = "Does it works?";
    const el = await fixture<EdSurvey>(`<ed-num>${question}</ed-num>`);
    expect(el.question).to.equal(question);
    expect(el.getAttribute("question")).to.equal(question);
    // el.shadowRoot!.querySelector('button')!.click();
    // expect(el.counter).to.equal(6);
  });

  it("can override the type via attribute", async () => {
    const el = await fixture<EdSurvey>(`<ed-num type="rating"></ed-num>`);
    expect(el.type).to.equal("rating");
    // expect(el.shadowRoot?.querySelectorAll('button').length).to.equal(5);
  });

  it("passes the a11y audit", async () => {
    const el = await fixture<EdSurvey>(`<ed-num></ed-num>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
