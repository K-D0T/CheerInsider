# CheerInsider — Monthly Content Update Guide

Hand this file to Claude and say:
**"Update CheerInsider for [Month Year]. Follow CONTENT_UPDATES.md."**

Claude should run `npm run build` after all edits and confirm it passes before finishing.

---

## What this site is

CheerInsider is an independent, editorially honest guide to competitive all-star cheerleading — written from the perspective of a former CCA-certified coach and cheer mom. The audience is **cheer moms** (and some dads), primarily parents of Level 2–5 athletes on all-star teams in the US.

**Voice:** Direct, specific, slightly opinionated. Never fluffy. Never federation-speak. Think "what I'd text a friend who just signed up for cheer." Dollar amounts, specific products, and named competitions are preferred over generalities.

**What we don't do:** Sponsored content, gym marketing, federation talking points. If a gear pick earns an affiliate commission, that's fine — but the verdict never changes because of it.

---

## Monthly update checklist

Work through these sections in order. Each has exact file paths and the format to paste in.

---

## 1. Utility strip — current event ticker

**File:** `components/layout/UtilityStrip.tsx`

The left side shows the current live competition event. Update it to whatever major competition is actually happening this month (NCA, D2 Summit, Worlds, regional bid events, etc.). If nothing major is live, use "Coverage · [most recent big event]".

**What to change:**
```tsx
// Line 9 — change the event name and city
Live · NCA Nationals · Dallas, TX
```

**Research:** Check the USASF competition calendar or NCA/UCA event listings for the current month's major event.

---

## 2. Marquee ticker — scrolling headlines

**File:** `components/layout/Marquee.tsx`

Replace the 7 scrolling items with current news/content headlines. These should feel like real cheer news, not marketing copy. Aim for a mix of: competition results, gear news, seasonal tips, and opinion hooks.

**The array to replace:**
```tsx
const ITEMS = [
  'BID SEASON IS HERE',
  'NEW · 2026 LEVEL CHANGES, EXPLAINED',
  '"YOU\'RE NOT CRAZY — IT IS THAT EXPENSIVE"',
  'GEAR ROUNDUP · BEST FLYER SHOES',
  'NCA DAYTONA COVERAGE',
  'WORLDS BID LIST UPDATED',
  '20 NEW GUIDES THIS MONTH',
];
```

**Rules:** ALL CAPS. Max ~50 characters per item. 7 items. Make at least 2 of them seasonal (e.g., "WORLDS PREP STARTS NOW" in March, "BID SEASON OPENS" in September).

---

## 3. Homepage hero — issue card

**File:** `components/home/Hero.tsx`

The card in the bottom-left of the hero image references the current "issue" and cover story. Update two things:

**Issue number** — increment by 1 each month (currently Issue 14).

**Cover story blurb** — 8–12 words, the most important/timely article this month.

```tsx
// Line 62-66 — update issue number and blurb
<div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:6 }}>Issue 14 · This Week</div>
<div style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:22, lineHeight:1.05 }}>
  The <span ...>$24,000</span> question every cheer mom asks
</div>
```

---

## 4. Homepage featured section — "The week in cheer"

**File:** `components/home/Featured.tsx`

This is the most visible content on the homepage. Update the cover story and the 3 right-rail items.

### Cover story (the big left article)

Update these two Link `href` values and the visible text:

```tsx
// Lines 22 & 27 — same href both times, the cover story URL
<Link href="/parents/the-24k-season" ...>

// Line 29 — cover story headline
We tracked every penny one Level 4 family spent in a single season.

// Line 32–33 — cover story deck (1–2 sentences)
Tuition. Travel. Choreography. Hair. The number is going to surprise you. Then it's going to make you mad.

// Line 36 — author line
<b>By Lauren K.</b> · former CCA coach, Level 5 cheer mom

// Line 37 — date and read time
18 min read · Updated Apr 12
```

### Right-rail items (3 articles)

Replace the `ITEMS` array. Each item needs: `eyebrow`, `title`, `meta`, `g` (gradient), and `href`.

