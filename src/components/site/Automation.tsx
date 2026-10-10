import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  { label: "Müşteri yazar", detail: "WhatsApp, Instagram ya da web formundan gelen talep." },
  { label: "Yapay zekâ anlar", detail: "Talebi okur, konusuna ve aciliyetine göre ayırır." },
  { label: "Süreç başlar", detail: "Doğru iş akışı kendiliğinden tetiklenir." },
  { label: "Ekip haberdar olur", detail: "İlgili kişiye anında bildirim düşer." },
  { label: "Kayıt tutulur", detail: "CRM, WhatsApp ve e-postaya otomatik işlenir." },
  { label: "Sonuç ölçülür", detail: "Ne kadar zaman kazandığınızı raporda görürsünüz." },
];

const TRAVEL_MS = 2600;

export function Automation() {
  const ref = useRef<HTMLOListElement>(null);
  const [run, setRun] = useState(false);
  // Small screens: the vertical track must stop at the last step's node.
  const [trackPx, setTrackPx] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const items = el.querySelectorAll<HTMLLIElement>(":scope > li");
      const last = items[items.length - 1];
      const first = items[0];
      if (last && first) setTrackPx(last.offsetTop - first.offsetTop);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRun(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-night py-24 text-night-foreground sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tone="night"
          title="İşletmenizi dijitalleştirmeyin. Otomatikleştirin."
          description="Tekrarlayan işleri yapay zekâ ve otomasyonlarla sisteme bağlıyoruz. Bir müşteri mesajı, siz dokunmadan sonuca kadar ilerler."
        />

        <ol
          ref={ref}
          data-run={run}
          className="relative mt-16 grid gap-9 sm:mt-24 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-6 lg:gap-y-0"
        >
          {/* Track: vertical on small screens, horizontal on large. */}
          <div
            aria-hidden="true"
            className="absolute top-[9px] left-[9px] h-[var(--track-h)] w-px bg-night-muted/25 sm:hidden lg:block lg:right-[8.33%] lg:left-[8.33%] lg:h-px lg:w-auto"
            style={{ "--track-h": trackPx === null ? "0px" : `${trackPx}px` } as CSSProperties}
          >
            <span
              className={cn(
                "absolute left-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_6px_rgb(255_90_54/0.18)] ease-in-out lg:top-1/2 lg:-translate-x-1/2",
                run ? "top-full lg:left-full" : "top-0 lg:left-0",
              )}
              style={{
                transitionProperty: "top, left",
                transitionDuration: `${TRAVEL_MS}ms`,
              }}
            />
          </div>

          {STEPS.map((step, i) => {
            const lightAt = (i / (STEPS.length - 1)) * TRAVEL_MS;
            const last = i === STEPS.length - 1;
            return (
              <li key={step.label} className="relative pl-10 sm:pl-0 lg:text-center">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-[3px] left-[3px] size-3 rounded-full border transition-colors duration-500 sm:static sm:mb-5 sm:block lg:mx-auto lg:mt-[3px]",
                    run
                      ? "border-primary bg-primary"
                      : "border-night-muted/50 bg-night",
                  )}
                  style={{ transitionDelay: run ? `${lightAt}ms` : "0ms" }}
                />
                <h3
                  className={cn(
                    "font-sans text-lg font-semibold transition-colors duration-500",
                    last && run ? "text-primary" : "text-night-foreground",
                  )}
                  style={{ transitionDelay: last && run ? `${TRAVEL_MS}ms` : "0ms" }}
                >
                  {step.label}
                </h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-night-muted">
                  {step.detail}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
