// Batch-convert public/img/**/*.{png,jpg,jpeg} to .webp siblings.
// Run: node scripts/to-webp.mjs
// Existing .webp files are skipped so reruns are idempotent.

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, relative } from "node:path";

const ROOT = "public/img";
const QUALITY = 78;
const exts = new Set([".png", ".jpg", ".jpeg"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let converted = 0;
let skipped = 0;
let saved = 0;

for await (const src of walk(ROOT)) {
  const ext = extname(src).toLowerCase();
  if (!exts.has(ext)) continue;

  const webp = src.replace(/\.(png|jpe?g)$/i, ".webp");
  try {
    await stat(webp);
    skipped++;
    continue;
  } catch {
    // .webp doesn't exist — convert
  }

  const srcSize = (await stat(src)).size;
  await sharp(src).webp({ quality: QUALITY, effort: 5 }).toFile(webp);
  const webpSize = (await stat(webp)).size;
  const savings = srcSize - webpSize;
  saved += savings;
  converted++;

  const rel = relative(ROOT, src);
  const pct = ((savings / srcSize) * 100).toFixed(0);
  console.log(
    `${rel.padEnd(60)} ${(srcSize / 1024).toFixed(0).padStart(6)}KB → ${(
      webpSize / 1024
    ).toFixed(0).padStart(6)}KB  (-${pct}%)`
  );
}

console.log(
  `\nDone. Converted ${converted}, skipped ${skipped}. Total saved: ${(saved / 1024 / 1024).toFixed(2)} MB.`
);
