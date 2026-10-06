import fs from "node:fs";
import markdownIt from "markdown-it";

export default function () {
  const md = markdownIt({ html: true, breaks: true, linkify: true });
  return md.render(fs.readFileSync("src/_includes/updates.md", "utf8"));
}
