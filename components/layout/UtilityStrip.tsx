import { P } from '@/lib/palette';

export function UtilityStrip() {
  return (
    <div style={{ background:P.ink, color:'rgba(255,255,255,.78)', fontSize:11.5, letterSpacing:'.04em', padding:'8px 0' }}>
      <div style={{ width:'min(1320px, 92%)', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24 }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:10 }}>
          <span style={{ display:'inline-block', width:7, height:7, borderRadius:99, background:'var(--p-hot)', boxShadow:'0 0 0 4px rgba(255,45,126,.18)' }}/>
          Coverage · The Cheerleading Worlds 2026 · Orlando Results
        </span>
        <span style={{ display:'flex', gap:18, opacity:.7 }}>
          <a>TikTok 184K</a><a>Pinterest 62K</a><a>Instagram 41K</a><a>YouTube 12K</a>
        </span>
      </div>
    </div>
  );
}
