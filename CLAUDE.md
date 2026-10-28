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
- Use one to ten highlights per edition, with two to four highlighted phrases per slide.
- Use CSS placeholders unless image reuse rights and required attribution are documented.
- Do not add Drei logos or fonts; public use was declined.

## Creating an edition

1. Research the explicitly requested reporting period and cutoff. Research is manual; no AI API or scheduled agent is connected.
2. Verify each claim using its linked source. Prefer primary sources and flag uncertainty.
3. Copy the newest edition folder to a new `editions/YYYY-MM-DD/` folder.
4. Update its date, reporting period, slides, source links, and image attribution or placeholder.
5. Add the new edition link to the homepage archive and current-edition section.
6. Run `node --test` and manually compare every claim with its cited source.

## Engineering rules

- Use semantic HTML. Keep scripts and styles external; do not add inline handlers.
- Escape or carefully encode any untrusted text inserted into HTML attributes or markup.
- Preserve keyboard, direct-hash, touch, reduced-motion, and screen-reader slide navigation.
- Keep image placeholders unless reuse rights and required attribution are documented.
- Keep the Pages workflow manual. Do not commit, push, or publish without explicit approval.

Agent instructions are maintained as byte-identical copies in `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md`. Update all three together.
Do not add paid services, API credentials, or unpublished drafts to this public project.
