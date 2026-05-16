const ITEMS = [
  'WORLDS 2026 RESULTS ARE IN',
  'SHOULD YOU SWITCH GYMS THIS SUMMER?',
  'THE END-OF-SEASON TALK YOUR KID ACTUALLY NEEDS',
  'CAMP SEASON OPENS · WHAT\'S WORTH THE MONEY',
  'THE SUMMER PRIVATE LESSON TRAP',
  'BID SEASON RECAP · EVERY LEVEL 4–6 WINNER',
  '4 NEW GUIDES THIS MONTH',
];

export function Marquee() {
  const tripled = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div style={{ background:'var(--p-hot)', color:'#fff', overflow:'hidden', borderTop:'1px solid var(--p-ink)', borderBottom:'1px solid var(--p-ink)', padding:'14px 0' }}>
      <div style={{ display:'flex', gap:48, animation:'marquee 38s linear infinite', whiteSpace:'nowrap', fontFamily:'var(--p-display)', fontWeight:700, fontSize:18, letterSpacing:'-.01em', textTransform:'uppercase' }}>
        {tripled.map((item, i) => (
          <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:48 }}>
            {item}
            <span style={{ fontFamily:'var(--p-serif)', fontStyle:'italic', opacity:.75, textTransform:'none', fontWeight:400, fontSize:24 }}>★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
