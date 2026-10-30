import { expect, fixture, waitUntil } from "@open-wc/testing";
import "../../ed-choice/src/ed-choice.js";
import "../../ed-micro/src/ed-micro.js";
import "../../ed-num/src/ed-num.js";
import "../../ed-pb/src/ed-pb.js";
import "../../ed-speech/src/ed-speech.js";
import "../../ed-survey/src/ed-survey.js";

// ed-ans is not covered: its test module can't be imported (wink-nlp)

/** Shadow roots of an element and of the elements rendered inside it */
function shadowRoots(root: Element): ShadowRoot[] {
  const roots: ShadowRoot[] = [];
  const visit = (el: Element) => {
    if (el.shadowRoot) {
      roots.push(el.shadowRoot);
      el.shadowRoot.querySelectorAll("*").forEach(visit);
    }
  };
  visit(root);
  return roots;
}

const elements = {
  "ed-choice": `Question

- [x] A
- [x] B
- [ ] C
`,
  "ed-micro": `# First

Hello

# Second

World
`,
  "ed-num": "3",
  "ed-pb": `Question

- [x] Yes
- [ ] No
`,
  "ed-speech": "Say something",
  "ed-survey": "How are you?",
};

describe("Component styles", () => {
  Object.entries(elements).forEach(([tag, content]) => {
    it(`${tag} styles are shared stylesheets`, async () => {
      const container = await fixture<HTMLElement>(`<div>
<${tag}>${content}</${tag}>
<${tag}>${content}</${tag}>
</div>`);
      const [first, second] = [...container.children];
      // let async rendering add inner elements
      await waitUntil(() => first.shadowRoot!.querySelectorAll("*").length > 0);

      for (const root of shadowRoots(first)) {
        expect(root.querySelectorAll("style").length).to.equal(0);
        expect(root.adoptedStyleSheets.length).to.be.greaterThan(0);
      }
      // one stylesheet object for all instances
      expect(first.shadowRoot!.adoptedStyleSheets).to.deep.equal(
        second.shadowRoot!.adoptedStyleSheets,
      );
      first.shadowRoot!.adoptedStyleSheets.forEach((sheet, i) =>
        expect(sheet).to.equal(second.shadowRoot!.adoptedStyleSheets[i]),
      );
    });
  });
});
