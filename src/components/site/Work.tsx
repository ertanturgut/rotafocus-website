import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "./site-data";

export function Work() {
  const track = useRef<HTMLUListElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section id="calismalarimiz" className="scroll-mt-14 bg-paper py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <SectionHeading
          align="left"
          title="Fikirleri işe yarayan işlere dönüştürüyoruz."
          className="max-w-2xl"
        />
        <div className="hidden gap-3 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Önceki çalışma"
            className="grid size-11 place-items-center rounded-full bg-accent text-foreground transition-colors hover:bg-border"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Sonraki çalışma"
            className="grid size-11 place-items-center rounded-full bg-accent text-foreground transition-colors hover:bg-border"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-pl-5 px-5 pb-2 sm:px-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))] sm:scroll-pl-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))]"
        aria-label="Çalışmalarımız"
      >
        {PROJECTS.map((project) => (
          <li
            key={project.title}
            className="w-[82%] shrink-0 snap-start sm:w-[min(30rem,60vw)]"
          >
            <figure>
              <img
                src={project.image}
                alt={`${project.title}: ${project.description}`}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/5] w-full rounded-[1.5rem] bg-night object-cover"
              />
              <figcaption className="mt-5 pr-4">
                <p className="text-sm font-medium text-muted-foreground">{project.category}</p>
                <p className="mt-1 font-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
        <li aria-hidden="true" className="w-1 shrink-0" />
      </ul>
    </section>
  );
}
