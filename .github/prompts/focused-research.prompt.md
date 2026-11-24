---
name: focused-research
description: "Research selected AI visibility topics for an SEO/GEO Radar edition."
argument-hint: "Optional changes to topics, sources, watched URLs, or dates for this run"
agent: agent
---

# Focused AI Visibility Research Brief

Use this reusable brief to research a focused SEO/GEO Radar edition. Follow the project's [editorial and engineering rules](../../AGENTS.md). Do not start research merely because this file is opened or edited; run it only when requested. This prompt is separate from the general `/new-deck` prompt.

## Team Settings: Edit Before Running

- Topics: Reddit and YouTube as sources of visibility in AI-generated answers. Add other topics, such as Trustpilot, only when requested; exclude unrelated SEO/GEO news.
- Questions: What new findings, studies, platform announcements or expert analyses explain citations, mentions or retrieval of these platforms by AI search systems? How do findings vary by system and what do they mean for brands and DACH marketers?
- Source mode: PREFER. Search Wingmen, SEOFOMO, Website Boosting and 121WATT first, but also use other relevant, verifiable sources, especially original research and platform announcements. Do not invent source URLs or bypass paywalls.
- Watchlist leads to revisit during each run: https://www.airanklab.com/de/blog/reddit-ai-search-visibility. Treat each URL as a lead, not a required story. Check for substantive updates and their dates where evidence is available; do not claim a change without evidence. This prompt does not monitor pages between runs.
- Research languages: German and English. Output language: German.
- Audience: Marketing professionals in Austria, Germany and Switzerland (DACH).
- Timezone: Europe/Vienna. Cutoff and reporting end: AUTO = yesterday in that timezone. Reporting start: AUTO = 13 calendar days before the end. Intended edition date: AUTO = today in that timezone.
- Target number of slides: 10. The existing edition format requires exactly 10; ask for explicit approval of any format change.
- Extra team requirements: None. Add per-run requirements here.

Replace AUTO with YYYY-MM-DD to choose exact dates. The default window is 14 complete calendar days inclusive. Allow explicit per-run settings, report them, and reject future reporting dates, a start after the end, an end after the cutoff, or an edition date before the reporting end.

## Research Task

1. Resolve and show the actual dates, timezone, topics, source mode, preferred sources and slide target. Ask only if a required setting is ambiguous or invalid.
2. Use current web research. If browsing is unavailable, state that research cannot be verified and stop. Never invent sources, dates, findings, metrics or images.
3. Search each configured topic in German and English. Prioritize events, publications and substantive updates within the reporting window. When recent evidence is limited, also propose important older findings as dated background; do not portray them as news. All evidence must have been available by the cutoff.
4. Open and read each source; search snippets are leads only. Verify publication and event or substantive update dates where possible, and distinguish them. Flag uncertain dates. Revisit watchlist leads; an updated date alone does not establish a meaningful change. Without an accessible earlier version or other evidence, do not assert what changed or when. Watchlist pages that are older and unchanged may serve as labeled background.
5. Tie each proposed claim to an accessible source and prefer primary evidence. Preserve study population, geography, timeframe, engine, measurement and material limitations. Label vendor research, expert opinion, preprints, forecasts and unconfirmed details; distinguish DACH from other markets. Do not infer use in AI answers from model training or licensing alone.
6. Deduplicate overlapping findings. Rank by relevance and evidence, not equal quotas or publisher popularity. Gather up to five more candidates than the slide target if enough strong findings exist. If there are fewer, report the gap; do not pad with weak findings or unrelated news.
7. For likely selections, identify one relevant image from the cited article, announcement or documentation page. Extract its actual direct URL and publisher-provided creator credit. Confirm it loads and record any stated license or restriction. Attribution does not establish reuse permission. Label generic documentation artwork; report missing or unsuitable images rather than inventing them.

## First Deliverable: Candidates for Team Review

Return the resolved brief followed by one ranked candidate list in German. Include recent and older findings together, but clearly label each as recent or older background. For each provide:

- Proposed headline and concise summary, with publication date and event or substantive update date, if verifiable.
- Practical relevance for the audience, DACH limitations, important uncertainties and a recommendation to include or exclude.
- Direct evidence links and the claims they support.
- Proposed direct image URL, page containing it, publisher/creator credit and any stated license or restriction; flag unverified or unavailable assets.

List searches and preferred sites checked, the watched-page result, important gaps and rejected leads with brief reasons. Do not claim the research is exhaustive. Stop for the team's selection and explicit approval before creating a deck. Keep unpublished research and reviewer comments in chat, not in this public repository. Do not edit the existing deck, homepage, styles or scripts during research.

## After Explicit Approval to Create the Deck

- Use only the approved selection. Follow the newest dated edition and preserve older editions and shared design. Each slide needs a German headline, two or three concise sentences, two to four highlighted phrases, evidence links and one credited source image, as specified by the project rules.
- Show the actual reporting period, cutoff, timezone and edition date; clearly distinguish older background from recent developments. Add the approved edition to the archive only when instructed to create it.
- Recheck every claim, source, image and credit. Run both HTML gates with djlint 1.46.1 (`python -m djlint index.html editions` and `python -m djlint --check index.html editions`) and content checks (`node --test`). Report constraints or missing assets rather than publishing placeholders.
- Report changed files, checks and unresolved issues. Approval to create files is not approval to commit or push.