```tsx
const ITEMS = [
  {
    eyebrow: 'GEAR · TESTED',
    title: 'The only 4 cheer shoes worth your money in 2026',
    meta: '12 min · Gear roundup',
    g: 'flash' as const,
    href: '/gear/cheer-shoes-2026'
  },
  {
    eyebrow: 'PARENT GUIDE',
    title: "How to tell if a gym is actually good (or just loud on Instagram)",
    meta: '9 min · Read along',
    g: 'halo' as const,
    href: '/gym-guide'
  },
  {
    eyebrow: 'INSIDER · HOT TAKE',
    title: '"No experience required" tryouts are almost always a trap',
    meta: '6 min · Opinion',
    g: 'stripes' as const,
    href: '/parents/team-mom-trap'
  },
];
```

**Eyebrow options:** `GEAR · TESTED`, `PARENT GUIDE`, `ATHLETE GUIDE`, `INSIDER · HOT TAKE`, `COST DEEP DIVE`, `GYM SELECTION`, `COMPETITION PREP`, `OPINION`

**Gradient options (`g` field):** `burst`, `flash`, `ribbon`, `halo`, `stripes`, `pulse`, `block`, `glow`, `field`
Pick whichever feels right visually — vary them so no two adjacent cards share the same gradient.

**`href` must be one of the actual routes that exist:**
- `/parents/the-24k-season`
- `/parents/team-mom-trap`
- `/parents/20-things`
- `/parents`
- `/gear/cheer-shoes-2026`
- `/cost-calculator`
- `/gym-guide`
- `/guides`
- `/about`

---

## 5. Homepage gear rail

**File:** `components/home/GearRail.tsx`

4 gear cards. Update monthly with current picks. The gear must be real, purchasable cheer gear (shoes, bows, bags, practice wear, makeup). Research current pricing before writing the price field.

```tsx
const GEAR = [
  {
    rank: 'Best overall',          // one of: 'Best overall', 'Best budget', 'Best for flyers', 'Best for bases', 'Most overrated', 'Best new', 'Best bag', 'Best bow brand', 'Best practice wear'
    name: 'Nfinity Vengeance',     // real product name
    price: '$110',                 // current retail price — research this
    stars: 5,                      // 1–5, honest rating
    blurb: 'Still the gold standard. Lightweight, locks the heel, holds up a full season.',  // 1–2 sentences, specific and honest
    g: 'halo' as const,           // gradient variant
  },
  // ... 3 more
];
```

**Research sources for gear:** Check Amazon, Nfinity.com, Chassé, Varsity Brands, All Star Cheer Shop, Dick's Sporting Goods. Look at what's selling and what cheer communities (Reddit r/cheerleading, CheerChat forums) are actually recommending this season.

---

## 6. Homepage testimonials

**File:** `components/home/Testimonials.tsx`

Update 1–2 testimonials per month. Keep at least one "Level 2 mom" (accessible/relatable), one "Level 4/5 mom" (experienced), and one coach or athlete voice. All testimonials are fictionalized composites — they represent real reader sentiment but are not direct quotes from named individuals.

```tsx
const TESTS = [
  {
    name: 'Megan T.',
    meta: 'Level 2 mom · Atlanta',
    quote: 'I read three articles before my daughter\'s tryout and saved myself $1,800 in "optional" fees. Only cheer site I trust.',
    stars: 5,
    g: 'halo' as const,
  },
  // ...
];
```

**Guideline for writing testimonials:** They should describe a specific outcome ("saved $X", "got us $X off", "forwarded to every mom"), not vague praise ("so helpful!"). Keep them sharp and believable.

---

## 7. Parents category page — article grid

**File:** `app/parents/page.tsx`

Update the `ITEMS` array (9 articles below the lead). These should reflect the most relevant articles for the current season/month. Use articles that exist as real pages (`href` must be a real route) or use `/parents` as a fallback `href` for articles not yet built.

