#!/usr/bin/env node
// Weekly news pipeline: Claude searches the live web for this week's
// all-star cheer news, picks the best story we haven't covered, and
// generates a new article in content/articles/.
//
//   ANTHROPIC_API_KEY=sk-... node scripts/weekly-news.mjs
//
// Run by .github/workflows/weekly-news.yml on a cron schedule.

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs';
import path from 'node:path';
import { generateArticle } from './generate-article.mjs';

const client = new Anthropic();

// Existing coverage, so the model picks a fresh story
const contentDir = path.join(process.cwd(), 'content', 'articles');
const existing = fs.readdirSync(contentDir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync(path.join(contentDir, f), 'utf8')))
  .map((a) => `- ${a.title} (/${a.section}/${a.slug})`)
  .join('\n');

const today = new Date().toISOString().slice(0, 10);

const RESEARCH_PROMPT = `Today is ${today}. You are the research desk for CheerInsider, an independent
editorial site covering competitive all-star cheerleading for parents.

Search the web for notable all-star cheer news from roughly the past 7-10 days:
competition results and bid announcements (NCA, UCA, Worlds, Summit, D2 Summit),
USASF/IASF rule or age-grid changes, gym ownership/coaching news, safety stories,
gear releases, and anything cheer parents are talking about. Run several searches
with different angles before deciding.

We have already covered these stories — do NOT pick any of them:
${existing}

Then choose the ONE story with the most value for cheer parents (costs, decisions
they need to make, things that affect their kids) and respond in EXACTLY this format:

TOPIC: <one-line article topic, framed for a parent audience>
SECTION: <parents or gear>
NOTES:
<8-20 bullet points of verified facts from your searches: dates, numbers, names of
events/organizations (not private individuals), what changed, why it matters to
parents. Include the source publication for each fact in parentheses. These notes
are the only specifics the writer is allowed to use.>`;

// Web search runs in a server-side loop; pause_turn means resume by re-sending.
let messages = [{ role: 'user', content: RESEARCH_PROMPT }];
let response;
for (let attempt = 0; attempt < 6; attempt++) {
  const stream = client.messages.stream({
    model: 'claude-opus-4-8',
    max_tokens: 16000,
    thinking: { type: 'adaptive' },
    tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: 10 }],
    messages,
  });
  response = await stream.finalMessage();
  if (response.stop_reason !== 'pause_turn') break;
  messages = [...messages, { role: 'assistant', content: response.content }];
}

const text = response.content
  .filter((b) => b.type === 'text')
  .map((b) => b.text)
  .join('\n');

const topicMatch = text.match(/^TOPIC:\s*(.+)$/m);
const sectionMatch = text.match(/^SECTION:\s*(parents|gear)\s*$/m);
const notesMatch = text.match(/NOTES:\s*\n([\s\S]+)$/m);

if (!topicMatch || !notesMatch) {
  console.error('Could not parse research output:\n', text.slice(0, 2000));
  process.exit(1);
}

const topic = topicMatch[1].trim();
const section = sectionMatch ? sectionMatch[1] : 'parents';
const notes = notesMatch[1].trim();

console.log(`Research complete.\nTopic: ${topic}\nSection: ${section}\nNotes: ${notes.split('\n').length} lines\n`);

await generateArticle({ topic, section, notes, uniqueSlug: true });
