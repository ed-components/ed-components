import { fixture, expect } from "@open-wc/testing";
import { EdAnsElement } from "../src/EdAns.js";
import "../src/ed-ans.js";

describe("EdAns is accessible", () => {
  it("passes the a11y audit", async () => {
    const el = await fixture<EdAnsElement>(`<ed-ans></ed-ans>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
