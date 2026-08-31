import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./site-data";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan Ulaşın"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5 shrink-0" />
      <span className="hidden sm:inline">WhatsApp'tan Ulaşın</span>
    </a>
  );
}
