// Website scripts
//import "./index.js";
import "./prism.js";

function renderDemos() {
  for (let code of document.querySelectorAll(
    "pre > code.language-html, pre.language-html > code"
  )) {
    const pre = code.parentNode;
    pre.classList.add("demo")
    if (!pre.previousElementSibling.matches(".demo")) {
      pre.insertAdjacentHTML(
        "beforebegin",
        `<div class="demo">${code.textContent}</div>`
      );
    }
  }
}

renderDemos();
