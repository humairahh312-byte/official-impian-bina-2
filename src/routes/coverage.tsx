import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
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

const regions = [
  { name: "Seremban", desc: "HQ. Daily site coverage." },
  { name: "Nilai", desc: "Active residential & industrial projects." },
  { name: "Port Dickson", desc: "Coastal builds, infrastructure works." },
  { name: "Senawang", desc: "Commercial & warehouse specialism." },
  { name: "Melaka City", desc: "Regional office. Heritage & commercial." },
  { name: "Alor Gajah", desc: "Government & residential expansion." },
];

function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="Two states. One focused team."
        intro="By staying close to home, we keep logistics tight, response times short, and site supervisors on the ground daily."
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
                Malaysia · Highlighted: Negeri Sembilan & Melaka
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-primary text-primary-foreground p-6">
                <p className="mono text-[10px] uppercase tracking-widest opacity-70">Primary</p>
                <p className="font-black text-lg tracking-tighter mt-1">Negeri Sembilan</p>
              </div>
              <div className="bg-accent text-accent-foreground p-6">
                <p className="mono text-[10px] uppercase tracking-widest opacity-70">Primary</p>
                <p className="font-black text-lg tracking-tighter mt-1">Melaka</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-6">Where we work daily</h2>
            <ul className="border-t border-foreground/10">
              {regions.map((r) => (
                <li key={r.name} className="flex items-baseline justify-between gap-6 py-4 border-b border-foreground/10">
                  <span className="font-bold uppercase tracking-tight">{r.name}</span>
                  <span className="text-sm text-muted-foreground text-right">{r.desc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-4 border-primary bg-card p-6">
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">Important Notice</p>
              <p className="font-bold text-lg leading-snug mb-2">
                Projects outside Negeri Sembilan and Melaka require a minimum contract value of <span className="text-primary">RM250,000</span>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This allows us to maintain dedicated site supervision and logistics for out-of-region work without compromising our core service area.
              </p>
            </div>

            <Link to="/contact" className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
              Check your location
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
