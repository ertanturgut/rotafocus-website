import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