```tsx
const ITEMS = [
  {
    eyebrow: 'GYM SELECTION',
    title: 'How to tell if a gym is actually good, or just loud on Instagram',
    meta: '9 min',
    g: 'flash' as const,
    href: '/gym-guide'
  },
  // ... 8 more
];
```

Also update `LEAD` — the big featured article at the top of the grid — to the month's most important parent resource piece.

---

## 8. Gear roundup page — picks and reviews

**File:** `app/gear/cheer-shoes-2026/page.tsx`

This page is dedicated to cheer shoes. Update prices and availability monthly — shoe prices shift seasonally. If a shoe goes out of stock or is discontinued, swap it out.

Update `AT_A_GLANCE` (6-card grid) and `REVIEWS` (3 deep reviews). The score (0–10), price, and blurb should reflect current testing/community consensus.

```tsx
const AT_A_GLANCE = [
  {
    rank: 'BEST OVERALL',
    name: 'Nfinity Vengeance',
    score: '9.4',
    price: '$110',      // verify current price
    verdict: 'Buy',     // 'Buy' or 'Skip'
    g: 'halo' as const,
  },
  // ...
];
```

**Research sources:** Check current prices on Amazon, Nfinity.com, AllstarGear.com. Cross-reference against what Level 3–5 cheer communities are saying this season.

---

## 9. Pillars — article counts

**File:** `components/home/Pillars.tsx`

Update the article count numbers to reflect the actual published count (or a credible running total). Increment these once a month to show growth.

```tsx
const PILLARS = [
  { num:'01', name:'Educational Guides', count: 42, ... },
  { num:'02', name:'Parent Resources',   count: 38, ... },
  { num:'03', name:'Athlete Technique',  count: 31, ... },
  { num:'04', name:'Gear Roundups',      count: 16, ... },
];
```

Increment each by 2–4 per month to reflect normal editorial output.

---

## 10. Hero stats bar

**File:** `components/home/Hero.tsx`

Update the 4 stats at the bottom of the hero. Increment gradually — these represent cumulative site growth.

```tsx
// Line 71 — the 4-stat bar
[['127','guides published'], ['18 yrs','on the mat'], ['4.9 ★','reader rating'], ['41K','on the email list']]
```

