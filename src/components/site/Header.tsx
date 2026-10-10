import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./site-data";
import logoMark from "@/assets/rotafocus-mark.svg";

const EXTRA_LINKS = [
  { label: "Rota Takvim", href: "/rota-takvim" },
  { label: "Destek", href: "/support" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [...NAV_LINKS.filter((l) => l.href !== "/#hero"), ...EXTRA_LINKS];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="/#hero" className="flex shrink-0 items-center gap-2" aria-label="rotafocus ana sayfa">
          <img src={logoMark} alt="" width={24} height={24} className="size-6" />
          <span className="font-logo text-[1.15rem] leading-none font-extrabold tracking-[-0.045em] lowercase">
            rotafocus
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.82rem] text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#iletisim"
            className="hidden h-8 items-center rounded-full bg-primary px-4 text-[0.82rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            Teklif alın
          </a>
          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 grid size-11 place-items-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="h-[calc(100svh-3.5rem)] overflow-y-auto bg-background px-5 pt-4 pb-10 sm:px-8 lg:hidden"
          aria-label="Mobil menü"
        >
          <ul className="mx-auto max-w-6xl">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-3xl font-semibold tracking-tight"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#iletisim"
            onClick={() => setOpen(false)}
            className="mx-auto mt-8 flex h-12 max-w-6xl items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
          >
            Teklif alın
          </a>
        </nav>
      )}
    </header>
  );
}
