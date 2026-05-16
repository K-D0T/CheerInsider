'use client';
import { useEffect, CSSProperties } from 'react';

type AdFormat = 'leaderboard' | 'rectangle' | 'sidebar' | 'inline';

// Your AdSense publisher ID — replace ca-pub-XXXXXXXXXXXXXXXX with your actual ID
const PUBLISHER_ID = 'ca-pub-2950751604262443';

// Ad slot IDs — create one slot per format in your AdSense dashboard, paste the IDs here
const SLOTS: Record<AdFormat, string> = {
  leaderboard: '1386763118',   // 728×90 — Horizontal / Leaderboard
  rectangle:   '9073681441',   // 300×250 — Medium Rectangle
  sidebar:     'XXXXXXXXXX',   // 300×600 — Half Page
  inline:      '4215877522',   // Responsive — In-article
};

const ADSENSE_FORMATS: Record<AdFormat, string> = {
  leaderboard: 'horizontal',
  rectangle:   'rectangle',
  sidebar:     'vertical',
  inline:      'fluid',
};

declare global {
  interface Window { adsbygoogle: unknown[] }
}

export function AdUnit({ format = 'rectangle', label = true, style }: {
  format?: AdFormat;
  label?: boolean;
  style?: CSSProperties;
}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6, ...style }}>
      {label && (
        <span style={{ fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(15,14,19,.35)', fontFamily:'var(--p-body)', fontWeight:600, alignSelf:'flex-start' }}>
          Advertisement
        </span>
      )}
      <ins
        className="adsbygoogle"
        style={format === 'rectangle'
          ? { display:'inline-block', width:300, height:250 }
          : { display:'block', textAlign: format === 'inline' ? 'center' : undefined }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={SLOTS[format]}
        data-ad-layout={format === 'inline' ? 'in-article' : undefined}
        data-ad-format={ADSENSE_FORMATS[format]}
        data-full-width-responsive="true"
      />
    </div>
  );
}
