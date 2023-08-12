// @ts-nocheck
/** @module md2html
 *
 * Convert tag content to markdown with micromark
 *
 * TODO: handle yaml metadata
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";

export default function md2html(md) {
  return micromark(md, {
    allowDangerousHtml: true,
    extensions: [gfm(), math()],
    htmlExtensions: [gfmHtml(), mathHtml({ output: "mathml" })],
  });
}
