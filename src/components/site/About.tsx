import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STATS = [
  { value: "AI-Powered", label: "İçerik Üretimi" },
  { value: "24/7", label: "Otomasyon" },
  { value: "100%", label: "Dijital Odak" },
];

export function About() {
  return (
    <section id="hakkimizda" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Hakkımızda"
            title="Rotafocus, markaların dijital geleceğini tasarlıyor."
          />
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Rotafocus; yapay zekâ, kreatif üretim ve dijital teknolojileri bir araya
              getiren yeni nesil bir AI Content Studio &amp; Digital Growth
              Agency'dir.
            </p>
            <p>
              Amacımız; işletmelerin dijital dünyada daha güçlü görünmesini, daha hızlı
              üretmesini ve daha verimli çalışmasını sağlamak.
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-4 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal as="li" key={stat.value} delay={i * 80}>
              <div className="glass-card h-full rounded-3xl p-8 text-center">
                <p className="text-2xl font-semibold tracking-tight text-gradient sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
