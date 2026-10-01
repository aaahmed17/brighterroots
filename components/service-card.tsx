import Link from "next/link";
import { ServiceImage } from "@/components/service-image";
import type { Service } from "@/lib/services-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60">
      <ServiceImage
        src={service.image}
        alt={service.title}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-green-900 lg:text-xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
          {service.description}
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-green-900 transition hover:text-primary"
        >
          Ask about this service
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
