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
  assert.match(homepage, /<html lang="de">/);
  assert.match(homepage, /editions\/2026-10-29\/index\.html/);
  assert.match(homepage, /https:\/\/github\.com\/7amdmad\/seo-geo-radar/);
  assert.match(homepage, /class="edition-grid"/);
  assert.match(homepage, /class="edition-card__period"/);
  assert.match(homepage, /class="edition-card__count">10 Highlights/);
});

test("the October sample edition contains ten sourced slides", async () => {
  assert.deepEqual(editionFolders, ["2026-10-29"]);

  for (const folder of editionFolders) {
    assert.match(folder, /^\d{4}-\d{2}-\d{2}$/);
    const html = await readFile(
      path.join(editionsPath, folder, "index.html"),
      "utf8",
    );
    const slides = [
      ...html.matchAll(/<section\b(?=[^>]*\bclass="slide")[^>]*>[\s\S]*?<\/section>/g),
    ].map(([slide]) => slide);

    assert.equal(slides.length, 10);
    assert.match(html, /<html lang="de">/);
    assert.match(html, /src="\.\.\/\.\.\/src\/deck\.js"/);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id);
    assert.equal(new Set(ids).size, ids.length, "edition HTML IDs must be unique");

    for (const slide of slides) {
      assert.match(slide, /<h2 class="slide__title"/);
      assert.match(slide, /class="slide__body"/);
      assert.match(slide, /class="slide__sources"/);
      assert.match(slide, /role="img"/);
      assert.match(slide, /aria-label="[^"]+"/);
      assert.match(slide, /class="image-placeholder"/);

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
