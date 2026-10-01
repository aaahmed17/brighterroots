import type { Metadata } from "next";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Our Goal | Brighter Roots Youth Services",
  description:
    "Building strong roots and creating brighter futures through purpose, mission, and vision.",
};

const pillars = [
  {
    title: "Purpose",
    icon: "/images/purpose.png",
    alt: "Heart with a seedling sprouting",
    text: "To provide a safe and nurturing environment for children and youth aged 5 to 17. We provide a structured living space that fosters a sense of community. Our goal is to celebrate all accomplishments while motivating and guiding children and youth throughout various and at times difficult transitions.",
  },
  {
    title: "Mission",
    icon: "/images/mission.png",
    alt: "Hand holding a star",
    text: "To nurture resilience, self-expression and personal growth in children and youth who are having challenges. We want to help them discover their own inner strength and to believe in their future. We strive to provide the tools and support needed to work through those challenges and provide the life skills needed for independence.",
  },
  {
    title: "Vision",
    icon: "/images/vision.png",
    alt: "Eye with a tree inside",
    text: "We imagine a world where every young person feels seen, heard and supported, empowering them to grow into their fullest selves. Like trees with strong roots and bright branches, we believe they are full of potential and possibility. As an inclusive organization, we welcome and support children and youth from all walks of life, with a vision to provide a safe environment where they can truly thrive.",
  },
];

export default function GoalPage() {
  return (
    <main className="flex-1">
      <FadeIn>
        <section className="mx-auto max-w-3xl px-4 pt-14 pb-12 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <Leaf className="size-5 text-green-800" aria-hidden />
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
              Our Goal
            </h1>
            <Leaf className="size-5 text-green-800" aria-hidden />
          </div>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary" />
          <p className="mt-6 text-balance text-center font-semibold text-xl text-green-800/95 sm:text-2xl">
            Building Strong Roots, Creating Brighter Futures
          </p>
          <p className="mt-8 text-base leading-relaxed text-foreground/85 sm:text-lg">
            At Brighter Roots Youth Services, our goal is to walk alongside
            children and youth as they grow, heal and discover their potential.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            We are committed to providing the care, resources and opportunities
            they need to thrive today and build a brighter tomorrow.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`flex flex-col items-center px-6 text-center md:px-8 ${
                  index > 0 ? "md:border-l md:border-border/80" : ""
                }`}
              >
                <div className="relative size-28 sm:size-32">
                  <Image
                    src={pillar.icon}
                    alt={pillar.alt}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
                <h2 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold text-green-900 sm:text-3xl">
                  {pillar.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85 sm:text-base">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
