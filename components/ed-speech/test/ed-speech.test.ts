import { fixture, expect, oneEvent, waitUntil } from "@open-wc/testing";
import { EdSpeechElement } from "../src/EdSpeech.js";
import { normalize, similarityScore } from "../src/similarity.js";
import type { TranscribeOptions } from "../src/whisper.js";
import "../src/ed-speech.js";

const { recorder, transcriber } = EdSpeechElement;

/** Fake microphone and speech recognition, returning `text` */
function fakeSpeech(text: string, calls: TranscribeOptions[] = []) {
  let recording = false;
  EdSpeechElement.recorder = async () => {
    recording = true;
    return {
      stop: async () => {
        recording = false;
        return new Float32Array(16000);
      },
    };
  };
  EdSpeechElement.transcriber = async (_audio, options) => {
    calls.push(options);
    options.onProgress?.(50);
    return text;
  };
  return { isRecording: () => recording };
}

const mic = (el: EdSpeechElement) =>
  el.shadowRoot.querySelector<HTMLButtonElement>("#mic-button")!;
const submit = (el: EdSpeechElement) =>
  el.shadowRoot.querySelector<HTMLButtonElement>("#submit")!;
const transcript = (el: EdSpeechElement) =>
  el.shadowRoot.querySelector("#transcript")!.textContent;
const info = (el: EdSpeechElement) =>
  el.shadowRoot.querySelector("#info")!.textContent ?? "";

describe("EdSpeechElement", () => {
  afterEach(() => {
    EdSpeechElement.recorder = recorder;
    EdSpeechElement.transcriber = transcriber;
  });

  it("passes the a11y audit", async () => {
    const el = await fixture<EdSpeechElement>(`<ed-speech></ed-speech>`);
    await expect(el).shadowDom.to.be.accessible();
  });

  it("records, transcribes and sends the response with a score", async () => {
    const speech = fakeSpeech("Hello!");
    const el = await fixture<EdSpeechElement>(
      `<ed-speech lang="en" answer="hello">Say «Hello»</ed-speech>`,
    );
    mic(el).click();
    await waitUntil(speech.isRecording);
    expect(mic(el).getAttribute("aria-pressed")).to.equal("true");

    mic(el).click();
    await waitUntil(() => transcript(el) === "Hello!");
    expect(mic(el).getAttribute("aria-pressed")).to.equal("false");
    expect(submit(el).disabled).to.be.false;

    setTimeout(() => submit(el).click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail.verb).to.equal("RESPONDED");
    expect(detail.response).to.equal("Hello!");
    expect(detail.answer).to.equal("hello");
    expect(detail.score).to.equal(100);
    expect(el.hasAttribute("readonly")).to.be.true;
    expect(mic(el).disabled).to.be.true;
  });

  it("has no score without expected answer", async () => {
    fakeSpeech("Bonjour");
    const el = await fixture<EdSpeechElement>(`<ed-speech>Parlez</ed-speech>`);
    mic(el).click();
    await waitUntil(() => mic(el).getAttribute("aria-pressed") === "true");
    mic(el).click();
    await waitUntil(() => transcript(el) === "Bonjour");
    setTimeout(() => submit(el).click());
    const { detail } = await oneEvent(el, "edEvent");
    expect(detail).not.to.have.property("score");
  });

  it("passes the language and model to the transcriber", async () => {
    const calls: TranscribeOptions[] = [];
    fakeSpeech("énergie", calls);
    const el = await fixture<EdSpeechElement>(
      `<ed-speech lang="fr-FR" model="onnx-community/whisper-small">Dites</ed-speech>`,
    );
    mic(el).click();
    await waitUntil(() => mic(el).getAttribute("aria-pressed") === "true");
    mic(el).click();
    await waitUntil(() => calls.length === 1);
    expect(calls[0].language).to.equal("fr");
    expect(calls[0].model).to.equal("onnx-community/whisper-small");
  });

  it("explains a denied microphone", async () => {
    EdSpeechElement.recorder = async () => {
      throw new DOMException("denied", "NotAllowedError");
    };
    const el = await fixture<EdSpeechElement>(`<ed-speech></ed-speech>`);
    mic(el).click();
    await waitUntil(() => info(el).includes("denied"));
    expect(mic(el).getAttribute("aria-pressed")).to.equal("false");
  });

  it("reports an empty transcription", async () => {
    fakeSpeech("");
    const el = await fixture<EdSpeechElement>(`<ed-speech></ed-speech>`);
    mic(el).click();
    await waitUntil(() => mic(el).getAttribute("aria-pressed") === "true");
    mic(el).click();
    await waitUntil(() => info(el).includes("No speech"));
    expect(submit(el).disabled).to.be.true;
  });
});

describe("similarityScore", () => {
  it("ignores case, accents and punctuation", () => {
    expect(normalize("  L'Énergie, c'est mc² !")).to.equal(
      "l energie c est mc2",
    );
    expect(similarityScore("L'énergie.", "l'energie")).to.equal(100);
  });

  it("gives partial credit to close answers", () => {
    const score = similarityScore("heat", "hit");
    expect(score).to.be.greaterThan(0).and.lessThan(100);
    expect(similarityScore("bonjour", "au revoir")).to.be.lessThan(50);
  });
});
