import { html, fixture, expect, oneEvent, aTimeout } from "@open-wc/testing";
import { EdChoiceElement } from "../src/EdChoice.js";
import { moveInDom } from "../../common/test/helpers.js";

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

  it("Keeps a single check button when moved in the DOM", async () => {
    const el = await fixture<EdChoiceElement>(`<ed-choice>
Question

- [x] A
- [x] B
- [ ] C
</ed-choice>`);
    await aTimeout(0);
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
    await aTimeout(0);
    const button = el.shadowRoot.querySelector("#feedback button")!;
    // customized built-ins (is="...") don't work in Safari
    expect(Object.getPrototypeOf(button)).to.equal(HTMLButtonElement.prototype);
    expect(button.textContent).to.contain("Correction");
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
    expect(box.hasAttribute("checked")).to.be.true;
  });
});
