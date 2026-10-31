import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { buttonHTML } from "./button.js";

/** Icon from bootstrap icons, https://icons.getbootstrap.com/icons/card-checklist/ */
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16" aria-hidden="true">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
  </svg>`;

/**
 * Button submitting answers, shared by the components (ed-choice multiple
 * choice, ed-ans, ed-num, ed-speech). A styled native button: customized
 * built-in elements (is="...") don't work in Safari. It inherits the
 * base button (button.ts).
 */
export const submitButtonHTML = (label = "Correction") =>
  buttonHTML({
    className: "ed-submit-button",
    content: `${icon}&nbsp;${label}`,
  });

/** The submit button as a Lit template, for components written with Lit */
export const submitButton = ({
  label = "Correction",
  disabled = false,
  onClick,
}: {
  label?: string;
  disabled?: boolean;
  onClick: (evt: Event) => void;
}) =>
  html`<button
    type="button"
    class="ed-button ed-submit-button"
    ?disabled=${disabled}
    @click=${onClick}
  >
    ${unsafeHTML(icon)}&nbsp;${label}
  </button>`;
