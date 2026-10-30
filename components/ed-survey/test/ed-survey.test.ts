import { fixture, expect } from "@open-wc/testing";
import { EdSurveyElement } from "../src/EdSurvey.js";
import { moveInDom } from "../../common/test/helpers.js";
import "../src/ed-survey.js";

describe("EdSurveyElement", () => {
  it('has a default question "How are you today?" and type smiley', async () => {
    const el = await fixture<EdSurveyElement>(`<ed-survey></ed-survey>`);
    await el.connectedCallback();
    expect(el.question).to.equal("How are you today?");
    expect(el.type).to.equal("smiley");
    expect(
      el.shadowRoot
        .querySelector("ed-smiley")!
        .shadowRoot.querySelectorAll("button").length,
    ).to.equal(3);
  });

  it("innerHTML is used as question", async () => {
    const question = "Does it works?";
    const el = await fixture<EdSurveyElement>(
      `<ed-survey>${question}</ed-survey>`,
    );
    expect(el.question).to.equal(question);
    expect(el.getAttribute("question")).to.equal(question);
    // el.shadowRoot!.querySelector('button')!.click();
    // expect(el.counter).to.equal(6);
  });

  it("can override the type via attribute", async () => {
    const el = await fixture<EdSurveyElement>(
      `<ed-survey type="rating"></ed-survey>`,
    );
    expect(el.type).to.equal("rating");
    // expect(el.shadowRoot?.querySelectorAll('button').length).to.equal(5);
  });

  it("passes the a11y audit", async () => {
    const el = await fixture<EdSurveyElement>(`<ed-survey></ed-survey>`);
    await expect(el).shadowDom.to.be.accessible();
  });

  it("Sends a single response when moved in the DOM", async () => {
    const el = await fixture<EdSurveyElement>(`<ed-survey></ed-survey>`);
    await moveInDom(el);
    let responses = 0;
    el.addEventListener("edEvent", () => {
      responses += 1;
    });
    el.shadowRoot
      .querySelector("ed-smiley")!
      .shadowRoot.querySelector("button")!
      .click();
    expect(responses).to.equal(1);
  });

  it("Smiley renders its buttons once when moved in the DOM", async () => {
    const smiley = await fixture<HTMLElement>(`<ed-smiley></ed-smiley>`);
    await moveInDom(smiley);
    expect(smiley.shadowRoot!.querySelectorAll("button").length).to.equal(3);
  });
});
