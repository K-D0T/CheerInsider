import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { UtilityStrip } from '@/components/layout/UtilityStrip';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Replace ca-pub-XXXXXXXXXXXXXXXX with your actual AdSense publisher ID
const ADSENSE_ID = 'ca-pub-XXXXXXXXXXXXXXXX';

export const metadata: Metadata = {
  title: { default: 'CheerInsider', template: '%s | CheerInsider' },
  description: 'Honest coverage of competitive cheerleading — for parents, athletes, and coaches.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <UtilityStrip />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
