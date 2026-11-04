'use client';
import { useState } from 'react';

const ITEMS = [
  'THE $24,000 CHEER SEASON · EVERY DOLLAR TRACKED',
  'SHOULD YOU SWITCH GYMS THIS SUMMER?',
  'NEW USASF RULES · WHAT CHANGES FOR 2026–27',
  'CAMP SEASON OPENS · WHAT\'S WORTH THE MONEY',
  'THE WORLDS BID MAP IS SHIFTING',
  'CHEER SCHOLARSHIP MONEY · WHERE IT ACTUALLY IS',
  'INDEPENDENT · NEVER SPONSORED',
];

// WCAG 2.2.2 (Pause, Stop, Hide): motion that starts on its own and runs for
// more than five seconds needs a control to stop it. The scrolling track is
// aria-hidden and the items are exposed once, as a plain list, so screen
// readers don't read the tripled copy three times over. A reduced-motion
// preference stops the animation in CSS (.ci-marquee-track).
export function Marquee() {
  const [paused, setPaused] = useState(false);
  const tripled = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div style={{ background:'var(--p-hotDeep)', color:'#fff', borderTop:'1px solid var(--p-ink)', borderBottom:'1px solid var(--p-ink)', position:'relative' }}>
      <h2 className="ci-sr-only">Latest coverage</h2>
      <ul className="ci-sr-only">
        {ITEMS.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <div style={{ overflow:'hidden', padding:'14px 0' }}>
        <div
          aria-hidden
          className="ci-marquee-track"
          style={{ display:'flex', gap:48, animation:'marquee 38s linear infinite', animationPlayState: paused ? 'paused' : 'running', whiteSpace:'nowrap', fontFamily:'var(--p-display)', fontWeight:700, fontSize:18, letterSpacing:'-.01em', textTransform:'uppercase', paddingRight:56 }}
        >
          {tripled.map((item, i) => (
            <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:48 }}>
              {item}
              <span style={{ fontFamily:'var(--p-serif)', fontStyle:'italic', opacity:.75, textTransform:'none', fontWeight:400, fontSize:24 }}>★</span>
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="ci-marquee-toggle"
        style={{ position:'absolute', top:'50%', right:12, transform:'translateY(-50%)', width:30, height:30, display:'grid', placeItems:'center', background:'var(--p-ink)', color:'#fff', border:'1px solid rgba(255,255,255,.35)', borderRadius:99, cursor:'pointer', padding:0, lineHeight:0 }}
      >
        <span className="ci-sr-only">{paused ? 'Resume scrolling headlines' : 'Pause scrolling headlines'}</span>
        {paused ? (
          <svg viewBox="0 0 16 16" width={11} height={11} aria-hidden focusable="false"><path d="M4 2l10 6-10 6z" fill="currentColor"/></svg>
        ) : (
          <svg viewBox="0 0 16 16" width={11} height={11} aria-hidden focusable="false"><path d="M4 2h3v12H4zM9 2h3v12H9z" fill="currentColor"/></svg>
        )}
      </button>
    </div>
  );
}
