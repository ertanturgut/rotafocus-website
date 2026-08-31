import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./site-data";
import heroBg from "@/assets/hero-bg.jpg";

const TRUST = ["AI Content", "Digital Marketing", "Automation", "Web Design"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1200}
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-45"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,transparent_10%,var(--background)_75%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[36rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] float-slow" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs tracking-wide text-muted-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-primary" />
            AI Content Studio &amp; Digital Growth Agency
          </span>

          <h1 className="mt-7 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Yapay zekâ ile markanızı{" "}
            <span className="text-gradient">geleceğe taşıyoruz.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            İçerik üretimi, dijital pazarlama, web tasarım ve AI otomasyon
            çözümleriyle işletmenizin dijital büyümesini hızlandırıyoruz.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#iletisim">
                Projenizi Başlatalım <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp'tan Ulaşın
              </a>
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
            {TRUST.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span className="size-1 rounded-full bg-primary/60" />}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
