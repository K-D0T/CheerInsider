#!/usr/bin/env node
// Generates a CheerInsider article as JSON in content/articles/ using the
// Claude API. Used by the scheduled GitHub Action and runnable locally:
//
//   ANTHROPIC_API_KEY=sk-... node scripts/generate-article.mjs \
//     --topic "NCA All-Star Nationals 2026 results" \
//     --section parents \
//     [--notes path/to/scraped-notes.txt]
//
// The article appears on the site automatically after the JSON is committed:
// dynamic routes, section indexes, and the sitemap all read content/articles/.

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, arg, i, arr) => {
    if (arg.startsWith('--')) acc.push([arg.slice(2), arr[i + 1] ?? '']);
    return acc;
  }, []),
);

const topic = args.topic;
const section = args.section === 'gear' ? 'gear' : 'parents';
const notes = args.notes ? fs.readFileSync(args.notes, 'utf8') : '';

if (!topic) {
  console.error('Usage: node scripts/generate-article.mjs --topic "..." [--section parents|gear] [--notes file]');
  process.exit(1);
}

const GRADIENTS = ['flash', 'halo', 'stripes', 'field', 'glow', 'pulse', 'burst', 'block'];

// Schema for structured output. Generated articles use the "feature" template
// with text-oriented blocks; interactive block types (glance/review/specs)
// stay hand-authored.
const ARTICLE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['slug', 'title', 'description', 'eyebrow', 'headline', 'sub', 'readTime', 'tags', 'gradient', 'blocks'],
  properties: {
    slug: { type: 'string', description: 'URL slug, lowercase kebab-case, 3-6 words' },
    title: { type: 'string', description: 'SEO title, under 60 characters' },
    description: { type: 'string', description: 'Meta description, 120-155 characters' },
    ogDescription: { type: 'string', description: 'Social share description, punchier than the meta description' },
    eyebrow: { type: 'string', description: 'Uppercase category kicker like "COMPETITION · NCA 2026"' },
    headline: { type: 'string', description: 'Display headline. Wrap the 2-4 most emotionally loaded words in single asterisks for the accent style.' },
    sub: { type: 'string', description: 'Standfirst paragraph, 1-3 sentences' },
    readTime: { type: 'string', description: 'Like "7 min"' },
    tags: { type: 'array', items: { type: 'string' } },
    gradient: { type: 'string', enum: GRADIENTS },
    blocks: {
      type: 'array',
      description: 'Article body. Inline markers: **bold**, *emphasis*.',
      items: {
        anyOf: [
          {
            type: 'object',
            additionalProperties: false,
            required: ['type', 'text'],
            properties: {
              type: { const: 'p' },
              text: { type: 'string' },
              dropcap: { type: 'boolean', description: 'true on the first paragraph only' },
              serif: { type: 'boolean', description: 'true for an italic serif closing line' },
            },
          },
          {
            type: 'object',
            additionalProperties: false,
            required: ['type', 'text'],
            properties: { type: { const: 'h2' }, text: { type: 'string' } },
          },
          {
            type: 'object',
            additionalProperties: false,
            required: ['type', 'text'],
            properties: { type: { const: 'h3' }, text: { type: 'string' } },
          },
          {
            type: 'object',
            additionalProperties: false,
            required: ['type', 'text'],
            properties: {
              type: { const: 'quote' },
              text: { type: 'string' },
              variant: { type: 'string', enum: ['border', 'bleed'] },
            },
          },
          {
            type: 'object',
            additionalProperties: false,
            required: ['type', 'items'],
            properties: {
              type: { const: 'list' },
              ordered: { type: 'boolean' },
              items: { type: 'array', items: { type: 'string' } },
            },
          },
          {
            type: 'object',
            additionalProperties: false,
            required: ['type', 'head', 'rows'],
            properties: {
              type: { const: 'table' },
              head: { type: 'array', items: { type: 'string' } },
              rows: { type: 'array', items: { type: 'array', items: { type: 'string' } } },
              foot: { type: 'array', items: { type: 'string' } },
            },
          },
        ],
      },
    },
  },
};

const SYSTEM_PROMPT = `You are Lauren K., the voice of CheerInsider — a former CCA-certified coach,
former Level 6 athlete, and current cheer mom of two (Level 2 and Level 4) based in Tampa, FL.
You write honest, independent editorial about competitive all-star cheerleading for an audience
of cheer parents. Your voice is direct, warm, occasionally wry, and always on the side of the
parent writing the checks. You never use federation talking points or gym marketing language.

House style:
- Concrete numbers over vague claims. Real dollar figures, real hours, real percentages.
- Short paragraphs. Bold the key takeaway phrases with **double asterisks**.
- One pull quote per article (type "quote") with the sharpest line.
- Tables for any cost or comparison data.
- A closing italic serif line (type "p" with "serif": true) that lands the emotional point.
- The first paragraph uses "dropcap": true.
- Never fabricate specific named people, gyms, or events not present in the source notes;
  generalize instead ("one Florida gym owner told me...").`;

const client = new Anthropic();

const userPrompt = `Write a CheerInsider article on this topic: ${topic}

${notes ? `Source notes from our scraper (use these facts; do not invent specifics beyond them):\n\n${notes}` : 'No scraped notes provided — write from general knowledge of the all-star cheer world, keeping all specifics generic.'}

Section: ${section}`;

const stream = client.messages.stream({
  model: 'claude-opus-4-8',
  max_tokens: 32000,
  thinking: { type: 'adaptive' },
  system: SYSTEM_PROMPT,
  messages: [{ role: 'user', content: userPrompt }],
  output_config: { format: { type: 'json_schema', schema: ARTICLE_SCHEMA } },
});

const message = await stream.finalMessage();
const textBlock = message.content.find((b) => b.type === 'text');
if (!textBlock) {
  console.error('No text content in response', JSON.stringify(message.content));
  process.exit(1);
}

const generated = JSON.parse(textBlock.text);

const today = new Date().toISOString().slice(0, 10);
const article = {
  ...generated,
  section,
  kind: 'feature',
  pill: `★ ${generated.eyebrow}`,
  datePublished: today,
  heroCaption: `cover · ${generated.slug.replace(/-/g, ' ')}`,
  card: { eyebrow: generated.eyebrow },
};

const outDir = path.join(process.cwd(), 'content', 'articles');
const outPath = path.join(outDir, `${article.slug}.json`);
if (fs.existsSync(outPath)) {
  console.error(`Refusing to overwrite existing article: ${outPath}`);
  process.exit(1);
}
fs.writeFileSync(outPath, JSON.stringify(article, null, 2) + '\n');
console.log(`Wrote ${outPath}`);
console.log(`Live at: /${section}/${article.slug} after deploy`);
