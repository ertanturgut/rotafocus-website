import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare, Shield } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Rota Takvim Destek | RotaFocus";
const DESCRIPTION =
  "Rota Takvim uygulaması için destek, geri bildirim ve iletişim bilgileri.";
const SUPPORT_EMAIL = "destek@rotafocus.com";
const DOMAIN = "https://rotafocus.lovable.app";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:url", content: `${DOMAIN}/support` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/support` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Rota Takvim Destek",
          description:
            "Rota Takvim uygulaması için destek, geri bildirim ve iletişim bilgileri.",
          url: `${DOMAIN}/support`,
          mainEntity: {
            "@type": "Organization",
            name: "RotaFocus",
            email: SUPPORT_EMAIL,
            url: DOMAIN,
          },
        }),
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Destek"
          title={
            <>
              Rota Takvim{" "}
              <span className="text-gradient">Destek</span>
            </>
          }
          description="Rota Takvim hakkında destek almak, bir sorun bildirmek, geri bildirim göndermek veya yeni bir özellik önermek için bizimle iletişime geçebilirsiniz."
        />

        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <div className="glass-card rounded-3xl p-8 sm:p-12">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <MessageSquare className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Destek Hattı
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                      Bizimle İletişime Geçin
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Rota Takvim hakkında destek almak, bir sorun bildirmek, geri
                  bildirim göndermek veya yeni bir özellik önermek için
                  bizimle iletişime geçebilirsiniz.
                </p>

                <div className="mt-8 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-md sm:p-8">
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="group flex items-center gap-4"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                      <Mail className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs tracking-widest text-muted-foreground uppercase">
                        E-posta
                      </p>
                      <p className="mt-0.5 truncate text-lg font-medium text-foreground transition-colors group-hover:text-primary sm:text-xl">
                        {SUPPORT_EMAIL}
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 backdrop-blur-md sm:p-8">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="font-medium text-foreground">
                      Hızlı destek için:
                    </span>{" "}
                    Mesajınızda kullandığınız iPhone modeli, iOS sürümü ve
                    karşılaştığınız sorunu mümkün olduğunca açık şekilde
                    belirtmeniz, size daha hızlı yardımcı olmamızı sağlar.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 glass-card rounded-3xl p-8 sm:p-12">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Rota Takvim; resmî tatiller, dini günler, kandiller, bayramlar
                  ve önemli özel günleri takip etmenize yardımcı olan bir takvim
                  uygulamasıdır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <a
                href="/privacy"
                className="mt-10 flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/40 p-5 text-sm text-muted-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-foreground sm:text-base"
              >
                <Shield className="size-4 text-primary" />
                Gizlilik Politikası
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
