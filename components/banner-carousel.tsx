"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://brighterrootsyouthservices.ca/images/banner1.png",
    alt: "Brighter Roots Youth Services banner 1",
  },
  {
    src: "https://brighterrootsyouthservices.ca/images/banner2.png",
    alt: "Brighter Roots Youth Services banner 2",
  },
  {
    src: "https://brighterrootsyouthservices.ca/images/banner3.png",
    alt: "Brighter Roots Youth Services banner 3",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <section
      aria-label="Featured highlights"
      className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/60">
        <div className="relative aspect-[3/2] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1280px"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/70 p-2.5 text-foreground opacity-0 shadow backdrop-blur transition-all hover:bg-background group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/70 p-2.5 text-foreground opacity-0 shadow backdrop-blur transition-all hover:bg-background group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-foreground/40 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
