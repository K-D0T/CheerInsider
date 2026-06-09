import { CSSProperties, ReactNode } from 'react';

export function Container({ children, style, className, max = 1320 }: {
  children: ReactNode; style?: CSSProperties; className?: string; max?: number;
}) {
  return (
    <div className={className} style={{ width:`min(${max}px, 92%)`, margin:'0 auto', ...style }}>
      {children}
    </div>
  );
}
