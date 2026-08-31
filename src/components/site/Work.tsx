import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS, type Project } from "./site-data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-border">
      <img
        src={project.image}
        alt={`${project.title} — ${project.category}`}
        loading="lazy"
        width={1024}
        height={768}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-xs tracking-[0.18em] text-primary uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] motion-reduce:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Projeyi İncele <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="calismalarimiz" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Çalışmalarımız"
          title="Fikirleri dijital deneyimlere dönüştürüyoruz."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
