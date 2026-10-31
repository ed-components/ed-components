import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { moveInDom } from "../../common/test/helpers.js";
import type { EdInputCheckBox } from "../src/_EdInputCheckBox.js";
import { EdChoiceElement } from "../src/EdChoice.js";

import "../src/ed-choice.js";

describe("EdChoiceElement", () => {
  it("Convert markdown by default", async () => {
    const el: EdChoiceElement = await fixture<EdChoiceElement>(
      html`<ed-choice>Hello **from** here.</ed-choice>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("#content")!.innerHTML).equals(
      "<p>Hello <strong>from</strong> here.</p>",
    );
  });
  it("Don't convert content if html attribute is true", async () => {
    const el: EdChoiceElement = await fixture<EdChoiceElement>(
      html`<ed-choice isHTML>Hello **from** here.</ed-choice>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("#content")!.innerHTML).equals(
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

    const radio = el.shadowRoot.querySelector<HTMLElement>(
      "ed-input-radio.good-answer",
    )!;
    setTimeout(() => radio.click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail.score).to.equal(100);
  });

  it("Keeps a single submit button when moved in the DOM", async () => {
    const el = await fixture<EdChoiceElement>(`<ed-choice>
Question

- [x] A
- [x] B
- [ ] C
</ed-choice>`);
    await waitUntil(() => el.shadowRoot.querySelector("#feedback button"));
    await moveInDom(el);
    expect(el.shadowRoot.querySelectorAll("#feedback button").length).to.equal(
      1,
    );
  });

  it("Check button is a native button with a label", async () => {
    const el = await fixture<EdChoiceElement>(`<ed-choice>
Question

- [x] A
- [x] B
</ed-choice>`);
    await waitUntil(() => el.shadowRoot.querySelector("#feedback button"));
    const button = el.shadowRoot.querySelector("#feedback button")!;
    // customized built-ins (is="...") don't work in Safari
    expect(Object.getPrototypeOf(button)).to.equal(HTMLButtonElement.prototype);
    expect(button.textContent).to.contain("Check");
  });

  it("Inputs render their template once when moved in the DOM", async () => {
    const radio = await fixture<HTMLElement>(
      `<ed-input-radio></ed-input-radio>`,
    );
    await moveInDom(radio);
    expect(radio.shadowRoot!.querySelectorAll("svg").length).to.equal(1);
  });

  it("Inputs can be checked with the keyboard", async () => {
    const box = await fixture<HTMLElement>(
      `<ed-input-checkbox></ed-input-checkbox>`,
    );
    expect(box.getAttribute("tabindex")).to.equal("0");
    box.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
    // Lit reflects the attribute when rendering
    await (box as EdInputCheckBox).updateComplete;
    expect(box.hasAttribute("checked")).to.be.true;
  });

  it("Disables the submit button until an answer is checked", async () => {
    const el = await fixture<EdChoiceElement>(`<ed-choice>
Question

- [x] A
- [x] B
- [ ] C
</ed-choice>`);
    await waitUntil(() => el.shadowRoot.querySelector("#feedback button"));
    const button =
      el.shadowRoot.querySelector<HTMLButtonElement>("#feedback button")!;
    const box = el.shadowRoot.querySelector<HTMLElement>("ed-input-checkbox")!;
    expect(button.disabled).to.be.true;
    box.click();
    expect(button.disabled).to.be.false;
    box.click();
    expect(button.disabled).to.be.true;
  });

  describe("feedbacks", () => {
    const question = `<ed-choice>
What is E?

- [ ] mass
  > No, m is the mass.
- [x] energy
  > Yes, energy.
- [ ] entropy

> E is the energy.

> A citation, not a feedback.
</ed-choice>`;
    const revealed = (el: EdChoiceElement) =>
      [...el.shadowRoot.querySelectorAll("ed-feedback")]
        .filter((feedback) => feedback.revealed)
        .map((feedback) => `${feedback.type}: ${feedback.textContent?.trim()}`);

    it("are hidden until the question is answered", async () => {
      const el = await fixture<EdChoiceElement>(question);
      expect(el.shadowRoot.querySelectorAll("ed-feedback").length).to.equal(3);
      expect(revealed(el)).to.deep.equal([]);
      // a blockquote which doesn't follow the list stays a citation
      expect(
        el.shadowRoot.querySelector("#content > blockquote")!.textContent,
      ).to.contain("A citation");
    });

    it("show the chosen answer and question feedbacks", async () => {
      const el = await fixture<EdChoiceElement>(question);
      const wrong = el.shadowRoot.querySelector<HTMLElement>(
        "ed-input-radio.bad-answer",
      )!;
      expect(wrong.getAttribute("aria-label")).to.equal("mass");
      setTimeout(() => wrong.click());
      const { detail } = await oneEvent(el, "edEvent");
      expect(JSON.parse(detail.answer)).to.deep.equal(["mass"]);
      expect(revealed(el)).to.deep.equal([
        "incorrect: No, m is the mass.",
        "info: E is the energy.",
      ]);
    });

    it("show the feedbacks of all checked answers", async () => {
      const el = await fixture<EdChoiceElement>(`<ed-choice>
Which are true?

- [x] A
  > A is true.
- [x] B
  > B is true.
- [ ] C
  > C is false.
</ed-choice>`);
      const boxes =
        el.shadowRoot.querySelectorAll<HTMLElement>("ed-input-checkbox");
      boxes[0].click();
      boxes[2].click();
      await el.updateComplete;
      el.shadowRoot.querySelector<HTMLElement>("#feedback button")!.click();
      expect(revealed(el)).to.deep.equal([
        "correct: A is true.",
        "incorrect: C is false.",
      ]);
    });
  });
});
