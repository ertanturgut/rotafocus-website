import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./site-data";
import logoMark from "@/assets/rotafocus-mark.svg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <a href="/#hero" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logoMark}
            alt="Rotafocus logosu"
            width={32}
            height={32}
            className="h-7 w-7 shrink-0 object-contain"
          />
          <span className="truncate font-logo text-xl font-extrabold leading-none tracking-[-0.045em] lowercase">
            rotafocus
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <span className="size-1 rounded-full bg-border" aria-hidden="true" />
          <a
            href="/rota-takvim"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Rota Takvim
          </a>
          <a
            href="/support"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Destek
          </a>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button
            asChild
            variant="hero"
            size="xl"
            className="hidden h-11 px-5 text-sm sm:inline-flex"
          >
            <a href="/#iletisim">
              Projenizi Konuşalım <ArrowRight className="size-4" />
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary/50 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/rota-takvim"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Rota Takvim
            </a>
            <a
              href="/support"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Destek
            </a>
            <Button asChild variant="hero" size="xl" className="mt-3 w-full">
              <a href="/#iletisim" onClick={() => setOpen(false)}>
                Projenizi Konuşalım <ArrowRight className="size-4" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
