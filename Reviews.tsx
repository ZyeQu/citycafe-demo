import { Coffee, MapPin, Phone, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-950 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-cream-50">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-500 text-coffee-950">
              <Coffee className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-bold">City Café</span>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-cream-100/70 md:flex-row md:gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-coffee-400" />
              Siklós, Felszabadulás u. 22
            </span>
            <a href="tel:+36306866800" className="flex items-center gap-1.5 hover:text-cream-50">
              <Phone className="h-4 w-4 text-coffee-400" />
              06 30 686 6800
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:citycafe@gmail.hu" className="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-800 text-cream-100 transition-colors hover:bg-coffee-700" aria-label="citycafe@gmail.hu">
              <Mail className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/citycafesiklos" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-800 text-cream-100 transition-colors hover:bg-coffee-700" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-coffee-800 pt-6 text-center text-xs text-cream-100/50">
          © {new Date().getFullYear()} City Café · Siklós. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}
