import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
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

const services = [
  {
    idx: "01",
    slug: "residential",
    name: "Residential Construction",
    img: residentialImg,
    desc: "Bespoke single and double-storey bungalows, semi-d homes, and link housing developments. We handle architectural design coordination, foundation work, structural framing, and turnkey finishing.",
    benefits: ["Custom architectural design coordination", "JKR-spec foundation works", "Tropical-climate materials & insulation", "10-year structural warranty"],
  },
  {
    idx: "02",
    slug: "renovation",
    name: "Renovation & Extensions",
    img: renovationImg,
    desc: "Full-scope home renovations — from heritage shophouse restoration in Melaka to modern open-plan conversions. We manage demolition, structural extensions, M&E re-routing, and interior finishing.",
    benefits: ["Council & MBMB/MPS submission included", "Structural engineer sign-off", "Phased move-out scheduling", "Fixed-price contracts available"],
  },
  {
    idx: "03",
    slug: "commercial",
    name: "Commercial Projects",
    img: commercialImg,
    desc: "Shoplots, office blocks, retail outlets and F&B fit-outs. Built for fast tenant turnover with durable surfaces, robust M&E load capacity, and clear compliance documentation for handover.",
    benefits: ["Fast-track scheduling", "Tenant-ready fit-out specs", "CCC documentation handled", "Post-handover maintenance"],
  },
  {
    idx: "04",
    slug: "government",
    name: "Government Projects",
    img: governmentImg,
    desc: "SPKK-certified for government tenders. We deliver schools, clinics, council offices and public facilities to JKR specifications with full audit-trail documentation for procurement compliance.",
    benefits: ["SPKK certified", "JKR/CIDB-compliant specifications", "Audit-ready cost documentation", "Bumiputera ownership"],
  },
  {
    idx: "05",
    slug: "infrastructure",
    name: "Infrastructure Works",
    img: infraImg,
    desc: "Civil engineering for roads, drainage, retaining walls, bridges and utilities corridors. Equipped for earthworks, asphalting, reinforced concrete structures, and storm-drainage systems.",
    benefits: ["In-house earthworks fleet", "Storm-drainage engineering", "Retaining wall specialists", "Long-term site supervision"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services — Five Disciplines"
        title="From foundation pour to ribbon cutting."
        intro="We're licensed and equipped for the full spectrum — private homes through state infrastructure. Each service line is led by a dedicated project manager with at least 10 years on Malaysian sites."
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
                  alt={s.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="md:col-span-5">
                <span className="mono text-xs uppercase tracking-[0.3em] text-primary">{s.idx} — Service</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                  {s.name}
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.desc}</p>

                <ul className="mt-8 space-y-3 border-t border-foreground/10 pt-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm">
                      <span className="mono text-primary">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                  Discuss this service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
