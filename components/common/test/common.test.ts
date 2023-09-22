import { expect } from "@open-wc/testing";
import { md2html } from "../src/common.js";

describe("EdNum is accessible", () => {
  it("Use gfm task lists", async () => {
    const html = md2html(`- [ ] A
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
});
