// let markdownIt = require("markdown-it");
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = (config) => {
  config.addPlugin(EleventyVitePlugin);
  let data = {
    layout: "page.njk",
    permalink: "{{ page.filePathStem | replace('README', '') }}/index.html",
    eleventyComputed: {
      defaultTitle: (data) => {
        if (data.id) {
          return data.css_only ? `.${data.id}` : `<${data.id}>`;
        }

        return "Ed components: A collection of accessible, customizable, web components for education";
      },
    },
  };

  for (let p in data) {
    config.addGlobalData(p, data[p]);
  }

  config.setDataDeepMerge(true);

  // config.setLibrary("md", markdownIt({
  // 		html: true,
  // 	})
  // 	.disable("code")
  // );

  config.addFilter("relative", (page) => {
    let path = page.url.replace(/[^/]+$/, "");
    let ret = require("path").relative(path, "/");

    return ret || ".";
  });

  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
    dir: {
      output: ".",
    },
  };
};
