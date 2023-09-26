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
  it("Handle single choice tag <ed-sc>", async () => {
    const html = md2HTML(`<ed-sc>
This is my label that could also contain some block content like code blocks.

\`\`\`python
for i in range(10):
  print(i)
\`\`\`

> optional description

- [x] True answer
  > Optional choice hint
- [ ] False answer
  > Optional choice hint

> solution

1. optional additional information that learners can access if needed.
2. second info.
</ed-sc>
`);
    expect(html).to.be.equal(
      `<ed-sc>
This is my label that could also contain some block content like code blocks.
<pre><code class="language-python">for i in range(10):
  print(i)
</code></pre>
<blockquote>
<p>optional description</p>
</blockquote>
<ul>
<li><input type="checkbox" disabled="" checked="" /> True answer
<blockquote>
<p>Optional choice hint</p>
</blockquote>
</li>
<li><input type="checkbox" disabled="" /> False answer
<blockquote>
<p>Optional choice hint</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>solution</p>
</blockquote>
<ol>
<li>optional additional information that learners can access if needed.</li>
<li>second info.
</ed-sc></li>
</ol>
`,
    );
  });
});
