import Image from "next/image";
import { BannerCarousel } from "@/components/banner-carousel";
import { FadeIn } from "@/components/fade-in";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex-1">
      <FadeIn>
        <section
          id="home"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-12 text-center sm:px-6 lg:px-8"
        >
        <h1 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
          Welcome to Brighter Roots Youth Services
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          &quot;Where Strength Takes Root and Futures Bloom&quot;
        </p>
      </section>
      </FadeIn>
      <BannerCarousel />

      <FadeIn>
        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
        >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border/60">
            <Image
              src="https://brighterrootsyouthservices.ca/images/br-extract.png"
              alt="Brighter Roots Youth Services team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-green-900 sm:text-3xl">
              About Us
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Brighter Roots Youth Services was founded by three friends from
              diverse backgrounds who shared a common passion and purpose: to
              support children and youth in meaningful, lasting ways. Through
              their work in various fields, they recognized a growing need for
              safe, inclusive spaces where young people could access
              trauma-informed care, navigate life’s challenges and develop
              self-love and essential life skills. United by this vision, they
              came together to create exactly that.
            </p>
            <h3 className="mt-8 text-2xl font-bold tracking-tight text-green-900 sm:text-3xl">
              Team
            </h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Our team is filled with dedicated professionals with extensive
              experience supporting children and youth who have faced trauma,
              mental health, behavioural and substance usage challenges and
              involvement with the youth justice system. We specialize in
              providing rehabilitation resources and support for children and
              youths who are in the care of Family and Children Services
              including those living in group homes. Our team also collaborates
              closely with families, clinicians and Family and Children
              Services to support effective care planning and ensure continuity
              of care for children and youth.
            </p>
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
        <section
          id="goal"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8"
        >
        <div className="grid gap-12 sm:grid-cols-3">
          <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center">
            <div className="relative size-24">
              <Image
                src="https://brighterrootsyouthservices.ca/images/purpose%20(2).PNG"
                alt="Purpose icon"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-green-900 sm:text-3xl">
              Purpose
            </h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              To provide a safe and nurturing environment for children and
              youth aged 5 to 17. We provide a structured living space that
              fosters a sense of community. Our goal is to celebrate all
              accomplishments while motivating and guiding children and youth
              throughout various and at times difficult transitions.
            </p>
          </div>
          </FadeIn>

          <FadeIn delay={0.1}>
          <div className="flex flex-col items-center text-center">
            <div className="relative size-24">
              <Image
                src="https://brighterrootsyouthservices.ca/images/mission_icon1.PNG"
                alt="Mission icon"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-green-900 sm:text-3xl">
              Mission
            </h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              To nurture resilience, self-expression and personal growth in
              children and youth who are having challenges. We want to help
              them discover their own inner strength and to believe in their
              future. We strive to provide the tools and support needed to work
              through those challenges and provide the life skills needed for
              independence.
            </p>
          </div>
          </FadeIn>

          <FadeIn delay={0.2}>
          <div className="flex flex-col items-center text-center">
            <div className="relative size-24">
              <Image
                src="https://brighterrootsyouthservices.ca/images/vision_icon1.PNG"
                alt="Vision icon"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-green-900 sm:text-3xl">
              Vision
            </h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              We imagine a world where every young person feels seen, heard and
              supported, empowering them to grow into their fullest selves.
              Like trees with strong roots and bright branches, we believe they
              are full of potential and possibility. As an inclusive
              organization, we welcome and support children and youth from all
              walks of life, with a vision to provide a safe environment where
              they can truly thrive.
            </p>
          </div>
          </FadeIn>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
        <section
          id="contact"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-green-900">
                Get In Touch
              </h2>
              <ContactForm />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border/60">
              <Image
                src="https://brighterrootsyouthservices.ca/images/contact-icon.PNG"
                alt="Get in touch with Brighter Roots Youth Services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
