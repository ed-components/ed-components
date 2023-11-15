import { fixture, expect, html } from "@open-wc/testing";
import { EdPbElement } from "../src/EdPb.js";
import "../src/ed-pb.js";

describe("EdPb tests", () => {
  it("Convert markdown by default", async () => {
    const el: EdPbElement = await fixture<EdPbElement>(
      html`<ed-pb label="test">Hello **from** here.</ed-pb>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("article").innerHTML).equals(
      "<p>Hello <strong>from</strong> here.</p>",
    );
  });
  it("Don't convert content if html attribute is true", async () => {
    const el: EdPbElement = await fixture<EdPbElement>(
      html`<ed-pb label="test" html><p>Hello from here.</p></ed-pb>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("article").innerHTML).equals(
      "<p>Hello from here.</p>",
    );
  });
  it("passes the a11y audit", async () => {
    // TODO fix if no label provided
    const el = await fixture<EdPbElement>(`<ed-pb label="title"></ed-pb>`);
    await el.connectedCallback();
    await expect(el).shadowDom.to.be.accessible();
  });
});
