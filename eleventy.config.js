import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/_includes/updates.md");

  eleventyConfig.addPassthroughCopy("src/im");
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/*.js");
  eleventyConfig.addPassthroughCopy("src/**/*.html");

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }));

  return {
    templateFormats: ["njk", "md"],
    dir: { input: "src", output: "_site" },
  };
}
