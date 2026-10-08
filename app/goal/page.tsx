import { WavyUnderline } from "@/components/wavy-underline";
import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Leaf, Sprout, Star } from "lucide-react";
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
    bg: "bg-[#fcdeb8]",
    border: "border-[#e5c28a]",
    iconBg: "bg-[#c4693a]",
    badgeIcon: Sprout,
  },
  {
    title: "Mission",
    icon: "/images/mission.png",
    alt: "Hand holding a star",
    text: "To nurture resilience, self-expression and personal growth in children and youth who are having challenges. We want to help them discover their own inner strength and to believe in their future. We strive to provide the tools and support needed to work through those challenges and provide the life skills needed for independence.",
    bg: "bg-[#f7e8b0]",
    border: "border-[#dcc978]",
    iconBg: "bg-[#c9922a]",
    badgeIcon: Star,
  },
  {
    title: "Vision",
    icon: "/images/vision.png",
    alt: "Eye with a tree inside",
    text: "We imagine a world where every young person feels seen, heard and supported, empowering them to grow into their fullest selves. Like trees with strong roots and bright branches, we believe they are full of potential and possibility. As an inclusive organization, we welcome and support children and youth from all walks of life, with a vision to provide a safe environment where they can truly thrive.",
    bg: "bg-[#e4edd6]",
    border: "border-[#c5d4b5]",
    iconBg: "bg-[#4a6741]",
    badgeIcon: Eye,
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
          <WavyUnderline />
          <p className="mt-5 font-[family-name:var(--font-heading)] text-xl text-green-800/95 sm:text-2xl">
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
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const BadgeIcon = pillar.badgeIcon;
              return (
                <FadeIn key={pillar.title} delay={index * 0.06}>
                  <article
                    className={`flex h-full flex-col overflow-hidden rounded-2xl border ${pillar.bg} ${pillar.border} shadow-sm`}
                  >
                    <div className="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5">
                      <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight tracking-tight text-green-900 sm:text-3xl lg:text-4xl">
                        {pillar.title}
                      </h2>
                    </div>
                    <div className="relative flex min-h-[140px] flex-1 items-center justify-center px-6 py-2 sm:min-h-[160px]">
                      <div className="relative size-28 sm:size-32">
                        <Image
                          src={pillar.icon}
                          alt={pillar.alt}
                          fill
                          sizes="128px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col px-5 pt-2 pb-5 sm:px-6 sm:pb-6">
                      <p className="flex-1 text-center text-sm leading-relaxed text-foreground/85 sm:text-base">
                        {pillar.text}
                      </p>
                      <div className="mt-5 flex justify-center">
                        <div
                          className={`flex size-11 items-center justify-center rounded-full text-white shadow-md ${pillar.iconBg}`}
                        >
                          <BadgeIcon
                            className="size-5"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
