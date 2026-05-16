import { CSSProperties, ReactNode } from 'react';

type Variant = 'burst'|'flash'|'ribbon'|'halo'|'stripes'|'pulse'|'block'|'glow'|'field';

const arts: Record<Variant, { bg: string; layers: string[]; filter?: string; scale?: number }> = {
  burst:   { bg:'var(--p-ink)',   layers:['radial-gradient(ellipse 70% 80% at 50% 100%, var(--p-hot) 0%, transparent 65%)','radial-gradient(ellipse 50% 60% at 50% 80%, var(--p-accent) 0%, transparent 55%)','radial-gradient(ellipse 40% 50% at 50% 70%, rgba(255,255,255,.4) 0%, transparent 60%)'] },
  flash:   { bg:'var(--p-cream)', layers:['conic-gradient(from 200deg at 40% 60%, var(--p-hot) 0deg, var(--p-accent) 90deg, var(--p-hot) 180deg, var(--p-ink) 270deg, var(--p-hot) 360deg)'], filter:'blur(40px) saturate(1.1)', scale:1.4 },
  ribbon:  { bg:'var(--p-hot)',   layers:['linear-gradient(180deg, var(--p-hot) 0%, var(--p-hot) 30%, var(--p-accent) 30%, var(--p-accent) 55%, var(--p-cream) 55%, var(--p-cream) 70%, var(--p-ink) 70%)'] },
  halo:    { bg:'var(--p-cream)', layers:['radial-gradient(circle at 30% 30%, var(--p-hot) 0%, transparent 45%)','radial-gradient(circle at 75% 75%, var(--p-accent) 0%, transparent 50%)','radial-gradient(circle at 50% 50%, rgba(255,255,255,.3) 0%, transparent 70%)'], filter:'blur(8px) saturate(1.05)', scale:1.1 },
  stripes: { bg:'var(--p-cream)', layers:['repeating-linear-gradient(115deg, var(--p-hot) 0 22px, var(--p-accent) 22px 44px, var(--p-cream) 44px 80px, var(--p-ink) 80px 96px)'] },
  pulse:   { bg:'var(--p-ink)',   layers:['radial-gradient(circle at 50% 50%, var(--p-hot) 0%, transparent 8%)','radial-gradient(circle at 50% 50%, transparent 8%, var(--p-accent) 14%, transparent 18%)','radial-gradient(circle at 50% 50%, transparent 18%, var(--p-hot) 26%, transparent 30%)','radial-gradient(circle at 50% 50%, transparent 30%, var(--p-accent) 42%, transparent 48%)','radial-gradient(circle at 50% 50%, transparent 48%, var(--p-hot) 62%, transparent 70%)'] },
  block:   { bg:'var(--p-hot)',   layers:['linear-gradient(135deg, transparent 50%, var(--p-accent) 50%)','linear-gradient(135deg, transparent 70%, var(--p-ink) 70%)'] },
  glow:    { bg:'var(--p-ink)',   layers:['linear-gradient(180deg, transparent 0%, var(--p-hot) 100%)','radial-gradient(ellipse 80% 40% at 50% 100%, var(--p-accent) 0%, transparent 70%)','radial-gradient(ellipse 50% 25% at 50% 100%, rgba(255,255,255,.5) 0%, transparent 80%)'] },
  field:   { bg:'var(--p-cream)', layers:['radial-gradient(circle at 20% 30%, var(--p-hot) 0%, transparent 30%)','radial-gradient(circle at 80% 70%, var(--p-accent) 0%, transparent 30%)','radial-gradient(circle at 50% 50%, var(--p-ink) 0%, transparent 18%)'], filter:'blur(20px) saturate(1.1)', scale:1.2 },
};

const GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence baseFrequency=%22.9%22/><feColorMatrix values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .35 0%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/></svg>")`;

export function Gradient({ variant = 'burst', caption, ratio = '4/5', children, style, dark = false }: {
  variant?: Variant; caption?: string; ratio?: string; children?: ReactNode; style?: CSSProperties; dark?: boolean;
}) {
  const a = arts[variant];
  return (
    <div style={{ position:'relative', aspectRatio:ratio, width:'100%', background:a.bg, overflow:'hidden', borderRadius:'var(--p-radius)', ...style }}>
      <div style={{ position:'absolute', inset:0, background:a.layers.join(', '), backgroundBlendMode: variant==='pulse' ? 'screen' : 'normal', filter:a.filter||'none', transform:a.scale ? `scale(${a.scale})` : 'none', transformOrigin:'center' }}/>
      <div style={{ position:'absolute', inset:0, backgroundImage:GRAIN, opacity:.45, mixBlendMode:'overlay', pointerEvents:'none' }}/>
      {caption && (
        <div style={{ position:'absolute', bottom:14, left:14, fontFamily:'ui-monospace,SFMono-Regular,Menlo,monospace', fontSize:10, letterSpacing:'.08em', textTransform:'uppercase', color: dark ? 'rgba(255,255,255,.78)' : 'rgba(15,14,19,.7)', background: dark ? 'rgba(0,0,0,.45)' : 'rgba(255,255,255,.7)', padding:'4px 8px', backdropFilter:'blur(6px)' }}>{caption}</div>
      )}
      {children}
    </div>
  );
}
