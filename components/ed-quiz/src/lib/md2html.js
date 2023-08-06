/** @module md2html
 *
 * Convert tag content to markdown with micromark
 *
 * TODO: handle yaml metadata
 */

import { frontmatter, frontmatterHtml } from 'micromark-extension-frontmatter'
import { micromark } from 'micromark'
import { gfm, gfmHtml } from 'micromark-extension-gfm'
import { math, mathHtml } from 'micromark-extension-math'

module.exports = md2html

function md2html (md) {
  return micromark(md, {
    allowDangerousHtml: true,
    extensions: [gfm(), frontmatter(), math],
    htmlExtensions: [gfmHtml, frontmatterHtml, mathHtml({ output: 'mathml' })]
  })
}
