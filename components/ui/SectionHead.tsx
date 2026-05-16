import { ReactNode } from 'react';
import { Icon } from './Icon';
import { P, tx } from '@/lib/palette';

export function SectionHead({ eyebrow, title, right, rightHref }: {
  eyebrow: string; title: ReactNode; right?: string; rightHref?: string;
}) {
  return (
    <div className="ci-head-flex" style={{ borderBottom:`1px solid ${P.ink}`, paddingBottom:16 }}>
      <div>
        <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:14 }}>{eyebrow}</div>
        <h2 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:'clamp(36px, 4.4vw, 64px)', margin:0, lineHeight:.95, letterSpacing:'-.025em' }}>{title}</h2>
      </div>
      {right && rightHref && (
        <a href={rightHref} style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:13.5, fontWeight:700, paddingBottom:8, cursor:'pointer' }}>
          {right} <Icon.arrow/>
        </a>
      )}
      {right && !rightHref && (
        <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:13.5, fontWeight:700, paddingBottom:8, opacity:.5 }}>
          {right} <Icon.arrow/>
        </span>
      )}
    </div>
  );
}
