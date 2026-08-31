import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Mail, LifeBuoy } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const TITLE = "Rota Takvim | Dini Günler ve Resmî Tatiller";
const DESCRIPTION =
  "Rota Takvim ile dini günleri, kandilleri, bayramları, milli günleri ve Türkiye'deki resmî tatilleri kolayca takip edin.";
const SUPPORT_EMAIL = "destek@rotafocus.com";
const DOMAIN = "https://rotafocus.lovable.app";

const FAQS = [
  {
    q: "Rota Takvim nedir?",
    a: "Rota Takvim, Türkiye'deki resmi tatilleri, dini bayramları, kandilleri ve önemli günleri takip etmenizi sağlayan bir takvim uygulamasıdır.",
  },
  {
    q: "Uygulama hangi tarihleri gösterir?",
    a: "Uygulama resmi tatilleri, dini bayramları, kandilleri ve önemli günleri takvim üzerinde gösterir.",
  },
  {
    q: "Hicri tarih gösteriliyor mu?",
    a: "Evet. Takvimde seçilen günün Hicri tarihi de gösterilir.",
  },
  {
    q: "Uygulama internet bağlantısı gerektiriyor mu?",
    a: "Takvim ve özel gün bilgileri uygulama içerisinde yer alan veriler üzerinden sunulur.",
  },
  {
    q: "Bildirimler nasıl çalışır?",
    a: "Bildirim özelliği uygulamanın ilgili ayarları üzerinden yönetilebilir.",
  },
];

export const Route = createFileRoute("/rota-takvim")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:url", content: `${DOMAIN}/rota-takvim` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/rota-takvim` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: RotaTakvimPage,
});

function RotaTakvimPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Rota Takvim"
          title={
            <>
              Dini Günler, Tatiller ve{" "}
              <span className="text-gradient">Takvim</span>
            </>
          }
          description="Rota Takvim; dini günleri, kandilleri, bayramları, milli günleri ve resmi tatilleri kolayca takip etmenizi sağlayan modern bir takvim uygulamasıdır."
        />

        <section id="destek" className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <SectionHeading
                eyebrow="Destek"
                title="Rota Takvim ile ilgili soru, öneri veya teknik bir sorun yaşıyorsanız bizimle iletişime geçebilirsiniz."
              />
              <Reveal delay={120} className="space-y-4">
                <div className="glass-card flex items-center gap-4 rounded-2xl p-5 hover:translate-y-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <LifeBuoy className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Destek Hattı
                    </p>
                    <p className="mt-1 text-base text-muted-foreground sm:text-lg">
                      Rota Takvim destek ekibi sorularınızı yanıtlamaktan
                      memnuniyet duyar.
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="glass-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Mail className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                      E-posta
                    </span>
                    <span className="block truncate text-lg font-medium">
                      {SUPPORT_EMAIL}
                    </span>
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Yardım"
              title="Sık Sorulan Sorular"
              align="center"
              className="mb-12"
            />
            <Reveal delay={120}>
              <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card/40 backdrop-blur-md">
                {FAQS.map((item) => (
                  <details
                    key={item.q}
                    className="group px-6 py-5 sm:px-8 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                      {item.q}
                      <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="glass-card flex flex-col items-start gap-4 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 hover:translate-y-0">
                <div>
                  <p className="text-xs tracking-widest text-primary uppercase">
                    İletişim
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                    Destek talepleriniz için bizimle iletişime geçin
                  </p>
                </div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Mail className="size-4" /> {SUPPORT_EMAIL}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
