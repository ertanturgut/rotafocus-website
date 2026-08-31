import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ADVANTAGES } from "./site-data";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 -left-40 size-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <SectionHeading
            eyebrow="Neden Rotafocus?"
            title="Sadece içerik üretmiyoruz. Dijital büyüme tasarlıyoruz."
          />
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {ADVANTAGES.map((item, i) => (
              <Reveal as="li" key={item.number} delay={i * 70}>
                <div className="group h-full bg-background p-7 transition-colors duration-300 hover:bg-secondary/60">
                  <span className="font-mono text-sm text-primary">{item.number}</span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
