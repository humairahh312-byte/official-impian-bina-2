import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLang } from "@/lib/i18n";
import teamImg from "@/assets/about-team.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Impian Bina — Construction Company in Negeri Sembilan" },
      { name: "description", content: "Established 2000. Impian Bina is a CIDB-registered contractor based in Seremban delivering residential, commercial and government construction in Negeri Sembilan and Melaka." },
      { property: "og:title", content: "About Impian Bina" },
      { property: "og:description", content: "CIDB-registered contractor based in Seremban — over 20 years of building excellence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

// Swapped to translation keys
const values = [
  { idx: "01", titleKey: "about.val.1.title", bodyKey: "about.val.1.body" },
  { idx: "02", titleKey: "about.val.2.title", bodyKey: "about.val.2.body" },
  { idx: "03", titleKey: "about.val.3.title", bodyKey: "about.val.3.body" },
  { idx: "04", titleKey: "about.val.4.title", bodyKey: "about.val.4.body" },
];

function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        intro={t("about.hero.intro")}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={teamImg}
            alt="Impian Bina team reviewing plans on site"
            loading="lazy"
            width={1400}
            height={1000}
            className="w-full aspect-[4/3] object-cover"
          />
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">{t("about.story.eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight mb-6">
              {t("about.story.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">{t("about.vision.eyebrow")}</p>
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">
              {t("about.vision.title")}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {t("about.vision.body")}
            </p>
          </div>
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">{t("about.mission.eyebrow")}</p>
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">
              {t("about.mission.title")}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {t("about.mission.body")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader index={t("about.values.eyebrow")} title={t("about.values.title")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {values.map((v) => (
              <div key={v.idx} className="bg-card p-8">
                <span className="mono text-xs block opacity-50 mb-6">{v.idx}</span>
                <h4 className="text-lg font-bold uppercase tracking-tight mb-3">{t(v.titleKey)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(v.bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-16 text-center">
          {[
            { n: "26+", l: "about.stats.1.label" },
            { n: "100%", l: "about.stats.2.label" },
            { n: t("about.stats.3.val"), l: "about.stats.3.label" },
          ].map((s) => (
            <div key={s.l} className="min-w-[150px] md:min-w-[200px]">
              <p className="text-5xl md:text-6xl font-black tracking-tighter text-primary">{s.n}</p>
              <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{t(s.l)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}