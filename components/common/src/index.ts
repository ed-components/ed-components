/** @module ytiles
 *
 * Convert content from markdown to html with micromark
 *
 * TODO: handle yaml metadata to populate attributes
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";
// import * as matter from "gray-matter";

import {
  directive,
  directiveHtml,
  Directive,
} from "micromark-extension-directive";

export function md2HTML(md: string) {
  // const { content, data } = matter(md);
  const html = micromark(md, {
    allowDangerousHtml: true,
    extensions: [directive(), gfm(), math()],
    htmlExtensions: [
      directiveHtml({
        "ed-sc": answer,
        "ed-speech": answer,
        "ed-num": answer,
        "ed-survey": answer,
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
function answer(d: Directive) {
  if (d.type !== "containerDirective" && !d.name.startsWith("ed-"))
    return false;

  this.tag("<");
  this.tag(d.name);

  // if (d.attributes && "title" in d.attributes) {
  //   this.tag(' title="' + this.encode(d.attributes.title) + '"');
  // }

  this.tag(">");
  this.raw("\n");
  this.raw(d.content);
  this.tag("</");
  this.tag(d.name);
  this.tag(">");
}
