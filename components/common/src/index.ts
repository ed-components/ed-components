/** @module common
 *
 * Convert content from markdown to html with micromark
 *
 * TODO: handle yaml metadata to populate attributes
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";

/**
 * Markdown written in an element: innerHTML escapes "<", ">" and "&"
 * see: https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
 */
export function unescapeMarkdown(innerHTML: string) {
  return innerHTML
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export function md2HTML(md: string) {
  const unescapedMd = unescapeMarkdown(md);

  const html = micromark(unescapedMd, {
    allowDangerousHtml: true,
    extensions: [gfm(), math()],
    htmlExtensions: [gfmHtml(), mathHtml({ output: "mathml" })],
  });
  return html;
}
