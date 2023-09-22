import { fixture, expect } from "@open-wc/testing";
import { EdNumElement } from "../src/EdNum.js";
import "../src/ed-num.js";

describe("EdNum is accessible", () => {
  it("passes the a11y audit", async () => {
    const el = await fixture<EdNumElement>(`<ed-num></ed-num>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
