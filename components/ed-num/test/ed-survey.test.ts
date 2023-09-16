import { fixture, expect } from "@open-wc/testing";
import { EdNum } from "../src/EdNum.js";
import "../src/ed-num.js";

describe("EdNum", () => {
  it("passes the a11y audit", async () => {
    const el = await fixture<EdNum>(`<ed-num></ed-num>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
