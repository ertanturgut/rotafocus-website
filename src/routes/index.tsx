import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, EMAIL, PHONE_DISPLAY } from "@/components/site/site-data";
import logoMark from "@/assets/rotafocus-logo.png";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Work } from "@/components/site/Work";
import { Automation } from "@/components/site/Automation";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const TITLE = "Rotafocus | AI Content Studio & Digital Growth Agency";
const DESCRIPTION =
  "Rotafocus; yapay zekâ destekli içerik üretimi, dijital pazarlama, web tasarım ve AI otomasyon çözümleri sunan yeni nesil dijital ajanstır.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "/#organization",
              name: "Rotafocus",
              alternateName: "rotafocus",
              url: "/",
              logo: logoMark,
              image: logoMark,
              description: DESCRIPTION,
              email: EMAIL,
              telephone: PHONE_DISPLAY,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: EMAIL,
                  telephone: PHONE_DISPLAY,
                  availableLanguage: ["tr", "en"],
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "/#website",
              url: "/",
              name: "Rotafocus",
              inLanguage: "tr-TR",
              description: DESCRIPTION,
              publisher: { "@id": "/#organization" },
            },
            {
              "@type": "ProfessionalService",
              "@id": "/#service",
              name: "Rotafocus",
              url: "/",
              image: logoMark,
              description: DESCRIPTION,
              parentOrganization: { "@id": "/#organization" },
              areaServed: "TR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Hizmetler",
                itemListElement: SERVICES.map((service) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                  },
                })),
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Work />
        <Automation />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
