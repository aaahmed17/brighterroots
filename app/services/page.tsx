import { WavyUnderline } from "@/components/wavy-underline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Leaf, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { ServicesListing } from "@/components/services-listing";

export const metadata: Metadata = {
  title: "Our Services | Brighter Roots Youth Services",
  description:
    "Staffing support, supervised visits, respite, community living, sensory spaces and more.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <FadeIn>
        <section className="mx-auto max-w-4xl px-4 pt-14 pb-8 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <Heart className="size-4 fill-primary text-primary" aria-hidden />
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
              Our Services
            </h1>
            <Heart className="size-4 fill-primary text-primary" aria-hidden />
          </div>
          <WavyUnderline />
          <p className="mt-5 font-[family-name:var(--font-heading)] text-xl text-green-800/95 sm:text-2xl">
            Support that nurtures. Care that empowers.
          </p>
          <p className="mt-8 text-base leading-relaxed text-foreground/85 sm:text-lg">
            We offer a wide range of services designed to support children,
            youth and families through every stage of their journey. Each service
            is grounded in compassion, respect and a commitment to helping young
            people thrive.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-3xl px-4 pb-10 text-center sm:px-6">
          <div className="flex items-center justify-center gap-2">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-green-900 sm:text-3xl">
              How We Support
            </h2>   
          </div>
          <p className="mt-4 leading-relaxed text-foreground/85">
            <span className="md:hidden">
              Swipe or use the tabs to explore each service and how we create
              safe, stable and nurturing environments.
            </span>
            <span className="hidden md:inline">
              Every service below is designed to create safe, stable and
              nurturing environments where young people can heal, grow and
              thrive.
            </span>
          </p>
        </section>
      </FadeIn>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <ServicesListing />
      </section>

      <FadeIn>
        <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <article className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-card/60 p-10 text-center ring-1 ring-border/60">
            <div className="relative mb-4 size-28">
              <Image
                src="/images/cta-hands.png"
                alt=""
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-green-900">
              Here for Every Step of the Way
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/80">
              Together, we create strong roots and brighter futures.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-green-900 px-8 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Get in Touch
            </Link>
            <Heart
              className="absolute top-6 right-8 size-5 text-primary/40"
              strokeWidth={1.5}
              aria-hidden
            />
          </article>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="border-t border-border/60 bg-card/40 px-4 py-14 text-center sm:px-6">
          <p className="mx-auto flex max-w-2xl items-center justify-center gap-2 font-[family-name:var(--font-heading)] text-xl text-green-900 sm:text-2xl">
            <Heart
              className="size-4 shrink-0 fill-primary text-primary"
              aria-hidden
            />
            When we support today&apos;s youth, we grow a stronger tomorrow.
          </p>
        </section>
      </FadeIn>
    </main>
  );
}
