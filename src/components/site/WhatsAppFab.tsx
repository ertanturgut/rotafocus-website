import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./site-data";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan Ulaşın"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-night px-4 py-3.5 text-sm font-semibold text-night-foreground shadow-[0_12px_32px_-12px_rgb(11_22_38/0.55)] transition-colors duration-200 hover:bg-[#16243a] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5 shrink-0 text-primary" />
      <span className="hidden sm:inline">WhatsApp'tan Ulaşın</span>
    </a>
  );
}
