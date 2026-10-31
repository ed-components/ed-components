import { expect, fixture, html, waitUntil } from "@open-wc/testing";
import { moveInDom } from "../../common/test/helpers.js";
import { EdMicroElement } from "../src/EdMicro.js";
import "../src/ed-micro.js";

describe("EdMicro tests", () => {
  it("Convert markdown by default", async () => {
    const el: EdMicroElement = await fixture<EdMicroElement>(
      html`<ed-micro label="test">Hello **from** here.</ed-micro>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector(".slide")!.innerHTML).equals(
      "<p>Hello <strong>from</strong> here.</p>",
    );
  });
  it("Don't convert content if html attribute is true", async () => {
    const el: EdMicroElement = await fixture<EdMicroElement>(
      html`<ed-micro label="test" isHTML><p>Hello from here.</p></ed-micro>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector(".slide")!.innerHTML).equals(
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
  it("Keeps the title out of the slides when moved in the DOM", async () => {
    const el = await fixture<EdMicroElement>(`<ed-micro>
# Title

First slide

# Second

Hello
</ed-micro>`);
    await waitUntil(() => el.shadowRoot.querySelector(".slide"));
    await moveInDom(el);
    expect(el.shadowRoot.querySelector(".slide")!.textContent).not.to.contain(
      "Title",
    );
  });
  it("Uses buttons to open and navigate", async () => {
    const el = await fixture<EdMicroElement>(`<ed-micro label="test">
# First

Hello

# Second

World
</ed-micro>`);
    await waitUntil(
      () => el.shadowRoot.querySelectorAll(".carousel-arrow").length === 2,
    );
    expect(el.shadowRoot.querySelector("#open-label button")).to.exist;
    el.shadowRoot.querySelectorAll(".carousel-arrow").forEach((arrow) => {
      expect(arrow.tagName).to.equal("BUTTON");
    });
  });
  it("Opens and closes the dialog", async () => {
    const el = await fixture<EdMicroElement>(`<ed-micro>
# Title

Hello
</ed-micro>`);
    const dialog = el.shadowRoot.querySelector("dialog")!;
    el.shadowRoot
      .querySelector<HTMLElement>("#open-label .open-button")!
      .click();
    expect(dialog.open).to.be.true;
    el.shadowRoot.querySelector<HTMLElement>("header button")!.click();
    expect(dialog.open).to.be.false;
  });
});
