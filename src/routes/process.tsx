import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";
import processImg from "@/assets/process-site.webp";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — 7 Steps from Consultation to Handover | Impian Bina" },
      { name: "description", content: "Our seven-step construction process: consultation, site visit, quotation, agreement, construction, completion and handover. Transparent at every stage." },
      { property: "og:title", content: "Our 7-Step Process — Impian Bina" },
      { property: "og:description", content: "Consultation through handover, fully documented." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  { n: "01", titleKey: "proc.step.1.title", bodyKey: "proc.step.1.body" },
  { n: "02", titleKey: "proc.step.2.title", bodyKey: "proc.step.2.body" },
  { n: "03", titleKey: "proc.step.3.title", bodyKey: "proc.step.3.body" },
  { n: "04", titleKey: "proc.step.4.title", bodyKey: "proc.step.4.body" },
  { n: "05", titleKey: "proc.step.5.title", bodyKey: "proc.step.5.body" },
  { n: "06", titleKey: "proc.step.6.title", bodyKey: "proc.step.6.body" },
  { n: "07", titleKey: "proc.step.7.title", bodyKey: "proc.step.7.body" },
];

function ProcessPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("proc.hero.eyebrow")}
        title={t("proc.hero.title")}
        intro={t("proc.hero.intro")}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="space-y-10">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-6 md:gap-8 group">
                  <div className="mono text-primary font-bold text-2xl pt-1 w-12 shrink-0">{s.n}</div>
                  <div className="pb-10 border-b border-foreground/10 flex-1">
                    <h2 className="font-black uppercase tracking-tight text-xl md:text-2xl mb-3">{t(s.titleKey)}</h2>
                    <p className="text-muted-foreground leading-relaxed">{t(s.bodyKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <img
              src={processImg}
              alt="Top-down view of construction site with workers"
              loading="lazy"
              width={1000}
              height={1280}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="bg-primary text-primary-foreground p-8 md:p-10 mt-6">
              <p className="mono text-[10px] uppercase tracking-widest opacity-70 mb-2">{t("proc.sidebar.timeline")}</p>
              <p className="text-3xl font-black tracking-tighter">{t("proc.sidebar.months")}</p>
              <p className="text-xs mt-3 opacity-80 leading-relaxed">
                {t("proc.sidebar.note")}
              </p>
            </div>
            <Link
              to="/contact"
              className="block mt-6 bg-accent text-accent-foreground text-center py-4 text-xs font-bold uppercase tracking-widest hover:bg-foreground transition-colors"
            >
              {t("proc.sidebar.btn")}
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}