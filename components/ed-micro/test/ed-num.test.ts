import { fixture, expect } from "@open-wc/testing";
import { EdMicroElement } from "../src/EdMicro.js";
import "../src/ed-micro.js";

describe("EdMicro is accessible", () => {
  it("passes the a11y audit", async () => {
    const el = await fixture<EdMicroElement>(`<ed-micro></ed-micro>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
