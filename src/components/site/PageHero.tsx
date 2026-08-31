import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-30" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,transparent_10%,var(--background)_70%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[32rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs tracking-wide text-muted-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-7 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
