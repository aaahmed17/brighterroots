import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { HomeFeatureCards } from "@/components/home-feature-cards";

export default function Home() {
  return (
    <main className="flex-1">
      <FadeIn>
        <section
          id="home"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-10 pb-8 sm:px-6 lg:px-8 lg:pt-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center justify-center gap-2 text-sm font-medium text-green-800/90 lg:justify-start">
                <Leaf className="size-4 shrink-0 text-green-800" aria-hidden />
                Where Strength Takes Root and Futures Bloom
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight text-green-900 sm:text-5xl lg:text-[2.75rem]">
                Helping Children Learn, Grow &amp; Thrive
              </h1>
              <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
                We provide safe, family-style homes and trauma-informed support
                so children and youth can heal, build life skills, and discover
                their strengths in a nurturing community.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Learn More About Us
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="relative mx-auto w-full max-w-lg leading-none lg:max-w-none">
              <Image
                src="/images/reading.png"
                alt="Caregiver reading with a child at a table"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-2xl"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <HomeFeatureCards />
    </main>
  );
}
