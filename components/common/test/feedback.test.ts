import { expect, fixture } from "@open-wc/testing";
import { EdFeedbackElement } from "../src/EdFeedback.js";

EdFeedbackElement.define();

describe("EdFeedbackElement", () => {
  it("hides its content until revealed", async () => {
    const el = await fixture<EdFeedbackElement>(
      `<ed-feedback ui-lang="fr"><p>Because</p></ed-feedback>`,
    );
    expect(el.type).to.equal("info");
    expect(el.shadowRoot.querySelector("slot")).to.be.null;
    expect(el.shadowRoot.textContent?.trim()).to.equal("");

    el.type = "incorrect";
    el.revealed = true;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector("slot")).to.exist;
    expect(el.shadowRoot.querySelector("strong")!.textContent).to.contain(
      "Incorrect",
    );
    expect(el.hasAttribute("revealed")).to.be.true;
  });

  it("passes the a11y audit once revealed", async () => {
    const el = await fixture<EdFeedbackElement>(
      `<ed-feedback type="correct" revealed><p>Yes</p></ed-feedback>`,
    );
    await expect(el).shadowDom.to.be.accessible();
  });
});
