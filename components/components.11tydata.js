// convert to es module
import path from "node:path";
import { fileURLToPath } from 'url';
import { readFile } from "node:fs/promises";
import { customElementsManifestToMarkdown } from "@custom-elements-manifest/to-markdown"


const __dirname = path.dirname(fileURLToPath(import.meta.url));

import markdownit from 'markdown-it'
const md = markdownit()

export default {
  eleventyComputed: {
    // debug: data => { console.log(data) },
    eleventyNavigation: {
      key: (data) => data.title,
      parent: (data) => data.parent,
    },
    id: (data) => path.basename(path.dirname(data.page.inputPath)),
    isComponent: ({ id }) => id.startsWith("ed-"),

    // load data from package.json
    npmPackage: async (data) => {
      if (!data.isComponent) {
        return;
      }
      return JSON.parse(await readFile(path.join(__dirname, data.id, "package.json")));
    },
    title: ({ isComponent, id }) => {
      if (isComponent) {
        return `<${id}> component`;
      }
    },
    // Retriev data from the custom-elements
    manifest: async ({ isComponent, id }) => {
      if (!isComponent) {
        return;
      }
      const manifest = JSON.parse(
        await readFile(`./components/${id}/custom-elements.json`, "utf-8"),
      );
      // console.log(manifest.modules[0].declarations[0].members)
      return manifest;
    },
    // generate markdown from jsdoc using custom element manifest
    // https://github.com/open-wc/custom-elements-manifest/blob/master/packages/to-markdown/README.md
    htmlAPI: ({ isComponent, manifest }) => {
      if (!isComponent) {
        return;
      }
      // TODO render html with 11ty
      const html = md.render(
        customElementsManifestToMarkdown(manifest, {
          headingOffset: 3,
          omitDeclarations: [
            "super-class",
            "fields",
            "mixins",
            "variables",
            "functions",
            "exports",
          ],
        }),
      );
      return html;
    },
  },
};
