import { Bell, Bot, Database, Users, Workflow, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  { icon: Users, label: "Müşteri", detail: "Talep & ilk temas" },
  { icon: Bot, label: "AI", detail: "Anlama & sınıflandırma" },
  { icon: Workflow, label: "Otomasyon", detail: "Süreç tetikleme" },
  { icon: Bell, label: "Bildirim", detail: "Anlık uyarı" },
  { icon: Database, label: "CRM / WhatsApp / E-posta", detail: "Kayıt & iletişim" },
  { icon: CheckCircle2, label: "Sonuç", detail: "Ölçülebilir çıktı" },
];

export function Automation() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_25%,var(--background)_80%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="AI Otomasyon"
          align="center"
          title="İşletmenizi sadece dijitalleştirmeyin. Otomatikleştirin."
          description="Tekrarlayan işlerinizi yapay zekâ ve otomasyonlarla sistemleştirin. Daha az manuel iş, daha fazla verimlilik."
        />

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.label} delay={i * 80}>
              <div className="glass-card relative flex h-full items-start gap-4 rounded-2xl p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <step.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[0.7rem] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 leading-snug font-semibold">{step.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
