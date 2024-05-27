import { fixture, expect, html } from "@open-wc/testing";
import { EdMicroElement } from "../src/EdMicro.js";
import "../src/ed-micro.js";

describe("EdMicro tests", () => {
  it("Convert markdown by default", async () => {
    const el: EdMicroElement = await fixture<EdMicroElement>(
      html`<ed-micro label="test">Hello **from** here.</ed-micro>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector(".slide").innerHTML).equals(
      "<p>Hello <strong>from</strong> here.</p>",
    );
  });
  it("Don't convert content if html attribute is true", async () => {
    const el: EdMicroElement = await fixture<EdMicroElement>(
      html`<ed-micro label="test" isHTML><p>Hello from here.</p></ed-micro>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector(".slide").innerHTML).equals(
      "<p>Hello from here.</p>",
    );
  });
  it("Add arrows if more than one slide", async () => {
    const el: EdMicroElement = await fixture<EdMicroElement>(
      `<ed-micro label="test">
# title
First slide

# Second slide 2

Hello
</ed-micro>`,
    );
    await el.connectedCallback();
    await expect(
      el.shadowRoot.querySelectorAll(".carousel-arrow").length,
    ).equals(2);
  });
  it("Don't add arrows if only one slide", async () => {
    const el: EdMicroElement = await fixture<EdMicroElement>(
      `<ed-micro label="test">
# title
First slide
</ed-micro>`,
    );
    await el.connectedCallback();
    await expect(
      el.shadowRoot.querySelectorAll(".carousel-arrow").length,
    ).equals(0);
  });
  it("passes the a11y audit", async () => {
    const el = await fixture<EdMicroElement>(`<ed-micro></ed-micro>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
