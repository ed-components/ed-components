import { fixture, expect } from "@open-wc/testing";
import "../src/ed-num.js";
describe("EdSurvey", () => {
    it('has a default question "How are you today?" and type smiley', async () => {
        var _a;
        const el = await fixture(`<ed-num></ed-num>`);
        expect(el.question).to.equal("How are you today?");
        expect(el.type).to.equal("smiley");
        expect((_a = el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ed-smiley").shadowRoot.querySelectorAll("button").length).to.equal(3);
    });
    it("innerHTML is used as question", async () => {
        const question = "Does it works?";
        const el = await fixture(`<ed-num>${question}</ed-num>`);
        expect(el.question).to.equal(question);
        expect(el.getAttribute("question")).to.equal(question);
        // el.shadowRoot!.querySelector('button')!.click();
        // expect(el.counter).to.equal(6);
    });
    it("can override the type via attribute", async () => {
        const el = await fixture(`<ed-num type="rating"></ed-num>`);
        expect(el.type).to.equal("rating");
        // expect(el.shadowRoot?.querySelectorAll('button').length).to.equal(5);
    });
    it("passes the a11y audit", async () => {
        const el = await fixture(`<ed-num></ed-num>`);
        await expect(el).shadowDom.to.be.accessible();
    });
});
//# sourceMappingURL=ed-num.test.js.map