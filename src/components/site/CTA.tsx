import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./site-data";

export function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-border px-6 py-16 text-center sm:px-14 sm:py-24">
            <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-30" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 size-[30rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
            <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Markanızın bir sonraki adımını birlikte tasarlayalım.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Yeni bir marka mı oluşturuyorsunuz, dijital görünümünüzü mü
              yeniliyorsunuz veya işletmenizde AI otomasyonuna mı geçmek istiyorsunuz?
              Konuşalım.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <a href="#iletisim">
                  Projenizi Konuşalım <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp'tan Ulaşın
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
