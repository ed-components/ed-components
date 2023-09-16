/** @module ytiles
 *
 * Convert content from markdown to html with micromark
 *
 * TODO: handle yaml metadata to populate attributes
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";

const parser = new DOMParser();

export default function md2html(md: string) {
  // It seems that empty lines are not allowed inside html content
  // in markdown
  const html = micromark(md, {
    allowDangerousHtml: true,
    extensions: [gfm(), math()],
    htmlExtensions: [
      gfmHtml(),
      gfmTagfilterHtml(),
      mathHtml({ output: "mathml" }),
    ],
  });
  return html;
}

/**
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').Token} Token
 */

// An opening or closing tag start, followed by a case-insensitive specific tag name,
// followed by HTML whitespace, a greater than, or a slash.
const reFlow = /<(\/?)(ed-sc|ed-survey|ed-num)(?=[\t\n\f\r />])/gi;

// As HTML (text) parses tags separately (and very strictly), we don’t need to be
// global.
const reText = new RegExp("^" + reFlow.source, "i");

/**
 * Create an HTML extension for `micromark` to support GitHubs weird and
 * useless tagfilter when serializing to HTML.
 *
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions` to support
 *   GitHubs weird and useless tagfilter when serializing to HTML.
 */
function gfmTagfilterHtml() {
  return {
    exit: {
      htmlFlowData(token) {
        exitHtmlData.call(this, token, reFlow);
      },
      htmlTextData(token) {
        exitHtmlData.call(this, token, reText);
      },
    },
  };
}

/**
 * @this {CompileContext}
 * @param {Token} token
 * @param {RegExp} filter
 * @returns {undefined}
 */
function exitHtmlData(token, filter) {
  let value = this.sliceSerialize(token);
  console.log("HTML", value);
  if (this.options.allowDangerousHtml) {
    // value = value.replace(filter, "&lt;$1$2CACCA");
  }

  this.raw(value);
}
/**
   * De-dents the code by getting the padding from the first line,
   * then removes the same indent amount padding from the rest of the lines
   *
   * @param {string} text - the text to dedent
   * @returns {string} the dedented text
   */
  private static _dedentText(text: string) {
    if (text.length === 0) return text;
    const lines = text.split("\n");

    // remove the first line if it is an empty line
    if (lines[0] === "") lines.splice(0, 1);

    const initline = lines[0];
    let fwdPad = 0;
    const usingTabs = initline[0] === "\t";
    const checkChar = usingTabs ? "\t" : " ";

    while (initline[fwdPad] === checkChar) {
      fwdPad += 1;
    }

    const fixedLines = [];

    for (const line of lines) {
      fixedLines.push(line.substring(fwdPad));
    }

    if (fixedLines[fixedLines.length - 1] === "") {
      fixedLines.splice(fixedLines.length - 1, 1);
    }

    return fixedLines.join("\n");
  }
