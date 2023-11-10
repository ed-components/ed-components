/** @module ytiles
 *
 * Convert content from markdown to html with micromark
 *
 * TODO: handle yaml metadata to populate attributes
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";

import {
  directive,
  directiveHtml,
  Directive,
} from "micromark-extension-directive";

export function md2HTML(md: string) {
  const html = micromark(md, {
    allowDangerousHtml: true,
    extensions: [directive(), gfm(), math()],
    htmlExtensions: [
      directiveHtml({
        ed: edDirective,
      }),
      gfmHtml(),
      mathHtml({ output: "mathml" }),
    ],
  });
  return html;
}

/**
 * @this {import('micromark-util-types').CompileContext}
 * @type {import('micromark-extension-directive').Handle}
 * @returns {undefined}
 */
function edDirective(d: Directive) {
  if (d.type !== "containerDirective" && d.name !== "ed" && d.label)
    return false;
  const tagName = `${d.name}-${d.label}`;
  this.tag("<");
  this.tag(tagName);

  if (d.attributes) {
    for (const attr of Object.keys(d.attributes)) {
      this.tag(` ${attr}="${this.encode(d.attributes[attr])}"`);
    }
  }

  this.tag(">");
  this.raw("\n");
  this.raw(d.content);
  this.tag("</");
  this.tag(tagName);
  this.tag(">");
}
