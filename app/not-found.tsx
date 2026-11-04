import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { P } from '@/lib/palette';

// No metadata export here on purpose: Next.js serves this route with a 404
// status, which is what keeps it out of the index. A title would only show in
// the tab.

const body = { fontSize: 17, lineHeight: 1.6, color: 'var(--p-inkSoft)', margin: '0 0 16px', maxWidth: 620 } as const;
const groupHead = { fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 15, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--p-muted)', margin: '0 0 14px' } as const;

// Where someone who hit a dead URL most likely wanted to go. A 404 with no
// way out is a page people leave the site from.
const DESTINATIONS: { head: string; links: [label: string, href: string][] }[] = [
  {
    head: 'Start here',
    links: [
      ['Parent resources', '/parents'],
      ['Educational guides', '/guides'],
      ['Gear reviews', '/gear'],
    ],
  },
  {
    head: 'Most read',
    links: [
      ['What a season actually costs', '/parents/the-24k-season'],
      ['The level system, explained', '/guides/level-system-explained'],
      ['Cheer glossary', '/guides/cheer-glossary'],
    ],
  },
  {
    head: 'Tools',
    links: [
      ['Cost calculator', '/cost-calculator'],
      ['Gym selection guide', '/gym-guide'],
    ],
  },
];

export default function NotFound() {
  return (
    <section style={{ padding: '72px 0 112px' }}>
      <Container max={900}>
        <p style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(72px,10vw,140px)', lineHeight: .9, letterSpacing: '-.04em', color: 'var(--p-hot)', margin: '0 0 8px' }}>
          404
        </p>
        <h1 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(36px,4.6vw,64px)', margin: '0 0 20px', letterSpacing: '-.03em', lineHeight: 1 }}>
          That page isn&rsquo;t <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hotDeep)', fontWeight: 400 }}>here</span>.
        </h1>
        <p style={body}>
          The link may be broken, or the article may have moved. Nothing is lost &mdash; here is
          everything worth reading instead.
        </p>

        <div
          className="ci-stack-mobile"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--p-line)' }}
        >
          {DESTINATIONS.map((group) => (
            <div key={group.head}>
              <h2 style={groupHead}>{group.head}</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} style={{ fontSize: 16, lineHeight: 1.4, color: 'var(--p-ink)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ ...body, marginTop: 44, fontSize: 15, color: 'var(--p-muted)' }}>
          Think something should be at this URL?{' '}
          <Link href="/contact" style={{ color: 'inherit', textDecoration: 'underline' }}>Tell us</Link>{' '}
          and we&rsquo;ll fix the link.
        </p>
      </Container>
    </section>
  );
}
