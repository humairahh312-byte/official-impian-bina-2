import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-foreground/5 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 fade-in-up">
        {eyebrow && (
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">{eyebrow}</p>
        )}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-balance max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
