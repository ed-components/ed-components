import { expect } from "@open-wc/testing";
import { md2HTML } from "../src/common.js";

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
  it("Handle answer directive", async () => {
    const html = md2HTML(`:::answer
What an **incredible** answer

Also I would like to say _thank you_!)
:::
`);
    expect(html).to.be.equal(`<ed-sc>
<p>What an <strong>incredible</strong> answer</p>
<p>Also I would like to say <em>thank you</em>!)</p>
</ed-sc>
`);
  });
});
