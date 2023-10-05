import { expect } from "@open-wc/testing";
import { md2HTML } from "../src/index.js";

describe("md2HTML function", () => {
  it("Use gfm task lists", async () => {
    const html = md2HTML(`- [ ] A
- [x] B
- [ ] C
`);
    expect(html).to.be.equal(
      `<ul>
<li><input type="checkbox" disabled="" /> A</li>
<li><input type="checkbox" disabled="" checked="" /> B</li>
<li><input type="checkbox" disabled="" /> C</li>
</ul>
`,
    );
  });
  it("Handle ed tags directives", async () => {
    const html = md2HTML(`:::ed[survey]{type=rating}
Do you like pasta?
:::
`);
    expect(html).to.be.equal(
      '<ed-survey type="rating">\n<p>Do you like pasta?</p>\n</ed-survey>\n',
    );
  });
});
