import { Gauge, Palette, Sparkles, Target, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ADVANTAGES } from "./site-data";

const ICONS: Record<string, LucideIcon> = {
  "AI First": Sparkles,
  "Kreatif + Teknoloji": Palette,
  "Sonuç Odaklı": Target,
  "Hızlı Üretim": Gauge,
};

const TITLES: Record<string, string> = {
  "AI First": "Önce yapay zekâ",
  "Kreatif + Teknoloji": "Tasarım ve teknoloji birlikte",
  "Sonuç Odaklı": "Sonuca odaklı",
  "Hızlı Üretim": "Hızlı üretim",
};

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading title="Sadece içerik üretmiyoruz. Büyüme tasarlıyoruz." />
        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item) => {
            const Icon = ICONS[item.title] ?? Sparkles;
            return (
              <li key={item.title} className="text-center sm:text-left">
                <Icon className="mx-auto size-8 text-primary sm:mx-0" strokeWidth={1.75} />
                <h3 className="mt-5 font-sans text-xl font-semibold tracking-tight">
                  {TITLES[item.title] ?? item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
