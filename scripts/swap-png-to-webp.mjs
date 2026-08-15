// Rewrite every `.png` reference under public/img/ to `.webp`, EXCEPT favicon and
// apple-touch-icon links which need real .png files. Also rewrites `.jpg`/`.jpeg`
// when a smaller `.webp` sibling exists (converted images where WebP won).

import { readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { glob } from "node:fs/promises";

const CWD = process.cwd();
const files = [];
for await (const f of glob("src/**/*.{astro,ts,tsx,jsx,js,mjs}", { cwd: CWD })) {
  files.push(f);
}

const imgRefRe = /(\/img\/[^"'\s`)]+?\.(?:png|jpe?g))/gi;
const faviconLineRe = /rel=["'](?:icon|apple-touch-icon|shortcut icon|mask-icon)["']/i;

let filesTouched = 0;
let refsRewritten = 0;

for (const file of files) {
  const original = await readFile(file, "utf8");
  const lines = original.split("\n");
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (faviconLineRe.test(line)) continue;

    let newLine = line;
    for (const match of line.matchAll(imgRefRe)) {
      const original = match[1];
      const webp = original.replace(/\.(png|jpe?g)$/i, ".webp");
      const publicPath = join(CWD, "public", webp);
      try {
        await stat(publicPath);
      } catch {
        continue;
      }
      newLine = newLine.split(original).join(webp);
      refsRewritten++;
    }
    if (newLine !== line) {
      lines[i] = newLine;
      changed = true;
    }
  }

  if (changed) {
    await writeFile(file, lines.join("\n"));
    filesTouched++;
    console.log("✏️ ", file);
  }
}

console.log(`\nDone. ${refsRewritten} refs rewritten across ${filesTouched} files.`);
