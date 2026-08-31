import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Rota Takvim Gizlilik Politikası | RotaFocus";
const DESCRIPTION =
  "Rota Takvim uygulamasının veri toplama, gizlilik ve kullanıcı bilgilerinin korunmasına ilişkin politikası.";
const SUPPORT_EMAIL = "destek@rotafocus.com";
const DOMAIN = "https://rotafocus.lovable.app";

const SECTIONS = [
  {
    heading: "Veri Toplama",
    body: "Rota Takvim uygulaması şu anda kullanıcılarından kişisel veri toplamaz, saklamaz veya üçüncü taraflarla paylaşmaz.",
  },
  {
    heading: "Uygulama Kullanımı",
    body: "Uygulama içerisinde takvim, resmi tatiller, dini bayramlar, kandiller ve diğer önemli günlere ilişkin bilgiler görüntülenir. Bu bilgiler uygulamanın temel işlevini sağlamak amacıyla kullanılır.",
  },
  {
    heading: "Konum Bilgileri",
    body: "Rota Takvim kullanıcıların konum bilgilerini toplamaz veya saklamaz.",
  },
  {
    heading: "Kişisel Bilgiler",
    body: "Ad, soyad, e-posta adresi, telefon numarası, adres veya benzeri kişisel bilgiler uygulama tarafından toplanmaz.",
  },
  {
    heading: "Analiz ve Reklam",
    body: "Rota Takvim'in mevcut sürümünde kullanıcı davranışlarını izleyen üçüncü taraf analiz servisleri veya kişiselleştirilmiş reklam servisleri kullanılmamaktadır.",
  },
  {
    heading: "Üçüncü Taraflarla Paylaşım",
    body: "Rota Takvim tarafından toplanan bir kullanıcı verisi bulunmadığından üçüncü taraflarla paylaşılacak kullanıcı verisi de bulunmamaktadır.",
  },
  {
    heading: "Bildirimler",
    body: "Uygulamanın yerel bildirim özellikleri kullanılabilir. Bildirimler cihaz üzerinde işletim sistemi tarafından yönetilir. Bildirimlerin kullanılabilmesi için kullanıcı tarafından cihaz üzerinden izin verilmesi gerekebilir.",
  },
  {
    heading: "Çocukların Gizliliği",
    body: "Rota Takvim çocuklardan bilerek kişisel veri toplamaz.",
  },
  {
    heading: "Gizlilik Politikasındaki Değişiklikler",
    body: "Bu gizlilik politikasında gelecekte yapılabilecek değişiklikler bu sayfa üzerinden yayınlanacaktır.",
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:url", content: `${DOMAIN}/privacy` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Gizlilik"
          title={
            <>
              Rota Takvim{" "}
              <span className="text-gradient">Gizlilik Politikası</span>
            </>
          }
        />

        <section className="relative py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="text-sm text-muted-foreground">
                Son Güncelleme: 31 Ağustos 2026
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                RotaFocus olarak kullanıcılarımızın gizliliğine önem veriyoruz.
                Rota Takvim uygulaması, dini günleri, resmi tatilleri ve önemli
                tarihleri görüntülemek amacıyla tasarlanmıştır.
              </p>
            </Reveal>

            <div className="mt-12 space-y-10">
              {SECTIONS.map((section, i) => (
                <Reveal key={section.heading} delay={i * 40}>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-14 rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md sm:p-10">
                <p className="text-xs tracking-widest text-primary uppercase">
                  İletişim
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Gizlilik politikası veya uygulama hakkında sorularınız için:
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-5" /> {SUPPORT_EMAIL}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  RotaFocus — Türkiye
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
