import Image from "next/image";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Image
        src="/home-hero-office.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(122, 139, 160, 0.9) 0%, rgba(122, 139, 160, 0.82) 52%, rgba(122, 139, 160, 0.76) 100%)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-[#2F3A45]/20" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-6xl leading-[1.05] text-white sm:text-7xl">
            Strategic Counsel for a Changing World.
          </h1>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href="/gioi-thieu"
              className="border-beige bg-beige text-ink hover:border-beigeDark hover:bg-beigeDark"
            >
              OUR EXPERTISE
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
