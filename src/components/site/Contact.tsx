import { useState, type FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, PHONE_DISPLAY, SERVICE_OPTIONS, WHATSAPP_URL } from "./site-data";

const fieldClass =
  "h-12 rounded-xl border-input bg-background px-4 text-base shadow-none focus-visible:ring-2 focus-visible:ring-ring";

export function Contact() {
  const [service, setService] = useState(SERVICE_OPTIONS[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Rotafocus: ${service} talebi`;
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
    <section id="iletisim" className="scroll-mt-14 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-6xl">
            Bir sonraki adımı birlikte atalım.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Yeni bir marka mı kuruyorsunuz, görünümünüzü mü yeniliyorsunuz, yoksa
            otomasyona mı geçmek istiyorsunuz? Kısaca anlatın, size dönelim.
          </p>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-[1.5rem] bg-night p-6 text-night-foreground"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-night-muted">En hızlı yol: WhatsApp</span>
                <span className="block truncate text-lg font-semibold group-hover:underline">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 rounded-[1.5rem] bg-background p-6"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-paper text-foreground">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">E-posta</span>
                <span className="block truncate text-lg font-semibold group-hover:underline">
                  {EMAIL}
                </span>
              </span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.75rem] bg-background p-6 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" name="name" required autoComplete="name" placeholder="Adınız Soyadınız" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="ornek@mail.com"
                  className={fieldClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="05xx xxx xx xx" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Şirket / Marka</Label>
                <Input id="company" name="company" autoComplete="organization" placeholder="Marka adınız" className={fieldClass} />
              </div>
            </div>

            <fieldset className="mt-7">
              <legend className="text-sm font-medium">Hangi konuda destek istiyorsunuz?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setService(option)}
                    aria-pressed={service === option}
                    className="h-10 rounded-full border border-input px-4 text-[0.92rem] text-foreground transition-colors hover:border-foreground/40 aria-pressed:border-night aria-pressed:bg-night aria-pressed:text-night-foreground"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-7 space-y-2">
              <Label htmlFor="message">Projeniz hakkında kısa bilgi</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Hedefinizi ve ihtiyacınızı birkaç cümleyle anlatın."
                className="rounded-xl border-input bg-background px-4 py-3 text-base shadow-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <Button type="submit" variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
              Mesajı gönder
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