- **Guides published:** Increment by 4–8/month
- **Years on the mat:** Static (Lauren has been on the mat 18 years, this doesn't change)
- **Reader rating:** Keep at 4.9 unless there's a reason to change
- **Email list:** Increment by ~800–1,200/month (credible organic growth)

---

## How to add a new article page

If the content update includes a new article (not just updating existing data arrays), create a new page file:

**File location:** `app/[section]/[slug]/page.tsx`

**Where [section] is one of:** `parents`, `gear`, `guides`

**Minimum structure:**

```tsx
// app/parents/my-new-article/page.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { P, tx } from '@/lib/palette';

export const metadata = { title: 'Your Article Title Here' };

export default function MyNewArticle() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 64px', borderBottom:'1px solid var(--p-line)' }}>
        <Container max={1100}>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parent Resources</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Article Title</span>
          </div>
          <Pill style={{ marginBottom:24 }}>★ PARENT GUIDE</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(48px,6vw,92px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.95, maxWidth:1000 }}>
            Your headline here. Make it specific.
          </h1>
          <p style={{ fontSize:21, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 36px', maxWidth:780, fontWeight:500 }}>
            Deck copy — 1–2 sentences, specific, honest.
          </p>
        </Container>
      </section>

      {/* Body */}
      <section style={{ padding:'72px 0' }}>
        <Container max={780}>
          <article style={{ fontSize:17.5, lineHeight:1.7, color:'var(--p-ink)' }}>
            {/* Article content here */}
          </article>
        </Container>
      </section>
    </>
  );
}
```

After creating the page, add its `href` to the relevant category arrays so it appears in navigation.

---

## Seasonal content calendar

Use this as a starting point for what to write each month:

| Month | Season phase | Content focus |
|---|---|---|
| **August** | Tryout season | Tryout prep, what gyms look for, first-year costs |
| **September** | Team placements | Reading the placement email, what Level means, what to expect |
| **October** | Season kicks off | Practice schedule, uniform fitting, early competition travel |
| **November** | First comps | Score sheets explained, what to watch for, travel logistics |
| **December** | Mid-season | Tumbling privates pressure, holiday schedule, mental load |
| **January** | Bid season opens | How bids work, the USASF bid map, Worlds prep costs |
| **February** | Nationals push | NCA/D2 prep, choreography freezes, what "cleaning" means |
| **March** | Worlds prep | Worlds bid logistics, travel costs, what to expect |
| **April** | End of season | Banquets, team placement for next year, what to re-evaluate |
| **May** | Off-season starts | Camp season, recruiting, should we switch gyms |
| **June** | Camp season | Summer camps vs. privates, skill development, rest |
| **July** | Pre-season | Level changes, new USASF rules, gear for fall |

---

## 11. Industry monitoring — events, results, gear

Before each monthly update, check these three sources for anything newsworthy enough to surface in the marquee ticker, featured articles, or gear picks.

### Varsity Spirit / NCA / UCA
- **Site:** varsity.com and nca.varsity.com
- **What to check:** Competition results, new event announcements, level/scoring rule changes, camp schedule opens
- **Look for:** Any NCA/UCA Nationals results, new bid events, rule changes from USASF (which Varsity often announces first)
- **Gear:** Varsity Shop (shop.varsity.com) — check if any new Varsity-branded shoes or practice wear have launched

### floCheer
- **Site:** flo.com/cheer (or app)
- **What to check:** Live stream event coverage, Worlds coverage, post-event analysis, athlete profiles
- **Look for:** Any competition results that would be relevant for the marquee ("WORLDS 2026 RESULTS ARE IN"), athlete stories that support editorial angles
- **Note:** floCheer often has earlier competition results than press releases — check here first after major events

### USA Cheer / USASF
- **Site:** usacheer.net and usasf.net
- **What to check:** Official rule updates, safety certifications, level definitions, sanctioned event calendar
- **Look for:** Any scoring or level changes that would affect the "Levels & scoring" content in /guides, new USASF-sanctioned events, safety memo changes that affect gym practices
- **Timing:** USASF typically announces rule changes for the following season in May–June

### Monthly monitoring workflow

1. Check floCheer for any recent competition results → update marquee ticker if results are recent (< 3 weeks old)
2. Check Varsity/NCA for upcoming events → update UtilityStrip ticker to the next big event
3. Check USASF for rule changes → flag anything that affects /guides content or the levels explanation
4. Check all three for new gear releases → consider adding to the gear rail or cheer-shoes-2026 roundup

---

## Validation checklist before finishing

1. Run `npm run build` from `/home/kdot/projects/cheerinsider/` — must complete with no errors
2. Confirm all `href` values in updated arrays point to routes that exist
3. Verify gradient `g` values are one of: `burst`, `flash`, `ribbon`, `halo`, `stripes`, `pulse`, `block`, `glow`, `field`
4. Check that `stars` fields are integers between 1–5
5. Check that `verdict` fields are exactly `'Buy'` or `'Skip'` (exact strings, case-sensitive)
6. Gear prices should be formatted as `'$110'` (dollar sign, no decimals unless needed)

---

## Quick reference — file map

| What you're updating | File |
|---|---|
| Live event ticker (top bar) | `components/layout/UtilityStrip.tsx` |
| Scrolling headline marquee | `components/layout/Marquee.tsx` |
| Hero stats + issue card | `components/home/Hero.tsx` |
| Cover story + 3 featured articles | `components/home/Featured.tsx` |
| 4 gear picks | `components/home/GearRail.tsx` |
| 3 testimonial cards | `components/home/Testimonials.tsx` |
| Pillar article counts | `components/home/Pillars.tsx` |
| Parent category article grid | `app/parents/page.tsx` |
| Gear roundup picks + reviews | `app/gear/cheer-shoes-2026/page.tsx` |
| New article pages | `app/[section]/[slug]/page.tsx` |
