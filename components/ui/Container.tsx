import { CSSProperties, ReactNode } from 'react';

export function Container({ children, style, max = 1320 }: {
  children: ReactNode; style?: CSSProperties; max?: number;
}) {
  return (
    <div style={{ width:`min(${max}px, 92%)`, margin:'0 auto', ...style }}>
      {children}
    </div>
  );
}
