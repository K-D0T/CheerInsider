import { CSSProperties, ReactNode } from 'react';

export function Pill({ children, color = 'var(--p-hot)', textColor = '#fff', style }: {
  children: ReactNode; color?: string; textColor?: string; style?: CSSProperties;
}) {
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'5px 10px', fontSize:10.5, letterSpacing:'.12em', textTransform:'uppercase', fontWeight:800, background:color, color:textColor, borderRadius:999, ...style }}>
      {children}
    </span>
  );
}
