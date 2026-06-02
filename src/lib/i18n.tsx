import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ms";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.portfolio": "Portfolio",
    "nav.videos": "Videos",
    "nav.process": "Process",
    "nav.coverage": "Coverage",
    "nav.faq": "FAQ",
    "cta.getQuotation": "Get Quotation",
    "cta.contactUs": "Contact Us",
    "cta.viewProjects": "View Projects",
    "cta.requestQuotation": "Request Quotation",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "lang.toggle": "BM",
    "lang.label": "Language",

    "footer.tagline": "CIDB-licensed construction across Negeri Sembilan and Melaka. From foundation pour to final handover, built to last.",
    "footer.contact": "Contact",
    "footer.explore": "Explore",
    "footer.rights": "All rights reserved.",

    "home.eyebrow": "Established 2000 · Negeri Sembilan & Melaka",
    "home.h1.a": "Building the",
    "home.h1.b": "Future",
    "home.h1.c": "with Local Precision.",
    "home.intro": "Impian Bina delivers residential, infrastructure, and government contracts across Negeri Sembilan and Melaka — from concrete pour to finishing touch.",
    "home.services.title": "Core Services",
    "home.services.meta": "01 — 05 Expertise",
    "home.services.seeAll": "See all services →",
    "home.featured.title": "Featured Projects",
    "home.featured.viewAll": "View all →",
    "home.coverage.eyebrow": "Service Area",
    "home.coverage.title": "Negeri Sembilan\n& Melaka.",
    "home.coverage.body": "Headquartered in Seremban with a regional office in Melaka City. Projects outside these states require a minimum contract value of RM250,000.",
    "home.coverage.link": "Coverage details →",
    "home.coverage.minProject": "Min. Project",
    "home.coverage.minNote": "For projects outside NS & Melaka",
    "home.cta.eyebrow": "Ready to build?",
    "home.cta.title": "Let's pour the foundation of your next project.",
  },
  ms: {
    "nav.about": "Tentang",
    "nav.services": "Perkhidmatan",
    "nav.certifications": "Pensijilan",
    "nav.projects": "Projek",
    "nav.portfolio": "Portfolio",
    "nav.videos": "Video",
    "nav.process": "Proses",
    "nav.coverage": "Liputan",
    "nav.faq": "Soalan Lazim",
    "cta.getQuotation": "Dapatkan Sebut Harga",
    "cta.contactUs": "Hubungi Kami",
    "cta.viewProjects": "Lihat Projek",
    "cta.requestQuotation": "Mohon Sebut Harga",
    "menu.open": "Buka menu",
    "menu.close": "Tutup menu",
    "lang.toggle": "EN",
    "lang.label": "Bahasa",

    "footer.tagline": "Kontraktor berlesen CIDB di seluruh Negeri Sembilan dan Melaka. Dari tuangan asas sehingga serahan akhir, dibina untuk tahan lama.",
    "footer.contact": "Hubungi",
    "footer.explore": "Terokai",
    "footer.rights": "Hak cipta terpelihara.",

    "home.eyebrow": "Ditubuhkan 2000 · Negeri Sembilan & Melaka",
    "home.h1.a": "Membina",
    "home.h1.b": "Masa Depan",
    "home.h1.c": "dengan Ketelitian Tempatan.",
    "home.intro": "Impian Bina menyiapkan projek kediaman, infrastruktur dan kerajaan di Negeri Sembilan dan Melaka — dari tuangan konkrit hingga kemasan akhir.",
    "home.services.title": "Perkhidmatan Utama",
    "home.services.meta": "01 — 05 Kepakaran",
    "home.services.seeAll": "Lihat semua perkhidmatan →",
    "home.featured.title": "Projek Pilihan",
    "home.featured.viewAll": "Lihat semua →",
    "home.coverage.eyebrow": "Kawasan Liputan",
    "home.coverage.title": "Negeri Sembilan\n& Melaka.",
    "home.coverage.body": "Ibu pejabat di Seremban dengan pejabat serantau di Bandaraya Melaka. Projek di luar negeri ini memerlukan nilai kontrak minimum RM250,000.",
    "home.coverage.link": "Maklumat liputan →",
    "home.coverage.minProject": "Projek Minimum",
    "home.coverage.minNote": "Untuk projek di luar NS & Melaka",
    "home.cta.eyebrow": "Sedia untuk membina?",
    "home.cta.title": "Mari kita tuangkan asas projek anda yang seterusnya.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ib-lang") as Lang | null;
      if (saved === "en" || saved === "ms") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "ms" ? "ms" : "en";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("ib-lang", l); } catch {}
  };

  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) return { lang: "en" as Lang, setLang: () => {}, t: (k: string) => dictionaries.en[k] ?? k };
  return ctx;
}
