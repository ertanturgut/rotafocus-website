import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  /** Kept for compatibility; section names now live in the nav, not above headings. */
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "night";
}

export function SectionHeading({
  title,
  description,
  className,
  align = "center",
  tone = "light",
}: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <h2 className="text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty sm:text-xl",
            tone === "night" ? "text-night-muted" : "text-muted-foreground",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
