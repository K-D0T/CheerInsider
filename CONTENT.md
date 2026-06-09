# Managing articles

All articles live as JSON files in `content/articles/`. The site reads them at
build time — each file automatically gets:

- its own page at `/{section}/{slug}` (e.g. `/parents/the-24k-season`)
- a card on the section index (`/parents` or `/gear`)
- a sitemap entry with the correct lastModified date
- full SEO metadata (title, meta description, OpenGraph, Twitter Card)
- JSON-LD structured data (Article + BreadcrumbList) for Google rich results
- AdSense placements (in-article ads after the intro and mid-article, plus a
  right-rail rectangle on feature articles)

## Editing an article

1. Open the JSON file in `content/articles/` (works directly in the GitHub web UI)
2. Edit the fields — body text lives in `blocks`
3. Commit to `main` → Vercel deploys automatically, usually within 2 minutes

When you edit an article, set `dateModified` to today's date (YYYY-MM-DD) so
search engines and the sitemap pick up the change.

## Adding an article by hand

Copy an existing file (e.g. `summer-vs-privates.json` for a standard article),
change the `slug` (must match the filename), and fill in the content. Required
fields: `slug`, `section` (`parents` | `gear`), `kind`, `title`, `description`,
`eyebrow`, `headline`, `sub`, `datePublished`, `readTime`, `tags`, `gradient`,
`blocks`, `card`.

### Inline text markers

- `**bold**` → bold
- `*emphasis*` → italic in body text; the pink serif accent in headlines/quotes

### Block types

| Type | Use for |
|---|---|
| `p` | Paragraph. `"dropcap": true` on the opener, `"serif": true` for an italic closing line |
| `h2` / `h3` | Section headings |
| `quote` | Pull quote. `"variant": "bleed"` for the full-width hot-pink version |
| `list` | Bullet list (`"ordered": true` for numbered) |
| `table` | `head` + `rows` (+ optional `foot` for a highlighted total row) |
| `numbered` | Listicle items (see `20-things.json`) |
| `responses` | Reader responses (see `team-mom-trap.json`) |
| `glance` / `review` / `specs` | Product roundup blocks (see `cheer-shoes-2026.json`) |
| `note` | Callout box (affiliate disclosure etc.) |
| `cta` | Full-width call-to-action banner |

### Article kinds

- `feature` — standard article with TOC (if `toc` present) + right rail with ad
- `opinion` — dark hero, centered narrow column (team-mom-trap style)
- `listicle` — supports `heroNumber` (the giant "20")
- `roundup` — product review layout

## Generating an article with AI

The repo has a GitHub Action that generates articles with Claude:

1. One-time setup: add an `ANTHROPIC_API_KEY` secret in
   GitHub → Settings → Secrets and variables → Actions
2. Go to Actions → "Generate article" → Run workflow
3. Enter a topic and section — the action generates the JSON in Lauren's
   voice, verifies the site builds, commits, and pushes
4. Vercel deploys it automatically

To run on a schedule (e.g. weekly from scraped cheer-world news), uncomment the
`schedule:` block in `.github/workflows/generate-article.yml` and add a scraper
step that writes source notes, passing them via `--notes`.

Locally:

```sh
ANTHROPIC_API_KEY=sk-... node scripts/generate-article.mjs \
  --topic "Worlds 2026 bid costs explained" --section parents
```
