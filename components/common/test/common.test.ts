import { expect } from "@open-wc/testing";
import { md2HTML } from "../src/index.js";

describe("EdNum is accessible", () => {
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
    const html = md2HTML(`:::ed-sc
- [x] true
- [ ] false
:::
`);
    expect(html).to.be.equal("<ed-sc>\n- [x] true\n- [ ] false\n</ed-sc>\n");
  });
});
