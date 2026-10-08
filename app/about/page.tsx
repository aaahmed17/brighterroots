import { WavyUnderline } from "@/components/wavy-underline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Home,
  Leaf,
  Shield,
  Sprout,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About Us | Brighter Roots Youth Services",
  description:
    "Rooted in purpose — learn about our team, mission, and core values.",
};

const coreValues = [
  {
    title: "Nurturing Environment",
    description:
      "We create safe, welcoming spaces where every child feels seen, heard and valued.",
    icon: Sprout,
    accent: "bg-[#e8f0d4]",
    underline: "bg-[#6B8E23]",
  },
  {
    title: "Compassionate Care",
    description:
      "We lead with kindness, empathy and respect in every interaction.",
    icon: Heart,
    accent: "bg-[#f5e6dc]",
    underline: "bg-primary",
  },
  {
    title: "Empowerment",
    description:
      "We support young people in building confidence, independence and a positive sense of self.",
    icon: Users,
    accent: "bg-[#ebe4d4]",
    underline: "bg-[#8B7355]",
  },
  {
    title: "Integrity & Accountability",
    description:
      "We are committed to honest, transparent and responsible care in all we do.",
    icon: Shield,
    accent: "bg-[#e4ebe6]",
    underline: "bg-green-900",
  },
  {
    title: "Community & Collaboration",
    description:
      "We believe in the power of partnership with families, professionals and our communities.",
    icon: Home,
    accent: "bg-[#f0ead8]",
    underline: "bg-[#C4A574]",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <FadeIn>
        <section className="mx-auto max-w-4xl px-4 pt-14 pb-10 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <Heart className="size-4 fill-primary text-primary" aria-hidden />
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
              About Us
            </h1>
            <Heart className="size-4 fill-primary text-primary" aria-hidden />
          </div>
          <WavyUnderline />
          <p className="mt-4 font-[family-name:var(--font-heading)] text-xl text-green-800/90 sm:text-2xl">
            Rooted in Purpose, Growing Together
          </p>
      
          <p className="mt-8 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Brighter Roots Youth Services was founded by three friends from
            diverse backgrounds who shared a common passion and purpose: to
            support children and youth in meaningful, lasting ways. Through their
            work in various fields, they recognized a growing need for safe,
            inclusive spaces where young people could access trauma-informed
            care, navigate life&apos;s challenges and develop self-love and
            essential life skills. United by this vision, they came together to
            create exactly that.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Today, we continue that mission with dedicated professionals who
            bring compassion, expertise and a deep commitment to helping every
            young person build strong roots and a brighter future.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 rounded-3xl bg-card/80 p-8 ring-1 ring-border/60 lg:grid-cols-2 lg:p-12">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Image
                src="/images/team-tree.png"
                alt="Brighter Roots team — tree with heart-shaped branches"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-green-900">
                Our Team
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-green-800" />
              <p className="mt-6 leading-relaxed text-foreground/85">
                Our team is filled with dedicated professionals with extensive
                experience supporting children and youth who have faced trauma,
                mental health, behavioural and substance usage challenges and
                involvement with the youth justice system. We specialize in
                providing rehabilitation resources and support for children and
                youths who are in the care of Family and Children Services
                including those living in group homes.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/85">
                Our team also collaborates closely with families, clinicians and
                Family and Children Services to support effective care planning
                and ensure continuity of care for children and youth.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <Leaf className="size-5 text-green-800" aria-hidden />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-green-900 sm:text-4xl">
              Our Core Values
            </h2>
            <Leaf className="size-5 text-green-800" aria-hidden />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={index * 0.05}>
                  <article
                    className={`flex h-full flex-col rounded-2xl p-6 ${value.accent} ring-1 ring-border/40`}
                  >
                    <Icon
                      className="size-8 text-green-900"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-green-900">
                      {value.title}
                    </h3>
                    <div
                      className={`mt-2 h-0.5 w-10 rounded-full ${value.underline}`}
                    />
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {value.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
