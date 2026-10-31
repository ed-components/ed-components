/**
 * Base of the buttons of the components, styled by the `.ed-button` rule of
 * commonSheet (styles.ts) and colored by the `--ed-button-color` property,
 * which buttons can override.
 */
export function buttonHTML({
  content,
  className = "",
  attributes = "",
}: {
  /** HTML content: icon and label */
  content: string;
  /** Classes added to `ed-button` */
  className?: string;
  /** Other attributes, e.g. `id="mic" aria-label="Record"` */
  attributes?: string;
}): string {
  return `<button type="button" class="ed-button ${className}" ${attributes}>${content}</button>`;
}
