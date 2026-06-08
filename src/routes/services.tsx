import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";
import residentialImg from "@/assets/service-residential.webp";
import renovationImg from "@/assets/service-renovation.webp";
import commercialImg from "@/assets/service-commercial.webp";
import governmentImg from "@/assets/service-government.webp";
import infraImg from "@/assets/service-infrastructure.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Residential, Commercial, Government & Infrastructure | Impian Bina" },
      { name: "description", content: "End-to-end construction services: custom residential builds, renovations, commercial developments, government contracts, and civil infrastructure across NS and Melaka." },
      { property: "og:title", content: "Construction Services — Impian Bina" },
      { property: "og:description", content: "Residential, renovation, commercial, government and infrastructure construction." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

// Replaced static text with translation keys
const services = [
  {
    idx: "01",
    slug: "residential",
    nameKey: "svc.1.name",
    img: residentialImg,
    descKey: "svc.1.desc",
    benefitKeys: ["svc.1.b1", "svc.1.b2", "svc.1.b3", "svc.1.b4"],
  },
  {
    idx: "02",
    slug: "renovation",
    nameKey: "svc.2.name",
    img: renovationImg,
    descKey: "svc.2.desc",
    benefitKeys: ["svc.2.b1", "svc.2.b2", "svc.2.b3", "svc.2.b4"],
  },
  {
    idx: "03",
    slug: "commercial",
    nameKey: "svc.3.name",
    img: commercialImg,
    descKey: "svc.3.desc",
    benefitKeys: ["svc.3.b1", "svc.3.b2", "svc.3.b3", "svc.3.b4"],
  },
  {
    idx: "04",
    slug: "government",
    nameKey: "svc.4.name",
    img: governmentImg,
    descKey: "svc.4.desc",
    benefitKeys: ["svc.4.b1", "svc.4.b2", "svc.4.b3", "svc.4.b4"],
  },
  {
    idx: "05",
    slug: "infrastructure",
    nameKey: "svc.5.name",
    img: infraImg,
    descKey: "svc.5.desc",
    benefitKeys: ["svc.5.b1", "svc.5.b2", "svc.5.b3", "svc.5.b4"],
  },
];

function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("services.hero.eyebrow")}
        title={t("services.hero.title")}
        intro={t("services.hero.intro")}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid md:grid-cols-12 gap-10 md:gap-12 items-center"
            >
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={s.img}
                  alt={t(s.nameKey)}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="md:col-span-5">
                <span className="mono text-xs uppercase tracking-[0.3em] text-primary">{s.idx} — {t("services.label")}</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                  {t(s.nameKey)}
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{t(s.descKey)}</p>

                <ul className="mt-8 space-y-3 border-t border-foreground/10 pt-6">
                  {s.benefitKeys.map((bKey) => (
                    <li key={bKey} className="flex gap-3 text-sm">
                      <span className="mono text-primary">+</span>
                      <span>{t(bKey)}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                  {t("services.cta")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}