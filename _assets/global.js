// Website scripts
//import "./index.js";
import "https://prismjs.com/prism.js";

function renderDemos() {
  for (let code of document.querySelectorAll(
    "pre > code.language-html, pre.language-html > code"
  )) {
    let pre = code.parentNode;

    if (!pre.previousElementSibling.matches(".demo")) {
      code.parentNode.insertAdjacentHTML(
        "beforebegin",
        `<p class="demo">${code.textContent}</p>`
      );
    }
  }
}

renderDemos();
