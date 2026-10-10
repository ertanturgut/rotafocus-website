import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./site-data";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="hero" className="overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="rise text-base font-medium text-muted-foreground sm:text-lg">
          İstanbul'dan bir yapay zekâ stüdyosu
        </p>
        <h1
          className="rise mx-auto mt-4 max-w-4xl text-[2.6rem] leading-[1.02] font-bold tracking-[-0.035em] text-balance sm:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: "80ms" }}
        >
          Markanız, yapay zekâyla bir adım önde.
        </h1>
        <p
          className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          Restoranlar, sigorta acenteleri ve yerel işletmeler için içerik üretimi, sosyal
          medya ve iş otomasyonunu tek stüdyoda topluyoruz.
        </p>
        <div
          className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <a href="#iletisim">Ücretsiz görüşme planlayın</a>
          </Button>
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp'tan yazın
            </a>
          </Button>
        </div>
      </div>

      <div
        className="rise mx-auto mt-16 max-w-[90rem] px-3 sm:mt-20 sm:px-6"
        style={{ animationDelay: "380ms" }}
      >
        <div className="relative overflow-hidden rounded-[1.75rem] bg-night sm:rounded-[2.25rem]">
          <img
            src={heroBg}
            alt="Lacivert zemin üzerinde turuncu ışık hatlarıyla soyut stüdyo görseli"
            width={1920}
            height={1200}
            fetchPriority="high"
            className="aspect-[4/5] w-full object-cover sm:aspect-[16/7]"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-night/90 to-transparent p-6 text-left sm:flex-row sm:items-end sm:justify-between sm:p-10">
            <p className="font-display text-2xl font-semibold tracking-tight text-night-foreground sm:text-3xl">
              Fikirden yayına, tek ekip.
            </p>
            <p className="max-w-sm text-sm text-night-muted sm:text-right sm:text-base">
              Strateji, üretim ve ölçüm aynı masada; siz işinize odaklanırken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
