import type { Metadata } from "next";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { WavyUnderline } from "@/components/wavy-underline";

export const metadata: Metadata = {
  title: "Contact Us | Brighter Roots Youth Services",
  description: "Get in touch with Brighter Roots Youth Services.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <FadeIn>
        <section className="mx-auto max-w-3xl px-4 pt-14 pb-10 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <Leaf className="size-5 text-green-800" aria-hidden />
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
              Contact Us
            </h1>
            <Leaf className="size-5 text-green-800" aria-hidden />
          </div>
          <p className="mt-5 font-[family-name:var(--font-heading)] text-xl text-green-800/95 sm:text-2xl">
            We&apos;re Here to Connect
          </p>
          <WavyUnderline />
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Have questions? We&apos;d love to hear from you. Whether you&apos;re
            a family, community partner, professional or prospective team member,
            please reach out. We&apos;re here to provide information, answer your
            questions and explore how we can work together to support children
            and youth.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-2xl bg-[#faf6ef] ring-1 ring-border/70">
            <div className="grid lg:grid-cols-2 lg:items-center">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2">
                  <Leaf className="size-4 text-green-800" aria-hidden />
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-green-900 sm:text-3xl">
                    Get In Touch
                  </h2>
                </div>
                <WavyUnderline className="mt-2 h-2 w-20 text-primary" />
                <ContactForm className="mt-6" />
              </div>
              <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <Image
                  src="/images/contact.png"
                  alt="Illustration of people connecting and communicating"
                  width={1024}
                  height={1016}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </article>
        </section>
      </FadeIn>
    </main>
  );
}
