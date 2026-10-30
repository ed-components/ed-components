import { fixture, expect, html, oneEvent, waitUntil } from "@open-wc/testing";
import { moveInDom } from "../../common/test/helpers.js";
import { EdPbElement } from "../src/EdPb.js";
import "../src/ed-pb.js";
import { EdProgressBarElement } from "../src/_EdProgressBar.js";
// ed-pb wraps questions in ed-choice components
import "../../ed-choice/src/ed-choice.js";

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
    await expect(el.shadowRoot.querySelector("article")!.innerHTML).equals(
      "<p>Hello <strong>from</strong> here.</p>",
    );
  });
  it("Don't convert content if html attribute is true", async () => {
    const el: EdPbElement = await fixture<EdPbElement>(
      html`<ed-pb label="test" isHTML><p>Hello from here.</p></ed-pb>`,
    );
    await el.connectedCallback();
    await expect(el.shadowRoot.querySelector("article")!.innerHTML).equals(
      "<p>Hello from here.</p>",
    );
  });

  it("Handle blockquotes", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb># hello world

> This guy is incredible.
> He said that everything is ok.

</ed-pb>`);
    await el.connectedCallback();
    expect(el.shadowRoot.querySelector("article > blockquote")).to.exist;
  });

  it("Handle raw html", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb># hello world
    
<div>
<h1>Mardown allows raw html at the beginning of lines</h1>
    <em>Not here</em>
</div>
    </ed-pb>`);
    await el.connectedCallback();
    expect(el.shadowRoot.querySelector("article > div")).to.exist;
  });

  it("Pass content as emd attribute", async () => {
    const el =
      await fixture<EdPbElement>(`<ed-pb emd="# hello from \`emd\` attribute

- [x] Yes
- [ ] No
"></ed-pb>)`);
    await el.connectedCallback();
    expect(el.shadowRoot.querySelector("h1")).to.exist;
    expect(el.shadowRoot.querySelector("ed-choice")).to.exist;
  });

  it("Count questions once when content is passed as emd attribute", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb emd="# Question

- [x] Yes
- [ ] No
"></ed-pb>`);
    await waitUntil(() =>
      el.shadowRoot
        .querySelector("ed-choice")
        ?.shadowRoot.querySelector("ed-input-radio.good-answer"),
    );
    const radio = el.shadowRoot
      .querySelector("ed-choice")!
      .shadowRoot.querySelector<HTMLElement>("ed-input-radio.good-answer")!;
    setTimeout(() => radio.click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail.verb).to.equal("COMPLETED");
    expect(detail.score).to.equal(100);
    expect(
      el.shadowRoot.querySelector("#bar-progress")!.getAttribute("percent"),
    ).to.equal("100");
  });

  it("Accept decimal, negative and exponent numeric answers", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb>
Q1

- :num: 3.14

Q2

- :num: -2,5

Q3

- :num: 6.02e23
</ed-pb>`);
    await waitUntil(() => el.shadowRoot.querySelectorAll("ed-num").length > 0);
    const answers = Array.from(el.shadowRoot.querySelectorAll("ed-num")).map(
      (num) => num.innerHTML,
    );
    expect(answers).to.deep.equal(["3.14", "-2,5", "6.02e23"]);
  });

  it("Progress bar can be created from javascript", async () => {
    const bar = document.createElement("ed-progress-bar");
    expect(bar).to.be.instanceOf(EdProgressBarElement);
    document.body.appendChild(bar);
    expect(bar.getAttribute("percent")).to.equal("0");
    bar.remove();
  });

  it("Progress bar renders its template once when moved in the DOM", async () => {
    const bar = await fixture<EdProgressBarElement>(
      `<ed-progress-bar label="Progress"></ed-progress-bar>`,
    );
    await moveInDom(bar);
    expect(bar.shadowRoot.querySelectorAll("#label").length).to.equal(1);
  });

  it("Passes parsed HTML to ed-ans", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb>
Question

- :100: answer
</ed-pb>`);
    await waitUntil(() => el.shadowRoot.querySelector("ed-ans"));
    expect(el.shadowRoot.querySelector("ed-ans")!.hasAttribute("html")).to.be
      .true;
  });

  it("Can be defined twice", () => {
    expect(() => {
      EdPbElement.define();
      EdProgressBarElement.define();
    }).not.to.throw();
  });
});
