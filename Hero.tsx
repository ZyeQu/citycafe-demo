import { useEffect, useState } from 'react';
import { Coffee, Menu as MenuIcon, X, Phone, MapPin, Clock } from 'lucide-react';

const links = [
  { href: '#etlap', label: 'Étlap' },
  { href: '#velemenyek', label: 'Vélemények' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-coffee-950/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-cream-50">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-500 text-coffee-950">
            <Coffee className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">City Café</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-cream-100/90 transition-colors hover:text-coffee-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+36306866800"
            className="flex items-center gap-2 rounded-full bg-coffee-500 px-5 py-2.5 text-sm font-semibold text-coffee-950 transition-all hover:bg-coffee-400 hover:shadow-lg hover:shadow-coffee-500/30"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Hívás
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-cream-50 md:hidden"
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-coffee-950/98 backdrop-blur-md border-t border-coffee-800">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-cream-100 font-medium border-b border-coffee-800/50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="tel:+36306866800"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-coffee-500 px-5 py-3 font-semibold text-coffee-950"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              06 30 686 6800
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
