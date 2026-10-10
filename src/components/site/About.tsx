import logoMark from "@/assets/rotafocus-mark.svg";

export function About() {
  return (
    <section id="hakkimizda" className="scroll-mt-14 py-24 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <img src={logoMark} alt="" width={56} height={56} className="mx-auto size-14" />
        <h2 className="mt-8 text-3xl leading-[1.15] font-bold tracking-[-0.025em] text-balance sm:text-5xl">
          rotafocus, yapay zekâyı, kreatif üretimi ve teknolojiyi tek çatıda buluşturan
          yeni nesil bir stüdyo.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Amacımız basit: işletmelerin dijitalde daha güçlü görünmesi, daha hızlı üretmesi ve
          daha verimli çalışması. Büyük ajans bütçeleri olmadan.
        </p>
      </div>
    </section>
  );
}
