import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.{html,js,css,png,jpg,jpeg,gif,webp,svg,ico,mp3,ogg,mp4,woff,woff2,ttf}");

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,    // raw HTML like <br> or <h1> still works if you want it
    breaks: true,  // single Enter = line break
    linkify: true, // bare URLs become links
  }));

  return {
    templateFormats: ["njk", "md"],
    dir: { input: "src", output: "_site" },
  };
}
