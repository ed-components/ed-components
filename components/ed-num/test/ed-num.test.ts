import { expect, fixture, oneEvent } from "@open-wc/testing";
import { moveInDom } from "../../common/test/helpers.js";
import { EdNumElement } from "../src/EdNum.js";
import "../src/ed-num.js";

describe("EdNum tests", () => {
  it("Store innerHTML as answer", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>3.14</ed-num>`);
    await expect(el._answer).to.be.equal(3.14);
  });
  it("passes the a11y audit", async () => {
    const el = await fixture<EdNumElement>(`<ed-num></ed-num>`);
    await expect(el).shadowDom.to.be.accessible();
  });
  it("Accept comma as decimal separator", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>3,14</ed-num>`);
    await expect(el._answer).to.be.equal(3.14);
  });
  it("Pass min=0 to input and allow decimals by default", async () => {
    const el = await fixture<EdNumElement>(`<ed-num min="0">1.5</ed-num>`);
    const input = el.shadowRoot.querySelector("input")!;
    expect(input.getAttribute("min")).to.equal("0");
    expect(input.getAttribute("step")).to.equal("any");
  });
  it("Sends a single response when moved in the DOM", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>3</ed-num>`);
    await moveInDom(el);
    let responses = 0;
    el.addEventListener("edEvent", () => {
      responses += 1;
    });
    const input = el.shadowRoot.querySelector("input")!;
    input.value = "3";
    input.dispatchEvent(new Event("input"));
    // Lit renders asynchronously
    await el.updateComplete;
    el.shadowRoot.querySelector("button")!.click();
    expect(responses).to.equal(1);
  });
  it("Disables the submit button until a number is entered", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>3</ed-num>`);
    const input = el.shadowRoot.querySelector("input")!;
    const button = el.shadowRoot.querySelector("button")!;
    expect(button.disabled).to.be.true;
    input.value = "3";
    input.dispatchEvent(new Event("input"));
    await el.updateComplete;
    expect(button.disabled).to.be.false;
    input.value = "";
    input.dispatchEvent(new Event("input"));
    await el.updateComplete;
    expect(button.disabled).to.be.true;
  });
  it("Scores the answer and disables the input", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>4</ed-num>`);
    const input = el.shadowRoot.querySelector("input")!;
    input.value = "3";
    input.dispatchEvent(new Event("input"));
    await el.updateComplete;
    setTimeout(() => el.shadowRoot.querySelector("button")!.click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail.score).to.equal(75);
    await el.updateComplete;
    expect(input.disabled).to.be.true;
    const feedback = el.shadowRoot.querySelector("#score-feedback")!;
    expect(feedback.getAttribute("type")).to.equal("incorrect");
    expect(feedback.hasAttribute("revealed")).to.be.true;
    expect(feedback.textContent).to.contain("Score: 75%");
  });

  it("Speaks the interface language", async () => {
    const el = await fixture<EdNumElement>(
      `<ed-num ui-lang="fr">3,14</ed-num>`,
    );
    const input = el.shadowRoot.querySelector("input")!;
    expect(input.placeholder).to.equal("Saisissez un nombre");
    expect(el.shadowRoot.querySelector("button")!.textContent).to.contain(
      "Correction",
    );
    input.value = "3";
    input.dispatchEvent(new Event("input"));
    await el.updateComplete;
    el.shadowRoot.querySelector("button")!.click();
    await el.updateComplete;
    expect(
      el.shadowRoot.querySelector("#score-feedback")!.textContent,
    ).to.contain("la bonne réponse était\u00a0: 3,14");
  });
});

describe("EdNum feedbacks", () => {
  /** Answer `value` and wait for the feedbacks */
  async function answer(el: EdNumElement, value: string) {
    const input = el.shadowRoot.querySelector("input")!;
    input.value = value;
    input.dispatchEvent(new Event("input"));
    await el.updateComplete;
    el.shadowRoot.querySelector("button")!.click();
    await el.updateComplete;
  }
  const revealed = (el: EdNumElement) =>
    [...el.shadowRoot.querySelectorAll("ed-feedback")]
      .filter((feedback) => feedback.revealed)
      .map((feedback) => `${feedback.type}: ${feedback.textContent?.trim()}`);

  it("Reveals the score and the explanation once answered", async () => {
    const el = await fixture<EdNumElement>(
      `<ed-num>3.14\n\n&gt; π is about 3.14.</ed-num>`,
    );
    expect(el._answer).to.equal(3.14);
    expect(revealed(el)).to.deep.equal([]);
    await answer(el, "3.14");
    expect(revealed(el)).to.deep.equal([
      "correct: Score: 100% the correct answer was: 3.14",
      "info: π is about 3.14.",
    ]);
  });

  it("Parses a markdown explanation", async () => {
    const el = await fixture<EdNumElement>(
      `<ed-num>-2,5

> The **opposite** of 2.5.</ed-num>`,
    );
    expect(el._answer).to.equal(-2.5);
    const explanation = el.shadowRoot.querySelector("#explanation")!;
    expect(explanation.innerHTML).to.contain("<strong>opposite</strong>");
    await answer(el, "2.5");
    expect(revealed(el)).to.deep.equal([
      "incorrect: Score: 0% the correct answer was: -2.5",
      "info: The opposite of 2.5.",
    ]);
  });

  it("Has no explanation without blockquote", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>3</ed-num>`);
    expect(el.shadowRoot.querySelector("#explanation")).to.be.null;
  });

  it("passes the a11y audit once answered", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>3\n\n> Three.</ed-num>`);
    await answer(el, "2");
    await expect(el).shadowDom.to.be.accessible();
  });
});

describe("EdNum emd syntax", () => {
  it("Reads a question written as in a problem", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>
Value of **π**?

- :num: 3,14

> About 3.14.
</ed-num>`);
    expect(el._answer).to.equal(3.14);
    expect(el.shadowRoot.querySelector(".stem")!.innerHTML).to.contain(
      "<strong>π</strong>",
    );
    expect(el.shadowRoot.querySelector("#explanation")!.textContent).to.contain(
      "About 3.14.",
    );
  });

  it("Has no stem with the expected number alone", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>-24</ed-num>`);
    expect(el._answer).to.equal(-24);
    expect(el.shadowRoot.querySelector(".stem")).to.be.null;
  });

  it("Renders a question given by a wrapper", async () => {
    const el = await fixture<EdNumElement>(`<ed-num>1</ed-num>`);
    el.emdQuestion = {
      type: "numeric",
      stem: "",
      answer: 7,
      feedback: "Seven *wonders*.",
    };
    await el.updateComplete;
    expect(el._answer).to.equal(7);
    expect(el.shadowRoot.querySelector("#explanation")!.innerHTML).to.contain(
      "<em>wonders</em>",
    );
  });
});
