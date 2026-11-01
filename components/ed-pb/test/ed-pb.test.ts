import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import type { EdFeedbackElement } from "../../common/src/EdFeedback.js";
import { registerMessages } from "../../common/src/i18n.js";
import { moveInDom } from "../../common/test/helpers.js";
import { EdPbElement } from "../src/EdPb.js";
import "../src/ed-pb.js";
import { EdProgressBarElement } from "../src/_EdProgressBar.js";

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
    await el.updateComplete;
    const nums = Array.from(el.shadowRoot.querySelectorAll("ed-num"));
    await Promise.all(nums.map((num) => num.updateComplete));
    expect(nums.map((num) => num._answer)).to.deep.equal([3.14, -2.5, 6.02e23]);
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

  it("Skips text questions without ed-ans, hiding their answers", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb>
1. Question

   - :100: secret answer

1. Other question

   - [x] Yes
   - [ ] No
</ed-pb>`);
    await el.updateComplete;
    const article = el.shadowRoot.querySelector("article")!;
    expect(article.textContent).not.to.contain("secret answer");
    expect(article.querySelector("ed-ans")).to.be.null;
    // the problem is completed by its other questions
    await waitUntil(() =>
      article
        .querySelector("ed-choice")
        ?.shadowRoot.querySelector("ed-input-radio.good-answer"),
    );
    const radio = article
      .querySelector("ed-choice")!
      .shadowRoot.querySelector<HTMLElement>("ed-input-radio.good-answer")!;
    setTimeout(() => radio.click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail.verb).to.equal("COMPLETED");
  });

  it("Passes parsed HTML to ed-ans when the page defines it", async () => {
    // ed-ans itself can't be imported in tests (wink-nlp)
    customElements.define("ed-ans", class extends HTMLElement {});
    const el = await fixture<EdPbElement>(`<ed-pb>
Question

- :100: answer
</ed-pb>`);
    await waitUntil(() => el.shadowRoot.querySelector("ed-ans"));
    expect(el.shadowRoot.querySelector("ed-ans")!.hasAttribute("html")).to.be
      .true;
  });

  it("Defines the components answering its questions", () => {
    // imported alone: ed-pb defines them
    for (const tag of ["ed-choice", "ed-num", "ed-speech"]) {
      expect(customElements.get(tag), tag).to.exist;
    }
  });

  it("Can be defined twice", () => {
    expect(() => {
      EdPbElement.define();
      EdProgressBarElement.define();
    }).not.to.throw();
  });

  it("Keeps the answers when moved in the DOM", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb>
Question

- [x] Yes
- [ ] No
</ed-pb>`);
    el.shadowRoot
      .querySelector("ed-choice")!
      .shadowRoot.querySelector<HTMLElement>("ed-input-radio.good-answer")!
      .click();
    await el.updateComplete;
    const progress = () =>
      el.shadowRoot.querySelector("#bar-progress")!.getAttribute("percent");
    expect(progress()).to.equal("100");
    await moveInDom(el);
    await el.updateComplete;
    expect(progress()).to.equal("100");
  });

  it("Passes its interface language to its questions", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb ui-lang="fr">
Question

- [x] A
- [x] B
</ed-pb>`);
    expect(
      el.shadowRoot.querySelector("#bar-progress")!.getAttribute("label"),
    ).to.equal("Progression");
    const choice = el.shadowRoot.querySelector("ed-choice")!;
    await choice.updateComplete;
    expect(
      choice.shadowRoot.querySelector("#feedback button")!.textContent,
    ).to.contain("Correction");
  });

  it("Aligns the progress bars on the longest label", async () => {
    for (const [lang, width] of [
      ["fr", "11ch"], // "Progression", "Réussite"
      ["en", "8ch"], // "Progress", "Success"
    ]) {
      const el = await fixture<EdPbElement>(
        `<ed-pb ui-lang="${lang}" label="title"></ed-pb>`,
      );
      const progress = el.shadowRoot.querySelector<HTMLElement>("#progress")!;
      expect(
        progress.style.getPropertyValue("--ed-progress-label-width"),
      ).to.equal(width);
      const labels = [
        ...el.shadowRoot.querySelectorAll<EdProgressBarElement>(
          "ed-progress-bar",
        ),
      ].map(
        (bar) =>
          bar.shadowRoot.querySelector<HTMLElement>("#label")!.offsetWidth,
      );
      expect(labels[0]).to.equal(labels[1]);
    }
  });

  it("Fits labels of wide letters, with tabular percentages", async () => {
    // a test language with wide letters, which overflow ch in proportional fonts
    registerMessages("zz", { progress: "WWWMMM", success: "Ok" });
    const el = await fixture<EdPbElement>(
      `<ed-pb ui-lang="zz" label="title"></ed-pb>`,
    );
    const bar =
      el.shadowRoot.querySelector<EdProgressBarElement>("ed-progress-bar")!;
    const label = bar.shadowRoot.querySelector<HTMLElement>("#label")!;
    expect(label.scrollWidth).to.be.at.most(label.clientWidth);
    const percent = bar.shadowRoot.querySelector("#progress-bar")!;
    expect(getComputedStyle(percent).fontVariantNumeric).to.equal(
      "tabular-nums",
    );
  });

  it("Keeps the question feedback hidden in its ed-choice", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb label="title">
Question

- [x] Yes
- [ ] No

> Because.
</ed-pb>`);
    expect(el.shadowRoot.querySelector("article > blockquote")).to.be.null;
    const feedback = el.shadowRoot
      .querySelector("ed-choice")!
      .shadowRoot.querySelector<EdFeedbackElement>("#content > ed-feedback")!;
    expect(feedback.textContent).to.contain("Because.");
    expect(feedback.revealed).to.be.false;
  });

  it("Moves the question feedback into its ed-num", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb label="title">
Value of π?

- :num: 3.14

> π is about 3.14.
</ed-pb>`);
    await waitUntil(() => el.shadowRoot.querySelector("ed-num") !== null);
    expect(el.shadowRoot.querySelector("article > blockquote")).to.be.null;
    const edNum = el.shadowRoot.querySelector("ed-num")!;
    await edNum.updateComplete;
    expect(edNum._answer).to.equal(3.14);
    const feedback =
      edNum.shadowRoot.querySelector<EdFeedbackElement>("#explanation")!;
    expect(feedback.textContent).to.contain("π is about 3.14.");
    expect(feedback.revealed).to.be.false;
  });

  it("Turns speech lists into ed-speech", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb label="title">
1. Say «hello».

   - :say: hello

   > Hello is a greeting.
</ed-pb>`);
    await el.updateComplete;
    const edSpeech = el.shadowRoot.querySelector("ed-speech")!;
    await edSpeech.updateComplete;
    expect(edSpeech.expectedAnswer).to.equal("hello");
    expect(edSpeech.label).to.equal("Q1: Say «hello».");
    expect(
      edSpeech.shadowRoot.querySelector("#explanation")!.textContent,
    ).to.contain("Hello is a greeting.");
    expect(el.shadowRoot.querySelector("article blockquote")).to.be.null;
  });

  it("Numbers the questions, not the lists", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb label="title">
- a list of content

1. First?

   - :num: 1
</ed-pb>`);
    await el.updateComplete;
    expect(el.shadowRoot.querySelector("ed-num")!.label).to.equal("Q1: First?");
  });

  it("Ignores task lists without a correct choice", async () => {
    const el = await fixture<EdPbElement>(`<ed-pb label="title">
- [ ] no correct choice
- [ ] at all

Q2

- :num: 2
</ed-pb>`);
    await el.updateComplete;
    expect(el.shadowRoot.querySelector("ed-choice")).to.be.null;
    const edNum = el.shadowRoot.querySelector("ed-num")!;
    await edNum.updateComplete;
    // the problem has one question: answering it completes the problem
    const input = edNum.shadowRoot.querySelector("input")!;
    input.value = "2";
    input.dispatchEvent(new Event("input"));
    await edNum.updateComplete;
    setTimeout(() => edNum.shadowRoot.querySelector("button")!.click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail.verb).to.equal("COMPLETED");
  });
});
