/** @module common
 *
 * Convert content from markdown to html with micromark
 *
 * TODO: handle yaml metadata to populate attributes
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";

export function md2HTML(md: string) {
  // First unescape characters as they comes from innerHTML
  // see: https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
  const unescapedMd = md
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

  const html = micromark(unescapedMd, {
    allowDangerousHtml: true,
    extensions: [gfm(), math()],
    htmlExtensions: [gfmHtml(), mathHtml({ output: "mathml" })],
  });
  return html;
}
