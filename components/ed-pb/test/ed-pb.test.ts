import { fixture, expect, html } from "@open-wc/testing";
import { EdPbElement } from "../src/EdPb.js";
import "../src/ed-pb.js";

describe("EdPb tests", () => {
  it("passes the a11y audit", async () => {
    // TODO fix if no label provided
    const el = await fixture<EdPbElement>(`<ed-pb label="title"></ed-pb>`);
    await el.connectedCallback();
    await expect(el).shadowDom.to.be.accessible();
  });

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

  it("Handle blockquotes", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb># hello world

> This guy is incredible.
> He said that everything is ok.

</ed-pb>`);
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("article > blockquote")).to.exist;
  });

  it("Handle raw html", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb># hello world
    
<div>
<h1>Mardown allows raw html at the beginning of lines</h1>
<em>Not here</em>
</div>
    </ed-pb>`);
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("article > div")).to.exist;
  });
});
