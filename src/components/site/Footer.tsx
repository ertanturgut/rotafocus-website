import { Instagram, Linkedin, Dribbble } from "lucide-react";
import { EMAIL, NAV_LINKS, ROTA_LINKS, PHONE_DISPLAY, SOCIAL_LINKS, WHATSAPP_URL } from "./site-data";
import logoMark from "@/assets/rotafocus-mark.svg";

const SOCIAL_ICONS = {
  Instagram,
  LinkedIn: Linkedin,
  Behance: Dribbble,
} as const;

const linkClass = "text-muted-foreground transition-colors hover:text-foreground hover:underline";

export function Footer() {
  // Only show social profiles that have a real address.
  const socials = SOCIAL_LINKS.filter((s) => s.href && s.href !== "#");

  return (
    <footer className="bg-background text-sm">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/#hero" className="inline-flex items-center gap-2" aria-label="rotafocus ana sayfa">
              <img src={logoMark} alt="" loading="lazy" width={24} height={24} className="size-6" />
              <span className="font-logo text-[1.15rem] leading-none font-extrabold tracking-[-0.045em] lowercase">
                rotafocus
              </span>
            </a>
            <p className="mt-4 max-w-xs text-muted-foreground">
              İşletmeler için yapay zekâ destekli içerik, pazarlama ve otomasyon stüdyosu.
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-2">
                {socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid size-10 place-items-center rounded-full bg-paper text-foreground transition-colors hover:bg-accent"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <nav aria-label="Alt menü">
            <h2 className="font-sans text-sm font-semibold">Keşfedin</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Rota Takvim">
            <h2 className="font-sans text-sm font-semibold">Rota Takvim</h2>
            <ul className="mt-4 space-y-2.5">
              {ROTA_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-sm font-semibold">İletişim</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 Rotafocus. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
