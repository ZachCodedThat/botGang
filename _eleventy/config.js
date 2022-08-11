const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "events",
    functionsDir: "./netlify/functions",
    redirects: "netlify-toml-builders",
  });

  return {
    templateFormats: ["njk"],
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
