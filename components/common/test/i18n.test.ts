import { expect, fixture } from "@open-wc/testing";
import { formatNumber, registerMessages, t, uiLocale } from "../src/i18n.js";

describe("i18n", () => {
  const pageLang = document.documentElement.lang;
  afterEach(() => {
    document.documentElement.lang = pageLang;
  });

  it("uses English without language", async () => {
    document.documentElement.lang = "";
    const el = await fixture(`<span></span>`);
    expect(uiLocale(el)).to.equal("en");
    expect(t(el, "submit")).to.equal("Check");
  });

  it("follows the page language, without region", async () => {
    document.documentElement.lang = "fr-FR";
    const el = await fixture(`<span></span>`);
    expect(uiLocale(el)).to.equal("fr");
    expect(t(el, "submit")).to.equal("Correction");
  });

  it("prefers the ui-lang of the element or of an ancestor", async () => {
    document.documentElement.lang = "en";
    const el = await fixture(`<div ui-lang="fr"><p><span></span></p></div>`);
    expect(uiLocale(el.querySelector("span")!)).to.equal("fr");
  });

  it("crosses shadow roots to find ui-lang", async () => {
    const host = await fixture(`<div ui-lang="fr"></div>`);
    const inner = document.createElement("span");
    host.attachShadow({ mode: "open" }).append(inner);
    expect(uiLocale(inner)).to.equal("fr");
  });

  it("does not use the lang attribute, the exercise language", async () => {
    document.documentElement.lang = "fr";
    const el = await fixture(`<span lang="es"></span>`);
    expect(uiLocale(el)).to.equal("fr");
  });

  it("formats messages with parameters", async () => {
    const el = await fixture(`<span ui-lang="fr"></span>`);
    expect(t(el, "score", 75, "3,14")).to.equal(
      "Score : 75 % la bonne réponse était : 3,14",
    );
  });

  it("falls back to English for unknown languages and messages", async () => {
    registerMessages("de", { submit: "Prüfen" });
    const el = await fixture(`<span ui-lang="de"></span>`);
    expect(t(el, "submit")).to.equal("Prüfen");
    expect(t(el, "progress")).to.equal("Progress");
    const unknown = await fixture(`<span ui-lang="xx"></span>`);
    expect(t(unknown, "submit")).to.equal("Check");
  });

  it("lets authors change messages", async () => {
    registerMessages("fr-FR", { submit: "Valider" });
    const el = await fixture(`<span ui-lang="fr"></span>`);
    expect(t(el, "submit")).to.equal("Valider");
    registerMessages("fr", { submit: "Correction" });
  });

  it("formats numbers in the interface language", async () => {
    const fr = await fixture(`<span ui-lang="fr"></span>`);
    const en = await fixture(`<span ui-lang="en"></span>`);
    expect(formatNumber(fr, 3.14)).to.equal("3,14");
    expect(formatNumber(en, 3.14)).to.equal("3.14");
  });
});
