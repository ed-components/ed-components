import { aTimeout } from "@open-wc/testing";

/**
 * Move an element to another place of the document, which runs its
 * connectedCallback again, and let an async connectedCallback finish
 * (components dynamically import the markdown module, which may need a
 * network round trip in tests).
 */
export async function moveInDom(el: HTMLElement) {
  const container = document.createElement("div");
  document.body.append(container);
  container.append(el);
  await aTimeout(100);
}
