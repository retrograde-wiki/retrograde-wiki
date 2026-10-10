import fs from "node:fs";
import path from "node:path";

const ROOT = "src";
const SKIP_DIRS = ["_includes", "_data", "style", "im", "node_modules"];

function walk(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.includes(entry.name)) out = out.concat(walk(full));
    } else if (entry.name.endsWith(".html") && !/template/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

export default function () {
  const groups = {};

  for (const file of walk(ROOT)) {
    const html = fs.readFileSync(file, "utf8");
    if (/noindex/i.test(html)) continue;

    const rel = path.relative(ROOT, file).split(path.sep);
    const url = "/" + rel.join("/");
    const m = html.match(/<title>([\s\S]*?)<\/title>/i);
    let title = m ? m[1].replace(/^\s*RETROGRADE\s*[-–—]\s*/i, "").trim() : rel[rel.length - 1];

    const folder = rel.length > 1 ? rel[0] : "Pages";
    const group = folder.charAt(0).toUpperCase() + folder.slice(1);
    (groups[group] = groups[group] || []).push({ url, title });
  }

  for (const g of Object.keys(groups)) {
    groups[g].sort((a, b) => a.title.localeCompare(b.title));
  }
  return groups;
}
