import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // Groups lore pages by their front matter "category".
  // "order" is the list of category names to show first, in that order.
  eleventyConfig.addFilter("groupByCategory", (items, order = []) => {
    const groups = {};
    items.filter((i) => !i.data.hidden).forEach((i) => {
      const name = i.data.category || "Other";
      (groups[name] = groups[name] || []).push(i);
    });
    const byPage = (a, b) =>
      (a.data.order ?? 999) - (b.data.order ?? 999) ||
      String(a.data.title).localeCompare(String(b.data.title));
    const names = Object.keys(groups).sort((a, b) => {
      const ia = order.indexOf(a), ib = order.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      if (a === "Other") return 1;
      if (b === "Other") return -1;
      return a.localeCompare(b);
    });
    return names.map((name) => ({ name, items: groups[name].sort(byPage) }));
  });




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
