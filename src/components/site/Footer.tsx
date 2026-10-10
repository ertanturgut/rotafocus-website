import { Instagram, Linkedin, Dribbble } from "lucide-react";
import { EMAIL, NAV_LINKS, ROTA_LINKS, PHONE_DISPLAY, SOCIAL_LINKS, WHATSAPP_URL } from "./site-data";
import logoMark from "@/assets/rotafocus-mark.svg";

const SOCIAL_ICONS = {
  Instagram,
  LinkedIn: Linkedin,
  Behance: Dribbble,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-sidebar">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoMark}
                alt="Rotafocus logosu"
                loading="lazy"
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
              />
              <span className="font-logo text-xl font-extrabold leading-none tracking-[-0.045em] lowercase">
                rotafocus
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI Content Studio &amp; Digital Growth Agency
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Alt menü">
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Menü
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Rota Takvim">
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Rota Takvim
            </h2>
            <ul className="mt-5 space-y-3">
              {ROTA_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              İletişim
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-8 text-xs text-muted-foreground">
          © 2026 Rotafocus. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
