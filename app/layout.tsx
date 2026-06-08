import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { UtilityStrip } from '@/components/layout/UtilityStrip';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://cheer-insider.com'),
  title: { default: 'CheerInsider', template: '%s | CheerInsider' },
  description: 'Honest, independent coverage of competitive all-star cheerleading — real costs, gym guides, gear reviews, and competition coverage for parents, athletes, and coaches.',
  keywords: ['competitive cheerleading', 'all-star cheer', 'cheer costs', 'cheer mom guide', 'cheer gym', 'USASF', 'cheer gear'],
  authors: [{ name: 'Lauren K.', url: 'https://cheer-insider.com/about' }],
  creator: 'Lauren K.',
  publisher: 'CheerInsider',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'CheerInsider',
    locale: 'en_US',
    title: { default: 'CheerInsider', template: '%s | CheerInsider' },
    description: 'Honest, independent coverage of competitive all-star cheerleading — real costs, gym guides, gear reviews, and competition coverage.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CheerInsider',
    creator: '@CheerInsider',
  },
  other: {
    'google-adsense-account': 'ca-pub-2950751604262443',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UtilityStrip />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2950751604262443"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
