import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { P } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CheerInsider collects, uses, and protects your information — including our use of cookies, analytics, and Google AdSense advertising.',
  robots: { index: true, follow: true },
};

const heading = { fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-.02em', margin: '40px 0 12px' } as const;
const body = { fontSize: 16, lineHeight: 1.65, color: 'var(--p-inkSoft)', margin: '0 0 16px', maxWidth: 760 } as const;

export default function PrivacyPage() {
  return (
    <section style={{ padding: '48px 0 96px' }}>
      <Container max={900}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: 'var(--p-muted)', marginBottom: 24 }}>
          <Link href="/">Home</Link><span>›</span><span style={{ color: 'var(--p-ink)' }}>Privacy Policy</span>
        </div>
        <h1 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(44px,5.6vw,80px)', margin: '0 0 8px', letterSpacing: '-.03em', lineHeight: .95 }}>
          Privacy <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>Policy</span>
        </h1>
        <p style={{ ...body, fontSize: 14, color: 'var(--p-muted)' }}>Last updated: July 15, 2026</p>

        <p style={body}>
          CheerInsider (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates cheer-insider.com. This page explains what
          information is collected when you visit the site, how it is used, and the choices you have.
        </p>

        <h2 style={heading}>Information we collect</h2>
        <p style={body}>
          We do not require you to create an account or submit personal information to read our content. Like most
          websites, our hosting and analytics providers automatically collect certain technical information when you
          visit, including your IP address, browser type, device type, pages visited, and referring URLs.
        </p>

        <h2 style={heading}>Analytics</h2>
        <p style={body}>
          We use Vercel Analytics to understand aggregate site traffic (which pages are visited and how often). This
          data is anonymized and does not identify individual visitors.
        </p>

        <h2 style={heading}>Advertising and cookies</h2>
        <p style={body}>
          We use Google AdSense to display advertising on this site. Google and its partners use cookies to serve ads
          based on your prior visits to this website and other websites. Google&rsquo;s use of advertising cookies enables
          it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet.
        </p>
        <p style={body}>
          You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Google Ads Settings</a>.
          You can also opt out of some third-party vendors&rsquo; use of cookies for personalized advertising at{' '}
          <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>www.aboutads.info</a>.
        </p>

        <h2 style={heading}>Affiliate links</h2>
        <p style={body}>
          Some articles contain affiliate links. If you purchase a product through one of these links, we may earn a
          small commission at no additional cost to you. Affiliate relationships never influence our editorial
          verdicts, and articles containing affiliate links include a disclosure.
        </p>

        <h2 style={heading}>Email</h2>
        <p style={body}>
          If you contact us by email, we use your address only to respond to your message. We do not sell, rent, or
          share your contact information with third parties.
        </p>

        <h2 style={heading}>Children&rsquo;s privacy</h2>
        <p style={body}>
          This site is written for parents and adults. We do not knowingly collect personal information from children
          under 13. If you believe a child has provided us personal information, contact us and we will delete it.
        </p>

        <h2 style={heading}>Changes to this policy</h2>
        <p style={body}>
          We may update this policy from time to time. Changes will be posted on this page with an updated date.
        </p>

        <h2 style={heading}>Contact</h2>
        <p style={body}>
          Questions about this policy: <a href="mailto:lauren@cheer-insider.com" style={{ textDecoration: 'underline' }}>lauren@cheer-insider.com</a>
        </p>
      </Container>
    </section>
  );
}
