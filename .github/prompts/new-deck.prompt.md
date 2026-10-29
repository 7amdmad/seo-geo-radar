---
name: new-deck
description: "Research a new SEO/GEO Radar deck using editable team topics, websites, and reporting dates."
argument-hint: "Optional changes to topics, websites, or dates for this run"
agent: agent
---

# New Deck Research Brief

Use this reusable brief to research the next SEO/GEO Radar slide deck. Read and follow the project's [editorial and engineering rules](../../AGENTS.md). Do not start research merely because this file is opened or edited; run it only when requested.

## Team Settings: Edit Before Running

### Topics and Questions

- Main topics: SEO, GEO, AI search, Google Search, AI Overviews, and related digital marketing developments.
- Specific questions or keywords: None. Add the team's questions or keywords here.
- Must-cover announcements or article URLs: None. Add any required leads here; verify them like all other sources.
- Exclude: Recycled news, unsupported predictions, and promotional claims without substantive evidence.

### Websites

- Source mode: PREFER
- Preferred or allowed websites:
  - developers.google.com/search
  - blog.google
  - blogs.bing.com/webmaster
  - searchenginejournal.com
  - seroundtable.com
  - arxiv.org
  - sloanreview.mit.edu
  - semrush.com/blog
- Excluded websites: None.

PREFER means search these websites first, but use other relevant, verifiable sources when useful. ONLY means use only the listed domains and path prefixes as evidence for slide claims. Never silently broaden ONLY mode. If an excluded website overlaps the allowed list, ask the team to resolve the conflict. Article image CDNs may use different hosts; they are not additional claim sources.

### Dates and Audience

- Timezone: Europe/Vienna
- Research cutoff date: AUTO = yesterday in the selected timezone.
- Reporting end date: AUTO = the research cutoff date.
- Reporting start date: AUTO = 13 calendar days before the reporting end date.
- Intended edition date: AUTO = today in the selected timezone.
- Audience: Marketing professionals in Austria, Germany, and Switzerland (DACH).
- Output language: German.
- Target number of slides: 10. The current deck format and checks require exactly 10; ask for an explicit format change if the team requests a different count.
- Extra team requirements: None. Add any requirements specific to this run here.

Replace AUTO with YYYY-MM-DD to choose exact dates. The default window contains 14 complete calendar days, inclusive; do not replace it with a calendar month. An explicitly configured longer or shorter period is allowed, but must be stated accurately.

## Research Task

1. Apply any explicit per-run changes supplied by the requester and report them. If a change conflicts with the project rules, ask for clarification instead of silently overriding them.
2. Resolve and show the actual dates, timezone, topics, source mode, website list, and target slide count before research. Ask only if a required setting is ambiguous or invalid. Reject future reporting dates, a start after the end, an end after the cutoff, or an edition date before the reporting end. AUTO values and fields marked None are intentional defaults, not missing information.
3. Use current web research. If browsing is unavailable, state that the research cannot be verified and stop; do not invent current news, citations, article URLs, dates, metrics, or image URLs.
4. Search the configured topics, questions, and websites within the resolved reporting window. Treat required URLs as leads, not as verified facts. Gather up to five more candidates than the target slide count where enough strong stories exist.
5. Open and read each source. Prefer original announcements, documentation, and research. Search snippets and aggregators are leads, not final evidence. Do not bypass paywalls or access restrictions; find accessible evidence or disclose the limitation.
6. Verify every candidate's event or substantive update date and publication date. Keep the event or update inside the reporting window and the evidence available by the cutoff. Older background material can support context but must not be presented as a new development.
7. Tie each proposed claim to an accessible source. Preserve study population, geography, timeframe, and other material limitations. Label preprints, forecasts, vendor research, and unconfirmed rollout details. Distinguish DACH evidence from US or global findings.
8. Deduplicate overlapping announcements. Prioritize practical relevance to the configured audience and questions, not publisher popularity. If fewer strong stories meet the criteria, return fewer and explain the gap. Do not pad the deck, widen dates, or relax ONLY mode without approval.
9. For likely selections, identify one relevant image from the cited article, announcement, or documentation page. Extract the actual direct image URL and the credit supplied by the publisher. Confirm it loads and record any stated license or restriction. Do not claim that a credit grants permission. Clearly label generic documentation artwork. Report missing or unsuitable images rather than inventing assets.

## First Deliverable: Candidates for Team Review

Return the resolved brief followed by a numbered candidate table containing:

- Proposed German headline and short summary.
- Event or update date and source publication date.
- Why it matters to the configured audience, including any DACH limitation.
- Direct evidence links and which claims they support.
- Proposed image URL, page containing it, publisher/creator credit, and stated license or restriction if any; flag anything not yet verified.
- Important caveats, uncertainties, and a recommendation to include or exclude.

Recommend a balanced selection up to the configured slide count. List the searched websites, important coverage gaps, and rejected leads with brief reasons. Do not claim the research is exhaustive or guaranteed to produce the same results on every run.

Stop here for the team's selection and approval. Keep the candidate draft in chat; do not save unpublished editorial drafts, private reviewer comments, or sensitive information in this public repository. Do not edit the existing deck, homepage, styles, or scripts during research.

## After Explicit Approval to Create the Deck

- Use only the approved selection. Write each slide in the configured language with one headline, two or three concise sentences, two to four highlighted phrases, evidence links, and one credited source image.
- Follow the existing dated-edition structure and newest deck template. Preserve older editions and the shared design and navigation; do not redesign the website as part of research.
- Show the actual reporting period, cutoff, timezone, and edition date. Add the approved edition to the archive only when instructed to create it.
- Recheck every slide claim against its linked evidence after writing. Verify images, credits, and source links, then run the repository checks. If existing tests assume only the sample edition, report that constraint and update the applicable assertions without dropping coverage of that edition.
- Run both HTML gates with djlint 1.46.1 (`python -m djlint index.html editions` and `python -m djlint --check index.html editions`) and the content checks (`node --test`).
- Report the files changed, checks performed, and any unresolved issues. Approval to create files is not approval to commit or push. An explicitly approved push to main automatically runs checks and deploys if they pass; do not promise a separate manual deployment step.
