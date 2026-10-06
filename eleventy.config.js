import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(
    "src/**/*.{html,js,css,png,jpg,jpeg,gif,webp,svg,ico,mp3,ogg,mp4,woff,woff2,ttf}"
  );

  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
  );

  const isProduction = process.env.ELEVENTY_ENV === "production";

  return {
    pathPrefix: isProduction ? "/retrograde-wiki/" : "/",

    templateFormats: ["njk", "md"],

    dir: {
      input: "src",
      output: "_site",
    },
  };
}
