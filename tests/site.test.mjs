import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const homepage = await readFile(path.join(root, "index.html"), "utf8");
const editionsPath = path.join(root, "editions");
const editionFolders = (await readdir(editionsPath, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

test("the homepage links to the current edition and GitHub repository", () => {
  assert.ok(editionFolders.length > 0, "at least one edition must exist");
  assert.match(homepage, /<html lang="de">/);
  for (const folder of editionFolders) {
    assert.ok(
      homepage.includes(`editions/${folder}/index.html`),
      `${folder} must appear in the archive`,
    );
  }
  assert.match(homepage, /https:\/\/github\.com\/7amdmad\/seo-geo-radar/);
  assert.match(homepage, /class="edition-grid"/);
  assert.match(homepage, /class="edition-card__period"/);
  assert.match(homepage, /class="edition-card__count">10 Highlights/);
});

test("every edition contains ten sourced slides", async () => {
  assert.ok(
    editionFolders.includes("2026-10-29"),
    "preserve the original edition",
  );

  for (const folder of editionFolders) {
    assert.match(folder, /^\d{4}-\d{2}-\d{2}$/);
    const html = await readFile(
      path.join(editionsPath, folder, "index.html"),
      "utf8",
    );
    const slides = [
      ...html.matchAll(
        /<section\b(?=[^>]*\bclass="slide(?:\s[^"]*)?")[^>]*>[\s\S]*?<\/section>/g,
      ),
    ].map(([slide]) => slide);

    assert.equal(slides.length, 10);
    assert.equal([...html.matchAll(/<img\b/g)].length, 10);
    assert.doesNotMatch(html, /class="image-placeholder"/);
    assert.match(html, /<html lang="de">/);
    assert.match(html, /src="\.\.\/\.\.\/src\/deck\.js"/);
    assert.match(html, /href="\.\.\/\.\.\/index\.html(?:#[^"]*)?"/);
    assert.match(html, /<meta\s+name="description"/);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id);
    assert.equal(
      new Set(ids).size,
      ids.length,
      "edition HTML IDs must be unique",
    );

    for (const slide of slides) {
      assert.match(slide, /<h2 class="slide__title"/);
      assert.match(slide, /class="slide__body"/);
      assert.match(slide, /class="slide__sources"/);
      const body = slide.match(
        /<p\b[^>]*class="slide__body"[^>]*>([\s\S]*?)<\/p>/,
      );
      assert.ok(body, "each slide needs summary text");
      const emphasis = [...body[1].matchAll(/<strong\b/g)].length;
      assert.ok(
        emphasis >= 2 && emphasis <= 4,
        `${folder}: each summary needs 2-4 highlighted phrases`,
      );
      const text = body[1]
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();
      const sentences = [
        ...new Intl.Segmenter("de", { granularity: "sentence" }).segment(text),
      ];
      assert.ok(
        sentences.length >= 2 && sentences.length <= 3,
        `${folder}: expected 2-3 sentences, got ${sentences.length}: ${text}`,
      );
      assert.equal(
        [...slide.matchAll(/<img\b/g)].length,
        1,
        "each slide needs exactly one image",
      );
      const image = slide.match(/<img\b[^>]*\bsrc="([^"]+)"/s);
      assert.ok(image, "non-placeholder slides must have an image source");
      assert.match(image[1], /^https:\/\//);
      assert.match(slide, /alt="[^"]+"/);
      assert.match(slide, /loading="lazy"/);
      const caption = slide.match(
        /<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/,
      );
      assert.ok(caption, "non-placeholder images must have a caption");
      assert.ok(
        caption[1].includes(`href="${image[1]}"`),
        "image captions must link to the embedded image source",
      );

      const links = [...slide.matchAll(/<a\b[^>]*>/gs)];
      assert.ok(links.length >= 1);
      for (const [link] of links) {
        assert.match(link, /href="https:\/\//);
        assert.match(link, /target="_blank"/);
        assert.match(link, /rel="noopener noreferrer"/);
      }
    }
  }
});

test("the three AI instruction files stay identical", async () => {
  const files = [
    path.join(root, "AGENTS.md"),
    path.join(root, "CLAUDE.md"),
    path.join(root, ".github", "copilot-instructions.md"),
  ];
  const instructions = await Promise.all(
    files.map((file) => readFile(file, "utf8")),
  );
  assert.ok(instructions.every((text) => text === instructions[0]));
});
