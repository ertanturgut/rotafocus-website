import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PROCESS } from "./site-data";

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Süreç" title="Nasıl çalışıyoruz?" />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 80}>
              <div className="relative border-t border-border pt-6">
                <span className="absolute -top-px left-0 h-px w-12 bg-primary" />
                <span className="font-mono text-sm text-primary">{step.number}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
