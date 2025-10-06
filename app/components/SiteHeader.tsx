import Link from 'next/link';

const navLinks = [
  { href: '#overview', label: 'Discover' },
  { href: '#attractions', label: 'Attractions' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#planning', label: 'Plan a Visit' },
  { href: '#gallery', label: 'Gallery' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          <span className="brand-mark">Erin Ijesa</span>
          <span className="brand-sub">Olumirin Waterfalls</span>
        </Link>
        <nav className="site-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </a>
          ))}
          <Link href="/admin" className="site-nav__cta">
            Admin Studio
          </Link>
        </nav>
      </div>
    </header>
  );
}
