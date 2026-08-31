import {
  ArrowUpRight,
  LayoutTemplate,
  Share2,
  Sparkles,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "./site-data";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  share: Share2,
  workflow: Workflow,
  layout: LayoutTemplate,
  trending: TrendingUp,
};

export function Services() {
  return (
    <section id="hizmetler" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Markanız için ihtiyacınız olan dijital güç."
          description="Stratejiden içerik üretimine, otomasyondan dijital pazarlamaya kadar markanızın tüm dijital süreçlerini tek noktadan yönetiyoruz."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            return (
              <Reveal as="li" key={service.number} delay={i * 70}>
                <article className="group glass-card flex h-full flex-col rounded-3xl p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href="#iletisim"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                  >
                    Detayları Gör
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
