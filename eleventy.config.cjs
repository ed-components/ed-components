module.exports = (eleventyConfig) => {
  // ignore design files
  eleventyConfig.ignores.add("design/*");
  eleventyConfig.watchIgnores.add("design/*");
  eleventyConfig.addWatchTarget("./components/**/*.ts");

  // turns README.md into index.html
  let data = {
    layout: "page.njk",
    permalink: "{{ page.filePathStem | replace('README', '') }}/index.html",
    defaultTitle:
      "Ed components: A collection of accessible, customizable, web components for education",
  };

  for (let p in data) {
    eleventyConfig.addGlobalData(p, data[p]);
  }

  eleventyConfig.setDataDeepMerge(true);

  // Copy `_assets` to `.`
  eleventyConfig.addPassthroughCopy({ "_assets/*.js": "." });
  eleventyConfig.addPassthroughCopy({ "_assets/*.css": "." });
  eleventyConfig.addPassthroughCopy({ "_assets/*.svg": "." });

  eleventyConfig.addFilter("relative", (page) => {
    let path = page.url.replace(/[^/]+$/, "");
    let ret = require("path").relative(path, "/");

    return ret || ".";
  });

  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
    dir: {
      input: ".",
      // output: ".",
    },
  };
};
