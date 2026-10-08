import type { Metadata } from "next";
import {
  Briefcase,
  Heart,
  Leaf,
  MapPin,
  Sprout,
  Users,
} from "lucide-react";
import { CareersApplicationForm } from "@/components/careers-application-form";
import { FadeIn } from "@/components/fade-in";
import { WavyUnderline } from "@/components/wavy-underline";

export const metadata: Metadata = {
  title: "Careers | Brighter Roots Youth Services",
  description:
    "Join our team. Explore opportunities to make a difference with Brighter Roots Youth Services.",
};

const highlights = [
  { label: "Meaningful Work", icon: Sprout },
  { label: "Supportive Team", icon: Users },
  { label: "Stronger Community", icon: Heart },
];

const responsibilities = [
  "Provide daily support and supervision to children and youth",
  "Assist with life skills development and goal setting",
  "Promote positive behaviour and emotional well-being",
  "Collaborate with team members, families and partner agencies",
  "Maintain accurate documentation and records",
];

const idealCandidate = [
  "Compassionate and patient",
  "Strong communicators and active listeners",
  "Calm and confident in challenging situations",
  "Reliable, professional and team-oriented",
  "Passionate about supporting children and youth",
  "Committed to creating safe, inclusive and respectful environments",
];

const qualifications = [
  "Relevant experience or education in Child & Youth Care, Social Service Worker, Social Work, Psychology, or Human Services",
  "Valid First Aid/CPR certification (or willingness to obtain)",
  "Broad Record Check (or willingness to obtain)",
];

export default function CareersPage() {
  return (
    <main className="flex-1">
      <FadeIn>
        <section className="mx-auto max-w-3xl px-4 pt-14 pb-10 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <Leaf className="size-5 text-green-800" aria-hidden />
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
              Careers
            </h1>
            <Leaf className="size-5 text-green-800" aria-hidden />
          </div>
          <WavyUnderline />
          <p className="mt-5 font-[family-name:var(--font-heading)] text-xl text-green-800/95 sm:text-2xl">
            Join our team. Make a difference every day.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            We are always looking for passionate individuals who share our
            commitment to supporting children and youth. If you believe in
            trauma-informed care, collaboration, and helping young people build
            brighter futures, we would love to hear from you.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-0">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center px-4 text-center ${
                    index > 0 ? "sm:border-l sm:border-border/80" : ""
                  }`}
                >
                  <Icon
                    className="size-9 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="mt-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-green-900">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-2xl bg-[#faf6ef] ring-1 ring-border/70">
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
              <div>
                <div className="flex size-20 items-center justify-center rounded-full bg-green-900 text-white shadow-md">
                  <Users className="size-9" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-green-900 sm:text-3xl">
                    Current Opening
                  </h2>
                  <Leaf className="size-4 text-green-800" aria-hidden />
                </div>
                <WavyUnderline className="mt-2 h-2 w-20 text-primary" />
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-green-900 sm:text-2xl">
                  Child Youth Support Worker
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fcdeb8]/80 px-3 py-1 text-xs font-medium text-green-900">
                    <MapPin className="size-3.5 text-primary" aria-hidden />
                    Location: TBA
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fcdeb8]/80 px-3 py-1 text-xs font-medium text-green-900">
                    <Briefcase className="size-3.5 text-primary" aria-hidden />
                    Independent Contractor
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85 sm:text-base">
                  We are seeking a dedicated Child Youth Support Worker to join
                  our team. You will play a key role in supporting children and
                  youth in building life skills, managing daily routines and
                  achieving their personal goals in a safe and nurturing
                  environment.
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-green-900">
                    Key Responsibilities
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                    {responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-green-900">
                    What We&apos;re Looking For
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                    {idealCandidate.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-green-900">
                    Qualifications
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                    {qualifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="apply"
          className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8"
        >
          <article className="relative overflow-hidden rounded-2xl bg-[#f6f0e4] px-6 py-10 ring-1 ring-border/70 sm:px-10 sm:py-12">
            <Leaf
              className="pointer-events-none absolute bottom-4 left-4 size-16 rotate-12 text-green-900/10"
              aria-hidden
            />
            <Leaf
              className="pointer-events-none absolute right-4 bottom-4 size-16 -rotate-12 text-green-900/10"
              aria-hidden
            />
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-2">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-green-900 sm:text-3xl">
                  Apply Now
                </h2>
                <Leaf className="size-4 text-green-800" aria-hidden />
              </div>
              <WavyUnderline />
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-foreground/85 sm:text-base">
                Complete the form below to apply for the Child Youth Support
                Worker position. We review every application carefully.
              </p>
            </div>
            <div className="relative mt-8">
              <CareersApplicationForm />
            </div>
          </article>
        </section>
      </FadeIn>
    </main>
  );
}
