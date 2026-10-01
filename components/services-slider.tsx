"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ServiceImage } from "@/components/service-image";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export function ServicesSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className="space-y-6">
      <div
        className="flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Services"
      >
        {services.map((service, index) => (
          <button
            key={service.number}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-controls={`service-panel-${service.number}`}
            id={`service-tab-${service.number}`}
            onClick={() => scrollTo(index)}
            aria-label={service.title}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors",
              index === current
                ? "bg-green-900 text-white shadow-sm"
                : "bg-card text-foreground/80 ring-1 ring-border/60 hover:bg-muted",
            )}
          >
            <span className="tabular-nums">{service.number}</span>
            <span>{service.shortTitle}</span>
          </button>
        ))}
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <div className="relative px-10 sm:px-12 md:px-14">
          <CarouselContent className="-ml-0">
            {services.map((service, index) => (
              <CarouselItem key={service.number} className="pl-0">
                <article
                  id={`service-panel-${service.number}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${service.number}`}
                  tabIndex={index === current ? 0 : -1}
                  className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60"
                >
                  <div className="flex flex-col">
                    <ServiceImage
                      src={service.image}
                      alt={service.title}
                      sizes="100vw"
                      priority={index === 0}
                    />
                    <div className="flex flex-col p-6">
                      <p className="text-sm font-semibold tracking-wide text-primary">
                        Service {service.number}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-semibold text-green-900">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-foreground/85">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="mt-8 inline-flex w-fit items-center gap-1 text-sm font-semibold text-green-900 underline-offset-4 transition hover:text-primary hover:underline"
                      >
                        Ask about this service
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            variant="outline"
            className="left-0 size-9 border-border/80 bg-background/90 shadow-sm backdrop-blur-sm hover:bg-background disabled:opacity-40"
          />
          <CarouselNext
            variant="outline"
            className="right-0 size-9 border-border/80 bg-background/90 shadow-sm backdrop-blur-sm hover:bg-background disabled:opacity-40"
          />
        </div>
      </Carousel>

      <div className="flex items-center justify-center gap-2">
        {services.map((service, index) => (
          <button
            key={service.number}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to ${service.title}`}
            aria-current={index === current}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === current
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50",
            )}
          />
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        {current + 1} of {services.length}
      </p>
    </div>
  );
}
