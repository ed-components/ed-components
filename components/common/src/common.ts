/** @module ytiles
 *
 * Convert content from markdown to html with micromark
 *
 * TODO: handle yaml metadata to populate attributes
 */

import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { math, mathHtml } from "micromark-extension-math";

export function md2html(md: string) {
  // It seems that empty lines are not allowed inside html content
  // in markdown
  const html = micromark(md, {
    allowDangerousHtml: true,
    extensions: [gfm(), math()],
    htmlExtensions: [gfmHtml(), mathHtml({ output: "mathml" })],
  });
  return html;
}

// /**
//  * De-dents the code by getting the padding from the first line,
//  * then removes the same indent amount padding from the rest of the lines
//  *
//  * @param {string} text - the text to dedent
//  * @returns {string} the dedented text
//  */
// function _dedentText(text: string) {
//   if (text.length === 0) return text;
//   const lines = text.split("\n");

//   // remove the first line if it is an empty line
//   if (lines[0] === "") lines.splice(0, 1);

//   const initline = lines[0];
//   let fwdPad = 0;
//   const usingTabs = initline[0] === "\t";
//   const checkChar = usingTabs ? "\t" : " ";

//   while (initline[fwdPad] === checkChar) {
//     fwdPad += 1;
//   }

//   const fixedLines = [];

//   for (const line of lines) {
//     fixedLines.push(line.substring(fwdPad));
//   }

//   if (fixedLines[fixedLines.length - 1] === "") {
//     fixedLines.splice(fixedLines.length - 1, 1);
//   }

//   return fixedLines.join("\n");
// }
