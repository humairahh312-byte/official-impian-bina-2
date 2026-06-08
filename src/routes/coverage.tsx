import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";
import coverageMap from "@/assets/coverage-map.webp";

export const Route = createFileRoute("/coverage")({
  head: () => ({
    meta: [
      { title: "Coverage Area — Negeri Sembilan & Melaka | Impian Bina" },
      { name: "description", content: "We exclusively serve Negeri Sembilan and Melaka. Projects outside these states require a minimum contract value of RM250,000." },
      { property: "og:title", content: "Coverage Area — Impian Bina" },
      { property: "og:description", content: "Negeri Sembilan and Melaka. RM250,000 minimum elsewhere." },
      { property: "og:url", content: "/coverage" },
    ],
    links: [{ rel: "canonical", href: "/coverage" }],
  }),
  component: CoveragePage,
});

// Replaced static text with translation keys
const regions = [
  { nameKey: "cov.reg.1.name", descKey: "cov.reg.1.desc" },
  { nameKey: "cov.reg.2.name", descKey: "cov.reg.2.desc" },
  { nameKey: "cov.reg.3.name", descKey: "cov.reg.3.desc" },
  { nameKey: "cov.reg.4.name", descKey: "cov.reg.4.desc" },
  { nameKey: "cov.reg.5.name", descKey: "cov.reg.5.desc" },
  { nameKey: "cov.reg.6.name", descKey: "cov.reg.6.desc" },
];

function CoveragePage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("cov.hero.eyebrow")}
        title={t("cov.hero.title")}
        intro={t("cov.hero.intro")}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="relative bg-card border border-foreground/10 p-6 overflow-hidden">
              <img
                src={coverageMap}
                alt="Map of Malaysia highlighting Negeri Sembilan and Melaka coverage area"
                loading="lazy"
                width={1334}
                height={734}
                className="w-full h-auto object-contain"
              />
              <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-4 text-center">
                {t("cov.map.caption")}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-primary text-primary-foreground p-6">
                <p className="mono text-[10px] uppercase tracking-widest opacity-70">{t("cov.map.primary")}</p>
                <p className="font-black text-lg tracking-tighter mt-1">Negeri Sembilan</p>
              </div>
              <div className="bg-accent text-accent-foreground p-6">
                <p className="mono text-[10px] uppercase tracking-widest opacity-70">{t("cov.map.primary")}</p>
                <p className="font-black text-lg tracking-tighter mt-1">Melaka</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-6">{t("cov.regions.title")}</h2>
            <ul className="border-t border-foreground/10">
              {regions.map((r) => (
                <li key={r.nameKey} className="flex items-baseline justify-between gap-6 py-4 border-b border-foreground/10">
                  <span className="font-bold uppercase tracking-tight">{t(r.nameKey)}</span>
                  <span className="text-sm text-muted-foreground text-right">{t(r.descKey)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-4 border-primary bg-card p-6">
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("cov.notice.label")}</p>
              <p className="font-bold text-lg leading-snug mb-2">
                {t("cov.notice.p1")} <span className="text-primary">RM250,000</span>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("cov.notice.p2")}
              </p>
            </div>

            <Link to="/contact" className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
              {t("cov.cta.btn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}