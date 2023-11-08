// Website scripts

function renderDemos() {
  for (let code of document.querySelectorAll(
    "pre > code.language-html, pre.language-html > code",
  )) {
    // render only demos
    const regExpDirective = new RegExp("^:+\[ed\]");

    if (code.textContent.startsWith("<ed-")) {
      const htmlCode = code.textContent;
      // include code as data-attribute
      const htmlCodeBytes = btoa(htmlCode);
      const pre = code.parentNode;
      // create wrapper container
      const wrapper = document.createElement("div");
      // set the wrapper as child (instead of the pre)
      pre.parentNode.replaceChild(wrapper, pre);

      // set element as child of wrapper
      wrapper.appendChild(pre);

      wrapper.classList.add("demo");

      // svg icon from bootstrap icons
      // code inspired from docker docs
      pre.insertAdjacentHTML(
        "beforebegin",
        `<div class="live"><span>html</span><svg xmlns="http://www.w3.org/2000/svg" title="Copy code" data-code="${htmlCodeBytes}" onclick="window.navigator.clipboard.writeText(atob(this.dataset.code));" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg></span></div>`,
      );
      pre.insertAdjacentHTML(
        "afterend",
        `<div class="live">preview</div><div>${htmlCode}</div>`,
      );
    }
  }
}

renderDemos();
