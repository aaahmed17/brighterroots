import Image from "next/image";
import { BookOpen, Home, Palette, Users } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const features = [
  {
    title: "Learning Beyond the Home",
    description:
      "We engage children in community experiences that encourage curiosity, confidence, and real-world learning.",
    image: "/images/firetruck.png",
    bg: "bg-[#fcdeb8]",
    iconBg: "bg-[#c4693a]",
    icon: Users,
  },
  {
    title: "Supporting Every Learning Journey",
    description:
      "We promote educational success through homework support, literacy activities, and individualized learning opportunities.",
    image: "/images/learning.png",
    bg: "bg-[#e4edd6]",
    iconBg: "bg-[#4a6741]",
    icon: BookOpen,
  },
  {
    title: "Creativity Builds Confidence",
    description:
      "Through art, music, and hands-on activities, children develop creativity, problem-solving skills, and self-expression.",
    image: "/images/arts-and-craft.png",
    bg: "bg-[#f3e0d4]",
    iconBg: "bg-[#c47a59]",
    icon: Palette,
  },
  {
    title: "A Safe Place to Grow",
    description:
      "Our homes provide stability, guidance, and a sense of belonging so every child can feel safe, supported, and valued.",
    image: "/images/sensory.png",
    bg: "bg-[#dce8ef]",
    iconBg: "bg-[#4a6670]",
    icon: Home,
  },
];

export function HomeFeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <FadeIn key={feature.title} delay={index * 0.06}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-2xl ${feature.bg} shadow-sm ring-1 ring-black/5`}
              >
                <div className="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5">
                  <h2 className="text-center text-balance font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-green-900 sm:text-xl">
                    {feature.title}
                  </h2>
                </div>
                <div className="relative aspect-[5/3] w-full shrink-0">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 280px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="flex-1 text-center text-sm leading-relaxed text-foreground/85">
                    {feature.description}
                  </p>
                  <div className="mt-5 flex justify-center">
                    <div
                      className={`flex size-11 items-center justify-center rounded-full text-white shadow-md ${feature.iconBg}`}
                    >
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
