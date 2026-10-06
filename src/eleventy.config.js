export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("im");
  eleventyConfig.addPassthroughCopy("header.js");

  return {
    htmlTemplateEngine: false,
    dir: { input: ".", output: "_site" },
  };
}
