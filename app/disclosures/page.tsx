import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/siteInfo';
import { P } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosures & Editorial Standards',
  description: 'How CheerInsider makes money, how its articles are written, what its cost figures represent, and how it handles corrections — advertising, affiliate links and AI assistance stated plainly.',
  robots: { index: true, follow: true },
};

const heading = { fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-.02em', margin: '40px 0 12px' } as const;
const sub = { fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 19, letterSpacing: '-.01em', margin: '28px 0 8px' } as const;
const body = { fontSize: 16, lineHeight: 1.65, color: 'var(--p-inkSoft)', margin: '0 0 16px', maxWidth: 760 } as const;
const list = { ...body, paddingLeft: 22 } as const;

export default function DisclosuresPage() {
  return (
    <section style={{ padding: '48px 0 96px' }}>
      <Container max={900}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: 'var(--p-muted)', marginBottom: 24 }}>
          <Link href="/">Home</Link><span>›</span><span style={{ color: 'var(--p-ink)' }}>Disclosures</span>
        </div>
        <h1 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(44px,5.6vw,80px)', margin: '0 0 8px', letterSpacing: '-.03em', lineHeight: .95 }}>
          Disclosures &amp; editorial <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>standards</span>
        </h1>
        <p style={{ ...body, fontSize: 14, color: 'var(--p-muted)' }}>Last updated: {SITE.effectiveDate}</p>

        <p style={body}>
          {SITE.name} is funded by display advertising. Articles are drafted with AI assistance and reviewed by an
          editor. Cost figures are illustrative composites built from prices reported across the cheer community — not
          surveys, not original data collection, and not any one family&rsquo;s invoices. We have never taken sponsored
          money, and no advertiser has any say in what we publish.
        </p>

        <h2 style={heading}>How we make money</h2>

        <h3 style={sub}>Display advertising</h3>
        <p style={body}>
          This site is funded by Google AdSense. Ad slots are labeled &ldquo;Advertisement.&rdquo; We don&rsquo;t pick
          the individual ads, we don&rsquo;t know who sees them, and we have no relationship with the companies
          advertising. An ad appearing next to an article is not an endorsement of the advertiser. Advertisers get no
          advance look at coverage and no editorial input. What advertising does with data is covered on our{' '}
          <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy page</a>.
        </p>

        <h3 style={sub}>Affiliate links</h3>
        <p style={body}>
          Some gear articles link to retailers so you can check current prices.{' '}
          <strong>As of the date above, none of those links is affiliate-tagged and we earn nothing when you use them.</strong>{' '}
          If that changes, two things will happen: the article carrying the links will say so at the top, and this page
          will be updated. We will never let a commission decide a verdict — if a product we&rsquo;d earn on is worse,
          we will say it is worse.
        </p>

        <h3 style={sub}>Sponsored content</h3>
        <p style={body}>
          We have never published sponsored content, paid placement, or a gift-in-exchange-for-coverage post. If we ever
          do, it will be labeled in the headline itself — not in a footnote — and it will still carry our honest
          assessment.
        </p>

        <h2 style={heading}>How articles are written</h2>
        <p style={body}>
          {SITE.name} articles are <strong>drafted with AI assistance and reviewed by an editor</strong> before
          publishing. They carry a <strong>{SITE.name} Editorial</strong> byline because no single named person writes
          them, and we would rather say that than invent an author.
        </p>
        <p style={body}>
          We don&rsquo;t attend competitions as credentialed press, conduct interviews, or run surveys. Where an article
          rests on a third-party source — a rule document, a court filing, a news report, a manufacturer&rsquo;s spec —
          we link to it so you can check it yourself.
        </p>

        <h2 style={heading}>What our numbers represent</h2>
        <p style={body}>
          Cost figures, season budgets, workload estimates and the{' '}
          <a href="/cost-calculator" style={{ textDecoration: 'underline' }}>cost calculator</a> are{' '}
          <strong>illustrative composites</strong>, assembled from price ranges and experiences reported widely across
          the cheer community. They are not:
        </p>
        <ul style={list}>
          <li>the result of a formal survey or any original data collection;</li>
          <li>a specific family&rsquo;s real invoices, even where an article uses a name for readability;</li>
          <li>a quote, an estimate for your gym, or a number to sign a contract against.</li>
        </ul>
        <p style={body}>
          Where an article is built on a composite scenario, it says so in the article itself, near the top, not only
          here. Treat every figure as a planning framework and a sanity check, then confirm against your own
          gym&rsquo;s written fee schedule.
        </p>

        <h2 style={heading}>Independence</h2>
        <p style={body}>
          We are not affiliated with, sponsored by, endorsed by or speaking for USASF, IASF, Varsity, NCA, UCA, any
          event producer, any gym or any brand. We don&rsquo;t accept payment to cover, recommend or rank a gym, brand
          or event, and we don&rsquo;t accept free product in exchange for a review. Trademarks belong to their owners;
          we use them to say what we are writing about.
        </p>

        <h2 style={heading}>Corrections</h2>
        <p style={body}>
          We correct errors and we don&rsquo;t hide them. When a correction is substantive — a wrong figure, a misread
          rule, a product detail that was never true — we add a dated correction note to the article and leave it there
          permanently rather than silently editing the text. Fixing a typo doesn&rsquo;t get a note.
        </p>
        <p style={body}>
          Found something wrong? Tell us and we will fix it:{' '}
          <a href={`mailto:${SITE.contactEmail}?subject=Correction`} style={{ textDecoration: 'underline' }}>{SITE.contactEmail}</a>.
          Corrections go to the front of the queue.
        </p>

        <h2 style={heading}>Our standing rules</h2>
        <ol style={list}>
          <li>Sponsored content is labeled in the headline. We have not taken sponsored money.</li>
          <li>No affiliate link can change a verdict.</li>
          <li>Composites are labeled as composites, in the article.</li>
          <li>Federation-adjacent claims link to the governing document. If we can&rsquo;t cite it, we don&rsquo;t print it.</li>
          <li>Corrections live forever, with a date.</li>
        </ol>

        <h2 style={heading}>Contact</h2>
        <p style={body}>
          Questions about any of this, including advertising and press enquiries:{' '}
          <a href={`mailto:${SITE.contactEmail}`} style={{ textDecoration: 'underline' }}>{SITE.contactEmail}</a>, or see
          the <a href="/contact" style={{ textDecoration: 'underline' }}>contact page</a>.
        </p>
      </Container>
    </section>
  );
}
