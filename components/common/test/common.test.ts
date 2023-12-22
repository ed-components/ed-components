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

  it("Allow citations", async () => {
    const html = md2HTML(`# hello world


> This guy is incredible.
> He said that everything is ok.

`);
    expect(html).to.be.equal(
      `<h1>hello world</h1>
<blockquote>
<p>This guy is incredible.
He said that everything is ok.</p>
</blockquote>
`,
    );
  });
});
