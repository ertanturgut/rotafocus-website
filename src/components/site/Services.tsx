import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "./site-data";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

type Tone = "night" | "paper";

const TILES: Record<
  string,
  { headline: string; image: string; alt: string; tone: Tone; wide?: boolean }
> = {
  "AI İçerik Üretimi": {
    headline: "Çekim yok. Bekleme yok. Etki var.",
    image: work1,
    alt: "Yapay zekâ ile üretilmiş turuncu ışıklı reklam görseli",
    tone: "night",
    wide: true,
  },
  "Sosyal Medya Yönetimi": {
    headline: "Her gün, tutarlı bir akış.",
    image: work2,
    alt: "Telefon ekranlarında marka sosyal medya akışı",
    tone: "paper",
  },
  "AI Otomasyon": {
    headline: "Tekrarlayan işler kendi kendine.",
    image: work4,
    alt: "Birbirine bağlı noktalarla otomasyon ağı görseli",
    tone: "night",
  },
  "Web Tasarım": {
    headline: "Hızlı açılan, satan siteler.",
    image: work5,
    alt: "Dizüstü bilgisayarda modern bir kurumsal web sitesi",
    tone: "night",
  },
  "Dijital Pazarlama": {
    headline: "Bütçeniz doğru kişiye ulaşsın.",
    image: work6,
    alt: "Yükselen turuncu performans grafiği",
    tone: "paper",
  },
};

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-14 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Markanız için gereken her şey."
          description="Stratejiden içerik üretimine, otomasyondan dijital pazarlamaya kadar tüm dijital işlerinizi tek noktadan yönetiyoruz."
        />
      </div>

      <ul className="mx-auto mt-14 grid max-w-[90rem] gap-3 px-3 sm:mt-16 sm:grid-cols-2 sm:px-6">
        {SERVICES.map((service) => {
          const tile = TILES[service.title];
          if (!tile) return null;
          const night = tile.tone === "night";
          return (
            <li
              key={service.title}
              className={cn(
                "flex flex-col overflow-hidden rounded-[1.75rem] text-center",
                night ? "bg-night text-night-foreground" : "bg-paper text-foreground",
                tile.wide && "sm:col-span-2",
              )}
            >
              <div className="px-6 pt-12 sm:px-10 sm:pt-14">
                <h3 className="text-base font-semibold sm:text-lg">{service.title}</h3>
                <p
                  className={cn(
                    "mx-auto mt-2 max-w-xl font-display font-bold tracking-[-0.03em] text-balance",
                    tile.wide
                      ? "text-4xl leading-[1.05] sm:text-6xl"
                      : "text-3xl leading-[1.08] sm:text-4xl",
                  )}
                >
                  {tile.headline}
                </p>
                <p
                  className={cn(
                    "mx-auto mt-4 max-w-md text-base leading-relaxed text-pretty",
                    night ? "text-night-muted" : "text-muted-foreground",
                  )}
                >
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-center gap-5 text-[0.95rem]">
                  <a
                    href="#iletisim"
                    className="inline-flex h-10 items-center rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                  >
                    Teklif alın
                  </a>
                  <a
                    href="#calismalarimiz"
                    className={cn(
                      "font-medium underline-offset-4 hover:underline",
                      night ? "text-night-foreground" : "text-foreground",
                    )}
                  >
                    Örnekleri görün
                  </a>
                </div>
              </div>
              <div className={cn("mt-10 flex-1", tile.wide ? "px-0" : "px-6 sm:px-10")}>
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className={cn(
                    "h-full w-full object-cover",
                    tile.wide ? "aspect-[16/9] sm:aspect-[21/8]" : "aspect-[4/3] rounded-t-2xl",
                  )}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
