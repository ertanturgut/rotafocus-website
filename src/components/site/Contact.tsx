import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EMAIL, PHONE_DISPLAY, SERVICE_OPTIONS, WHATSAPP_URL } from "./site-data";

export function Contact() {
  const [service, setService] = useState(SERVICE_OPTIONS[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Rotafocus — ${service} talebi`;
    const body = [
      `Ad Soyad: ${data.get("name")}`,
      `E-posta: ${data.get("email")}`,
      `Telefon: ${data.get("phone")}`,
      `Şirket / Marka: ${data.get("company")}`,
      `Hizmet: ${service}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Mesajınız hazırlandı", {
      description: "E-posta uygulamanız açılıyor. Dilerseniz WhatsApp'tan da yazabilirsiniz.",
    });
    form.reset();
  }

  return (
    <section id="iletisim" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <SectionHeading eyebrow="İletişim" title="Bir fikriniz mi var? Konuşalım." />
            <Reveal className="mt-10 space-y-3" delay={100}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <MessageCircle className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    WhatsApp
                  </span>
                  <span className="block truncate text-lg font-medium">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="glass-card flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    E-posta
                  </span>
                  <span className="block truncate text-lg font-medium">{EMAIL}</span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-6 sm:p-9 hover:translate-y-0"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input id="name" name="name" required placeholder="Adınız Soyadınız" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@mail.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="05xx xxx xx xx" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Şirket / Marka</Label>
                  <Input id="company" name="company" placeholder="Marka adınız" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Label>Hizmet seçimi</Label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setService(option)}
                      aria-pressed={service === option}
                      className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 aria-pressed:border-primary aria-pressed:bg-primary/15 aria-pressed:text-foreground"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="message">Proje hakkında kısa bilgi</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hedefinizi ve ihtiyacınızı birkaç cümleyle anlatın."
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
                Mesaj Gönder <ArrowRight className="size-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
