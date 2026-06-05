'use client';
import { Icon } from '@/components/ui/Icon';

export function EmailForm({ label, placeholder = 'your@email.com' }: { label?: string; placeholder?: string }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display:'flex', maxWidth:520, alignItems:'stretch', background:'rgba(0,0,0,.18)', borderRadius:99, padding:6, border:'1px solid rgba(255,255,255,.2)' }}
    >
      <span style={{ display:'grid', placeItems:'center', padding:'0 14px', color:'rgba(255,255,255,.65)' }}>
        <Icon.mail />
      </span>
      <input
        type="email"
        placeholder={placeholder}
        aria-label={label ?? 'Email address'}
        style={{ flex:1, background:'transparent', border:'none', outline:'none', color:'#fff', fontSize:15, fontFamily:'inherit', fontWeight:500 }}
      />
      <button
        type="submit"
        style={{ background:'var(--p-ink)', color:'var(--p-cream)', border:'none', padding:'14px 22px', borderRadius:99, fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'inherit', display:'inline-flex', alignItems:'center', gap:8 }}
      >
        Send the series <Icon.arrow />
      </button>
    </form>
  );
}
