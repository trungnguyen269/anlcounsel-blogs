import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-court-grid">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ScrollReveal className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </ScrollReveal>
      </div>
    </section>
  );
}
