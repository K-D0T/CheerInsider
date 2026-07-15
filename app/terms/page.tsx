import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { P } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that govern your use of cheer-insider.com, including content disclaimers, intellectual property, and limitation of liability.',
  robots: { index: true, follow: true },
};

const heading = { fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-.02em', margin: '40px 0 12px' } as const;
const body = { fontSize: 16, lineHeight: 1.65, color: 'var(--p-inkSoft)', margin: '0 0 16px', maxWidth: 760 } as const;

export default function TermsPage() {
  return (
    <section style={{ padding: '48px 0 96px' }}>
      <Container max={900}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: 'var(--p-muted)', marginBottom: 24 }}>
          <Link href="/">Home</Link><span>›</span><span style={{ color: 'var(--p-ink)' }}>Terms of Use</span>
        </div>
        <h1 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(44px,5.6vw,80px)', margin: '0 0 8px', letterSpacing: '-.03em', lineHeight: .95 }}>
          Terms of <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>Use</span>
        </h1>
        <p style={{ ...body, fontSize: 14, color: 'var(--p-muted)' }}>Last updated: July 15, 2026</p>

        <p style={body}>
          By accessing cheer-insider.com, you agree to these terms. If you do not agree, please do not use the site.
        </p>

        <h2 style={heading}>Editorial content</h2>
        <p style={body}>
          CheerInsider publishes independent editorial content about competitive all-star cheerleading. Articles are
          written with AI assistance under an editorial persona. Cost figures, scenarios, and examples are
          illustrative — based on patterns reported across the cheer community — and are not formal research,
          financial advice, or guarantees about what any specific gym charges. Always verify costs and policies
          directly with your gym.
        </p>

        <h2 style={heading}>Not professional advice</h2>
        <p style={body}>
          Nothing on this site constitutes financial, legal, medical, or coaching advice. Decisions about your
          athlete&rsquo;s training, safety, and finances should be made in consultation with qualified professionals and
          your own gym&rsquo;s certified staff.
        </p>

        <h2 style={heading}>Affiliate relationships</h2>
        <p style={body}>
          Some links on this site are affiliate links, meaning we may earn a commission if you make a purchase.
          Product verdicts are editorial opinions and are not influenced by affiliate relationships.
        </p>

        <h2 style={heading}>Intellectual property</h2>
        <p style={body}>
          The content on this site is owned by CheerInsider and may not be republished or redistributed without
          permission. You may share links to articles and quote brief excerpts with attribution.
        </p>

        <h2 style={heading}>Third-party trademarks</h2>
        <p style={body}>
          USASF, IASF, Varsity Spirit, NCA, UCA, and other organization names are trademarks of their respective
          owners. CheerInsider is independent and is not affiliated with, endorsed by, or sponsored by any cheerleading
          federation, event producer, or gym.
        </p>

        <h2 style={heading}>Limitation of liability</h2>
        <p style={body}>
          The site is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by law,
          CheerInsider is not liable for any damages arising from your use of the site or reliance on its content.
        </p>

        <h2 style={heading}>Contact</h2>
        <p style={body}>
          Questions about these terms: <a href="mailto:lauren@cheer-insider.com" style={{ textDecoration: 'underline' }}>lauren@cheer-insider.com</a>
        </p>
      </Container>
    </section>
  );
}
