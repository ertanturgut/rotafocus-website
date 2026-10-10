import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const WHATSAPP_URL = "https://wa.me/905071272253";
export const PHONE_DISPLAY = "0507 127 22 53";
export const EMAIL = "info@rotafocus.com";

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/#hero" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Çalışmalarımız", href: "/#calismalarimiz" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "İletişim", href: "/#iletisim" },
];

export const ROTA_LINKS = [
  { label: "Rota Takvim", href: "/rota-takvim" },
  { label: "Destek", href: "/support" },
  { label: "Gizlilik Politikası", href: "/privacy" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
];

export const SERVICES = [
  {
    number: "01",
    icon: "sparkles",
    title: "AI İçerik Üretimi",
    description:
      "Yapay zekâ destekli görsel, video ve sosyal medya içerikleriyle markanızı daha güçlü ve dikkat çekici hale getiriyoruz.",
  },
  {
    number: "02",
    icon: "share",
    title: "Sosyal Medya Yönetimi",
    description:
      "Markanız için strateji, içerik planlaması, tasarım, video ve sosyal medya yönetimi.",
  },
  {
    number: "03",
    icon: "workflow",
    title: "AI Otomasyon",
    description:
      "Tekrarlayan iş süreçlerini yapay zekâ ve otomasyonlarla otomatikleştirerek zaman ve maliyet tasarrufu sağlıyoruz.",
  },
  {
    number: "04",
    icon: "layout",
    title: "Web Tasarım",
    description:
      "Modern, hızlı, mobil uyumlu ve dönüşüm odaklı web siteleri tasarlıyoruz.",
  },
  {
    number: "05",
    icon: "trending",
    title: "Dijital Pazarlama",
    description:
      "Markanızın daha fazla müşteriye ulaşması için performans odaklı dijital pazarlama çözümleri geliştiriyoruz.",
  },
] as const;

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Kinetik Kampanya",
    category: "Yapay zekâ reklamı",
    description: "Yapay zekâ ile üretilen reklam görselleri ve kampanya konsepti.",
    image: work1,
  },
  {
    title: "Feed Sistemi",
    category: "Sosyal medya",
    description: "Aylık içerik planı, tasarım sistemi ve topluluk yönetimi.",
    image: work2,
  },
  {
    title: "Monokrom Kimlik",
    category: "Marka tasarımı",
    description: "Marka kimliği, tipografi sistemi ve kurumsal uygulamalar.",
    image: work3,
  },
  {
    title: "Akış Motoru",
    category: "AI otomasyon",
    description: "Talep toplama, yanıtlama ve CRM aktarımı için uçtan uca otomasyon.",
    image: work4,
  },
  {
    title: "Dönüşüm Odaklı Site",
    category: "Web tasarım",
    description: "Hızlı, mobil öncelikli ve dönüşüm odaklı kurumsal web deneyimi.",
    image: work5,
  },
  {
    title: "Performans Sprinti",
    category: "Dijital kampanya",
    description: "Performans pazarlama kurgusu, kreatif testler ve raporlama.",
    image: work6,
  },
];

export const ADVANTAGES = [
  {
    number: "01",
    title: "AI First",
    description: "Yapay zekâyı yaratıcı süreçlerimizin merkezine koyuyoruz.",
  },
  {
    number: "02",
    title: "Kreatif + Teknoloji",
    description: "Tasarım ve teknolojiyi bir araya getiriyoruz.",
  },
  {
    number: "03",
    title: "Sonuç Odaklı",
    description:
      "Sadece güzel görünen değil, işletmeye değer katan işler üretiyoruz.",
  },
  {
    number: "04",
    title: "Hızlı Üretim",
    description:
      "AI destekli üretim süreçleriyle daha hızlı ve verimli içerikler oluşturuyoruz.",
  },
];

export const PROCESS = [
  {
    number: "01",
    title: "Keşif",
    description: "Markanızı, hedeflerinizi ve ihtiyaçlarınızı analiz ediyoruz.",
  },
  {
    number: "02",
    title: "Strateji",
    description: "Size özel dijital büyüme stratejisi oluşturuyoruz.",
  },
  {
    number: "03",
    title: "Üretim",
    description: "AI, tasarım, video ve teknolojiyle projeyi hayata geçiriyoruz.",
  },
  {
    number: "04",
    title: "Büyüme",
    description: "Sonuçları analiz ediyor ve sürekli geliştiriyoruz.",
  },
];

export const SERVICE_OPTIONS = [
  "AI İçerik Üretimi",
  "Sosyal Medya Yönetimi",
  "AI Otomasyon",
  "Web Tasarım",
  "Dijital Pazarlama",
  "Diğer",
];
