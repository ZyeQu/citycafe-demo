import { galleryImages } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
  }, []);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    const startX = e.touches[0].clientX;
    let lastX = startX;
    const onMove = (ev: TouchEvent) => {
      lastX = ev.touches[0].clientX;
    };
    const onEnd = () => {
      const diff = lastX - startX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) next();
        else prev();
      }
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
  };

  return (
    <section id="galeria" className="bg-cream-100 py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-coffee-500">
            Fotók & Videók
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-coffee-900 sm:text-5xl">
            Egy kis ízelítő a hangulatról
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-coffee-700">
            Ételek, italok és a kávézó meghitt atmoszférája – nézz be hozzánk képek által.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[260px]">
          {galleryImages.map((img, index) => (
            <figure
              key={img.url}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${img.span}`}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-cream-50 opacity-0 transition-opacity group-hover:opacity-100">
                <Camera className="h-4 w-4" />
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-coffee-950/90 backdrop-blur-sm"
          onClick={close}
          onTouchStart={onTouchStart}
        >
          <button
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Bezárás"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 lg:flex"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Előző kép"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 lg:flex"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Következő kép"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <figure
            className="max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex!].url}
              alt={galleryImages[lightboxIndex!].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm font-medium text-cream-50">
              {galleryImages[lightboxIndex!].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
