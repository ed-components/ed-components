import { fixture, expect } from "@open-wc/testing";
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
    el.shadowRoot.querySelector("input")!.value = "3";
    el.shadowRoot.querySelector("button")!.click();
    expect(responses).to.equal(1);
  });
});
