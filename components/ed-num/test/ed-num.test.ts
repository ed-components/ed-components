import { fixture, expect, oneEvent } from "@open-wc/testing";
import { EdNumElement } from "../src/EdNum.js";
import { moveInDom } from "../../common/test/helpers.js";
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
    expect(el.shadowRoot.querySelector("output")!.textContent).to.contain(
      "Score: 75%",
    );
  });
});
