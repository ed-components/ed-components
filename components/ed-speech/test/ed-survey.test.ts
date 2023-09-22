import { fixture, expect } from "@open-wc/testing";
import { EdSpeechElement } from "../src/EdSpeech.js";
import "../src/ed-speech.js";

describe("EdSpeechElement", () => {
  it("passes the a11y audit", async () => {
    const el = await fixture<EdSpeechElement>(`<ed-speech></ed-speech>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
