import { fixture, expect } from "@open-wc/testing";
import { EdPbElement } from "../src/EdPb.js";
import "../src/ed-pb.js";

describe("EdPb tests", () => {
  it("passes the a11y audit", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb></ed-pb>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
