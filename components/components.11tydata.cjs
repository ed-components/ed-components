const path = require("node:path");
const fs = require("fs");
const {
  customElementsManifestToMarkdown,
} = require("@custom-elements-manifest/to-markdown");
var md = require("markdown-it")();

module.exports = {
  eleventyComputed: {
    // debug: data => { console.log(data) },
    eleventyNavigation: {
      key: (data) => data.title,
      parent: (data) => data.parent,
    },
    id: (data) => path.basename(path.dirname(data.page.inputPath)),
    isComponent: ({ id }) => id.startsWith("ed-"),

    // load data from package.json
    npmPackage: (data) => {
      if (!data.isComponent) {
        return;
      }
      return require(path.join(__dirname, data.id, "package.json"));
    },
    title: ({ isComponent, id }) => (isComponent ?? `<${id}> component`),
    // Retriev data from the custom-elements
    manifest: ({ isComponent, id }) => {
      if (!isComponent) {
        return;
      }
      const manifest = JSON.parse(
        fs.readFileSync(`./components/${id}/custom-elements.json`, "utf-8"),
      );
      // console.log(manifest.modules[0].declarations[0].members)
      return manifest
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
