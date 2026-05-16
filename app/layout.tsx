import type { Metadata } from 'next';
import './globals.css';
import { UtilityStrip } from '@/components/layout/UtilityStrip';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: { default: 'CheerInsider', template: '%s | CheerInsider' },
  description: 'Honest coverage of competitive cheerleading — for parents, athletes, and coaches.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2950751604262443"
          crossOrigin="anonymous"
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
