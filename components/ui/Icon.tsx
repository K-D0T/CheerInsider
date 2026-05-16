import { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

export const Icon = {
  star: (p: P) => (
    <svg viewBox="0 0 16 16" width={14} height={14} {...p}>
      <path d="M8 1.5l2 4.6 5 .5-3.8 3.3 1.2 4.9L8 12.3 3.6 14.8l1.2-4.9L1 6.6l5-.5z" fill="currentColor"/>
    </svg>
  ),
  arrow: (p: P) => (
    <svg viewBox="0 0 24 24" width={14} height={14} {...p}>
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  arrowUp: (p: P) => (
    <svg viewBox="0 0 24 24" width={14} height={14} {...p}>
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: (p: P) => (
    <svg viewBox="0 0 14 14" width={12} height={12} {...p}>
      <path d="M2.5 7.5 6 11l5.5-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  search: (p: P) => (
    <svg viewBox="0 0 16 16" width={14} height={14} {...p}>
      <circle cx={7} cy={7} r={4.5} fill="none" stroke="currentColor" strokeWidth={1.6}/>
      <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"/>
    </svg>
  ),
  mail: (p: P) => (
    <svg viewBox="0 0 16 16" width={14} height={14} {...p}>
      <rect x={1.5} y={3.5} width={13} height={9} rx={1} fill="none" stroke="currentColor" strokeWidth={1.4}/>
      <path d="M2 4l6 5 6-5" fill="none" stroke="currentColor" strokeWidth={1.4}/>
    </svg>
  ),
  bookmark: (p: P) => (
    <svg viewBox="0 0 16 16" width={13} height={13} {...p}>
      <path d="M4 2h8v12l-4-2.5L4 14z" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round"/>
    </svg>
  ),
  close: (p: P) => (
    <svg viewBox="0 0 16 16" width={14} height={14} {...p}>
      <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"/>
    </svg>
  ),
  share: (p: P) => (
    <svg viewBox="0 0 16 16" width={13} height={13} {...p}>
      <circle cx={4} cy={8} r={2} fill="none" stroke="currentColor" strokeWidth={1.4}/>
      <circle cx={12} cy={3.5} r={2} fill="none" stroke="currentColor" strokeWidth={1.4}/>
      <circle cx={12} cy={12.5} r={2} fill="none" stroke="currentColor" strokeWidth={1.4}/>
      <path d="m5.6 7 4.8-2.5M5.6 9l4.8 2.5" stroke="currentColor" strokeWidth={1.4}/>
    </svg>
  ),
};
