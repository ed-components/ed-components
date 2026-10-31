/**
 * Create a stylesheet once, to share it between all instances of an element
 * with `shadowRoot.adoptedStyleSheets` instead of parsing a `<style>` in each
 * shadow root.
 */
export function stylesheet(css: string): CSSStyleSheet {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  return sheet;
}

/** Styles shared by all ed-components, adopted before their own sheet */
export const commonSheet = stylesheet(`
:host {
  --ed-primary: var(--blue-7, #1c7ed6);
  --ed-success: var(--green-7, #37b24d);
  --ed-danger: var(--red-7, #f03e3e);
  --ed-font-sans: var(--font-sans, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif);
}

/* math rendered from markdown */
.math-inline {
  font-size: 1.3em;
}
.math-display {
  font-size: 1.5em;
}

/* answer input followed by the submit button (ed-ans, ed-num) */
.user-input {
  display: flex;
  width: 100%;
  & > * {
    font-size: 1.1em;
  }
  & > input {
    flex: 1;
  }
}

/* submit answer button, see submitButton.ts */
.ed-submit-button {
  --_accent: color-mix(in srgb, var(--ed-primary) 75%, white);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.2ch;
  background-color: var(--ed-primary);
  border-radius: 0.3em;
  border: 2px solid var(--_accent);
  box-shadow:
    0 1px 3px,
    0 0 0 3px var(--_accent);
  color: currentColor;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`);
