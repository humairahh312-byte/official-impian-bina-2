import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — SSM, CIDB, SPKK, STB | Impian Bina" },
      { name: "description", content: "Impian Bina is registered and certified: SSM company registration, CIDB Grade G1 contractor licence, SPKK certification, and STB Bumiputera status." },
      { property: "og:title", content: "Certifications & Licences — Impian Bina" },
      { property: "og:description", content: "SSM, CIDB G1, SPKK, and STB certified contractor." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

// Replaced static strings with translation keys
const certs = [
  {
    code: "SSM",
    issuerKey: "certs.1.issuer",
    regKey: "certs.1.reg",
    bodyKey: "certs.1.body",
    imgPath: "/certs/ssm-cert.webp", 
    pdfPath: "/certs/ssm-cert.pdf",   
  },
  {
    code: "CIDB",
    issuerKey: "certs.2.issuer",
    regKey: "certs.2.reg",
    bodyKey: "certs.2.body",
    imgPath: "/certs/cidb-cert.webp", 
    pdfPath: "/certs/cidb-cert.pdf",   
  },
  {
    code: "SPKK",
    issuerKey: "certs.3.issuer",
    regKey: "certs.3.reg",
    bodyKey: "certs.3.body",
    imgPath: "/certs/spkk-cert.webp", 
    pdfPath: "/certs/spkk-cert.pdf",   
  },
  {
    code: "STB",
    issuerKey: "certs.4.issuer",
    regKey: "certs.4.reg",
    bodyKey: "certs.4.body",
    imgPath: "/certs/stb-cert.webp", 
    pdfPath: "/certs/stb-cert.pdf",   
  },
];

function CertificationsPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("certs.hero.eyebrow")}
        title={t("certs.hero.title")}
        intro={t("certs.hero.intro")}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12">
          {certs.map((c) => (
            <article key={c.code} className="bg-card border-2 border-orange-500 flex flex-col group">
              
              <div className="relative w-full aspect-[1/1.4] bg-white border-b-2 border-orange-500 overflow-hidden flex items-center justify-center p-6">
                <img 
                  src={c.imgPath} 
                  alt={`${c.code} Certificate`} 
                  className="w-full h-full object-contain shadow-sm mix-blend-multiply"
                  loading="lazy"
                />
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase mb-1">{t(c.issuerKey)}</h2>
                    <p className="mono text-xs uppercase tracking-widest text-orange-600">{t(c.regKey)}</p>
                  </div>
                  <div className="size-10 shrink-0 border-2 border-orange-500 text-orange-600 flex items-center justify-center mono text-xs bg-orange-50">
                    ✓
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {t(c.bodyKey)}
                </p>
                
                <a
                  href={c.pdfPath}
                  download={`${c.code}_Certificate_ImpianBina.pdf`}
                  className="mt-auto inline-flex w-fit items-center justify-center border border-foreground/20 px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                >
                  {t("certs.dl")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}