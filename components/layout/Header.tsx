'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { P } from '@/lib/palette';

const NAV = [
  { label: 'Guides',          href: '/guides' },
  { label: 'Parents',         href: '/parents' },
  { label: 'Gear',            href: '/gear' },
  { label: 'Cost Calculator', href: '/cost-calculator' },
  { label: 'About',           href: '/about' },
];

export function Header() {
  const path = usePathname();
  return (
    <header style={{ position:'sticky', top:0, zIndex:50, background:'rgba(250,246,241,.92)', backdropFilter:'saturate(160%) blur(14px)', borderBottom:'1px solid var(--p-line)' }}>
      <div style={{ width:'min(1320px, 92%)', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 0', gap:32 }}>
        <Link href="/" style={{ fontFamily:'var(--p-display)', fontSize:30, fontWeight:800, letterSpacing:'-.03em', lineHeight:1 }}>
          Cheer<span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400, fontSize:32 }}>Insider</span>
        </Link>

        <nav className="ci-header-nav" style={{ display:'flex', gap:26, fontSize:14, fontWeight:600 }}>
          {NAV.map((n) => {
            const active = path === n.href || path.startsWith(n.href + '/');
            return (
              <Link key={n.href} href={n.href} style={{ opacity: active ? 1 : .8, borderBottom: active ? '2px solid var(--p-hot)' : '2px solid transparent', paddingBottom:2 }}>
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          <Link href="/cost-calculator" className="ci-header-cta" style={{ background:'var(--p-hot)', color:'#fff', border:'none', cursor:'pointer', padding:'10px 18px', borderRadius:99, fontWeight:700, fontSize:13, letterSpacing:'.01em', display:'inline-flex', alignItems:'center', gap:8, fontFamily:'inherit' }}>
            Cost Calculator <Icon.arrow/>
          </Link>
        </div>
      </div>
    </header>
  );
}
