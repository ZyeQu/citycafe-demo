import { openingHours } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Clock, Utensils, Navigation, Share2 } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="kapcsolat" className="bg-cream-50 py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-coffee-500">
            Névjegy & Kapcsolat
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-coffee-900 sm:text-5xl">
            Gyere el hozzánk
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-coffee-700">
            Siklós szívében, barátságos környezetben várjuk. Asztalfoglalás telefonon lehetséges.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-cream-300 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-coffee-900">
                <MapPin className="h-5 w-5 text-coffee-500" />
                Cím
              </h3>
              <p className="mt-3 text-coffee-700">Felszabadulás u. 22, 7800 Siklós</p>
              <p className="text-sm text-coffee-500">Plusz kód: V73X+GC Siklós</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Felszabadulás+u.+22+7800+Siklós"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-coffee-800 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-all hover:bg-coffee-700"
              >
                <Navigation className="h-4 w-4" />
                Útvonalterv
              </a>
            </div>

            <div className="rounded-2xl border border-cream-300 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-coffee-900">
                <Phone className="h-5 w-5 text-coffee-500" />
                Telefon
              </h3>
              <a
                href="tel:+36306866800"
                className="mt-3 block text-lg font-medium text-coffee-700 hover:text-coffee-900"
              >
                06 30 686 6800
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-cream-300 bg-white p-5 text-center shadow-sm">
                <Utensils className="mx-auto h-6 w-6 text-coffee-500" />
                <p className="mt-2 text-sm font-semibold text-coffee-800">Helyben fogyasztás</p>
              </div>
              <div className="rounded-2xl border border-cream-300 bg-white p-5 text-center shadow-sm">
                <Share2 className="mx-auto h-6 w-6 text-coffee-500" />
                <p className="mt-2 text-sm font-semibold text-coffee-800">Kifőzde</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cream-300 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-coffee-900">
              <Clock className="h-5 w-5 text-coffee-500" />
              Nyitvatartás
            </h3>
            <ul className="mt-5 space-y-1">
              {openingHours.map((d, i) => (
                <li
                  key={d.day}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm ${
                    i === todayIndex
                      ? 'bg-coffee-100 font-semibold text-coffee-900'
                      : 'text-coffee-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {i === todayIndex && <span className="h-2 w-2 rounded-full bg-green-500" />}
                    {d.day}
                    {i === todayIndex && <span className="text-xs text-green-600">Ma</span>}
                  </span>
                  <span>{d.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-coffee-50 p-4 text-center">
              <p className="text-sm text-coffee-600">
                Személyenként <span className="font-semibold text-coffee-800">2000–4000 Ft</span>
              </p>
              <p className="mt-1 text-xs text-coffee-500">Bejelentette 75 személy · etterem.hu</p>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-cream-300 shadow-sm">
          <iframe
            title="City Café térkép"
            src="https://www.openstreetmap.org/export/embed.html?bbox=18.295%2C45.865%2C18.315%2C45.879&layer=mapnik&marker=45.872%2C18.305"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
