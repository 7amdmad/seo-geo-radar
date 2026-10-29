# SEO/GEO Radar – Agent Instructions

## Project shape

- Public-facing, German-language static publication. No build step, package manager, database, or runtime service.
- `index.html` is the homepage and archive; `editions/YYYY-MM-DD/index.html` is one published edition.
- `src/styles.css` and `src/deck.js` are shared by all edition pages.
- Add each edition in a new dated folder. Never overwrite an older edition.
- Drafts and private reviewer data do not belong in this public repository.

## Editorial rules

- Verify each factual claim against a source linked from the same story.
- Prefer original announcements and documentation; use reputable reporting when primary evidence is unavailable or incomplete.
- Record publication dates and limitations in the slide content. Do not invent dates, metrics, capabilities, URLs, or implications.
- Write clear German for marketing professionals. Keep recommendations practical and proportionate.
- Use exactly ten slides per edition, each with a headline, two to three summary sentences, and two to four highlighted phrases.
- Match Niksa's article-image workflow: each slide has one externally hosted image harvested from its cited article, announcement, or documentation page. Never invent image URLs.
- Use the direct image URL, descriptive `alt`, and `loading="lazy"`. The visible figure caption links to the image file, names the host and credited creator, and separately links to the page containing it. Verify both URLs and inspect the rendered image.
- Preserve documented credits and licenses. Attribution and hotlinking do not establish reuse permission; never invent permission or label an unlicensed image as CC BY. Respect explicit restrictions and removal requests.
- If a documentation page only provides generic social artwork, label it as general documentation artwork. If no suitable image loads, report the gap instead of silently publishing a placeholder.
- Do not add Drei logos or fonts; public use was declined.

## Creating an edition

1. Research the explicitly requested reporting period and cutoff. Research is manual; no AI API or scheduled agent is connected.
2. Verify each claim using its linked source. Prefer primary sources and flag uncertainty.
3. Copy the newest edition folder to a new `editions/YYYY-MM-DD/` folder.
4. Update its date, reporting period, slides, source links, and credited article images.
5. Add the new edition link to the homepage archive and current-edition section.
6. Run `python -m djlint index.html editions`, `python -m djlint --check index.html editions`, and `node --test`. Use djlint 1.46.1. Manually compare every claim with its cited source.

## Engineering rules

- Use semantic HTML. Keep scripts and styles external; do not add inline handlers.
- Escape or carefully encode any untrusted text inserted into HTML attributes or markup.
- Preserve keyboard, direct-hash, touch, reduced-motion, and screen-reader slide navigation.
- Require one sourced image and visible image credits per slide; do not require a particular license for every publisher.
- Pushing to `main` automatically runs the shared checks workflow and deploys only if it succeeds. Do not commit or push without explicit approval; an approved push to `main` also authorizes that deployment.

Agent instructions are maintained as byte-identical copies in `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md`. Update all three together.
Do not add paid services, API credentials, or unpublished drafts to this public project.
