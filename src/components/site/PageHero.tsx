import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        {eyebrow && (
          <p className="rise text-base font-medium text-muted-foreground sm:text-lg">{eyebrow}</p>
        )}
        <h1
          className="rise mt-3 text-[2.5rem] leading-[1.04] font-bold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
