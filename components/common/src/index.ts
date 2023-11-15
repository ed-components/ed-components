/** @module ytiles
 *
 * Convert content from markdown to html with micromark
 *
 * TODO: handle yaml metadata to populate attributes
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";

export function md2HTML(md: string) {
  const html = micromark(md, {
    allowDangerousHtml: true,
    extensions: [gfm(), math()],
    htmlExtensions: [gfmHtml(), mathHtml({ output: "mathml" })],
  });
  return html;
}
