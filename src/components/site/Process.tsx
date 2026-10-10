import { SectionHeading } from "./SectionHeading";
import { PROCESS } from "./site-data";

export function Process() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Dört adımda, net bir yol."
          description="İlk görüşmeden ilk sonuca kadar her adımda ne olacağını bilirsiniz."
        />
        <ol className="mt-14 grid gap-3 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="rounded-[1.5rem] bg-background p-7 sm:p-8">
              <span className="block font-display text-6xl leading-none font-bold tracking-tight text-primary">
                {i + 1}
              </span>
              <h3 className="mt-8 font-sans text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
