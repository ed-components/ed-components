export class EdCheckButtonElement extends HTMLButtonElement {
  static define(tagName = "ed-check-button") {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, this, { extends: "button" });
    }
  }

  connectedCallback() {
    //   add css styles to the button
    // svg icon from bootstrap icons
    // https://icons.getbootstrap.com/icons/card-checklist/
    this.style.cssText = `
            --ed-primary: var(--blue-7, #1c7ed6);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 0.2ch;
            --_accent: color-mix(in srgb, var(--ed-primary) 75%, white);
            background-color: var(--ed-primary);
            border-radius: 0.3em;
            border: 2px solid var(--_accent);
            box-shadow: 
              2px;,
              0 1px 3px,
              0 0 0 3px var(--_accent)
            ;
            text-shadow: var(--_accent);`;
    this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg>&nbsp;Correction`;
  }
}
