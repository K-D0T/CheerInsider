import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/siteInfo';
import { P, tx } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to reach CheerInsider — corrections, factual disputes, privacy requests, press and advertising enquiries. One monitored email address, no contact form.',
  robots: { index: true, follow: true },
};

const heading = { fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-.02em', margin: '40px 0 12px' } as const;
const body = { fontSize: 16, lineHeight: 1.65, color: 'var(--p-inkSoft)', margin: '0 0 16px', maxWidth: 760 } as const;
const list = { ...body, paddingLeft: 22 } as const;

const REASONS = [
  {
    h: 'A correction',
    subject: 'Correction',
    body: 'A fee that is out of date, a rule we read wrong, a product detail that changed, a broken number. Tell us which article and what is wrong — these go to the front of the queue and get a dated note on the article.',
  },
  {
    h: 'Privacy or your data',
    subject: 'Privacy request',
    body: 'Ask us to delete an email you sent, or ask what we hold. We run no reader database, so the answer is usually "only the message you sent us."',
  },
  {
    h: 'Press and advertising',
    subject: 'Press enquiry',
    body: 'Media enquiries, advertising questions, or anything about how the site operates. We do not accept sponsored posts or paid placement.',
  },
  {
    h: 'Something we got wrong about your gym',
    subject: 'Right of reply',
    body: 'If you run or coach at a gym and think our coverage is unfair or inaccurate, write in. We would rather be corrected than be wrong.',
  },
];

export default function ContactPage() {
  return (
    <section style={{ padding: '48px 0 96px' }}>
      <Container max={900}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: 'var(--p-muted)', marginBottom: 24 }}>
          <Link href="/">Home</Link><span>›</span><span style={{ color: 'var(--p-ink)' }}>Contact</span>
        </div>
        <h1 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(44px,5.6vw,80px)', margin: '0 0 8px', letterSpacing: '-.03em', lineHeight: .95 }}>
          Get in <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>touch</span>
        </h1>
        <p style={body}>
          One address, read by a person. There is deliberately no contact form here — we would rather not collect data
          we don&rsquo;t need.
        </p>

        <div className="ci-on-dark" style={{ margin: '32px 0 8px', padding: '28px 32px', background: 'var(--p-ink)', color: 'var(--p-cream)' }}>
          <div style={{ ...tx.eyebrow, color: 'var(--p-accent)', marginBottom: 12 }}>Email us</div>
          <a
            href={`mailto:${SITE.contactEmail}`}
            style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(24px,3.6vw,40px)', letterSpacing: '-.025em', color: 'var(--p-cream)', lineHeight: 1.1, wordBreak: 'break-word' }}
          >
            {SITE.contactEmail}
          </a>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(250,246,241,.72)', margin: '16px 0 0', maxWidth: 560 }}>
            We read everything that arrives. Corrections are answered first; general questions may take a while, and we
            can&rsquo;t always reply individually.
          </p>
        </div>

        <h2 style={heading}>What to write about</h2>
        <p style={body}>
          Putting one of these in the subject line helps it reach the right place faster — each heading is a link that
          fills it in for you.
        </p>
        {REASONS.map((r, i) => (
          <div
            key={r.h}
            style={{ padding: '22px 0', borderTop: '1px solid var(--p-line)', borderBottom: i === REASONS.length - 1 ? '1px solid var(--p-line)' : 'none' }}
          >
            <h3 style={{ fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 19, margin: '0 0 6px', letterSpacing: '-.01em' }}>
              <a
                href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent(r.subject)}`}
                style={{ color: 'var(--p-ink)', textDecoration: 'underline', textDecorationColor: 'var(--p-hot)', textUnderlineOffset: 3 }}
              >
                {r.h}
              </a>
            </h3>
            <p style={{ ...body, margin: 0 }}>{r.body}</p>
          </div>
        ))}

        <h2 style={heading}>What we can&rsquo;t help with</h2>
        <ul style={list}>
          <li>
            <strong>Which gym to join, or whether your kid should move levels.</strong> We don&rsquo;t know your
            athlete, your gym or your area, and we won&rsquo;t guess. The{' '}
            <a href="/gym-guide" style={{ textDecoration: 'underline' }}>gym selection checklist</a> is the honest
            version of our answer.
          </li>
          <li>
            <strong>What your season will cost.</strong> Use the{' '}
            <a href="/cost-calculator" style={{ textDecoration: 'underline' }}>cost calculator</a> for a planning
            estimate, then ask your gym for its written fee schedule. Our numbers are composites, not quotes.
          </li>
          <li>
            <strong>Disputes with a gym, a coach or a federation.</strong> We can&rsquo;t mediate, advocate or
            intervene, and we&rsquo;re not a governing body.
          </li>
          <li>
            <strong>Coaching, skill or medical questions.</strong> Those belong with your coaches and a qualified
            professional. See the <a href="/terms" style={{ textDecoration: 'underline' }}>terms</a>.
          </li>
        </ul>

        <h2 style={heading}>Before you write</h2>
        <p style={body}>
          A lot of questions are already answered: the <a href="/about" style={{ textDecoration: 'underline' }}>about page</a>{' '}
          covers what this site is and how it is written,{' '}
          <a href="/disclosures" style={{ textDecoration: 'underline' }}>disclosures</a> covers advertising, affiliate
          links, AI assistance and corrections, and{' '}
          <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy</a> covers data and ad cookies.
        </p>
        <p style={body}>
          Please don&rsquo;t email anything sensitive — email isn&rsquo;t secure, and we don&rsquo;t need your personal
          details to fix an article.
        </p>
      </Container>
    </section>
  );
}
