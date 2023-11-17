import { fixture, expect } from "@open-wc/testing";
import { EdAnsElement } from "../src/EdAns.js";
import "../src/ed-ans.js";

// TODO fix import errors due to json loads of wink-nlp

describe("EdAns Element", () => {
  it("passes the a11y audit", async () => {
    const el = await fixture<EdAnsElement>(`<ed-ans>

- :100: Good
- :0: Bad

</ed-ans>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
