import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import teamImg from "@/assets/about-team.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Impian Bina — Construction Company in Negeri Sembilan" },
      { name: "description", content: "Established 2000. Impian Bina is a CIDB G1 contractor based in Seremban delivering residential, commercial and government construction in Negeri Sembilan and Melaka." },
      { property: "og:title", content: "About Impian Bina" },
      { property: "og:description", content: "CIDB G1 contractor based in Seremban — over 20 years of building excellence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { idx: "01", title: "Built to Last", body: "Every joint, beam and slab is engineered to outlive the contract — not just pass it." },
  { idx: "02", title: "Transparent Costing", body: "Detailed BQs and weekly progress reports. No surprise variation orders." },
  { idx: "03", title: "Local Mastery", body: "Twenty years deep in Negeri Sembilan and Melaka soil, councils, and supply chains." },
  { idx: "04", title: "Safety First", body: "Zero-incident jobsites through DOSH-compliant procedures and on-site supervisors." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About — Est. 2000"
        title={<>Twenty years of building Malaysia's southern corridor.</>}
        intro="Impian Bina Sdn Bhd is a Bumiputera-owned CIDB G1 construction company headquartered in Seremban. From custom bungalows in Sendayan to civic infrastructure across Melaka, we build with the discipline and longevity that local communities depend on."
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
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight mb-6">
              From a two-man crew to a 60-strong team.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 2000 by two veteran site engineers, Impian Bina started with a single shophouse renovation in Seremban. Today we manage simultaneous residential, commercial and government contracts across two states.</p>
              <p>Our growth has stayed deliberate — we hire from local technical colleges, partner with proven subcontractors, and stay licensed to G1 so we can bid on any project size.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Vision</p>
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">
              To be the southern region's most trusted builder.
            </h3>
            <p className="text-white/60 leading-relaxed">
              By 2030, every council officer, homeowner, and procurement lead in NS and Melaka should know that an Impian Bina build means the work is finished, the paperwork is clean, and the warranty is honoured.
            </p>
          </div>
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Mission</p>
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">
              Deliver structures that outlast their warranty.
            </h3>
            <p className="text-white/60 leading-relaxed">
              We measure success in decade-long buildings, not project sign-offs. Every site is run with the assumption that the people who live, work, or transit through it will judge our work for 30 years.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader index="Our Values" title="What we don't compromise on." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {values.map((v) => (
              <div key={v.idx} className="bg-card p-8">
                <span className="mono text-xs block opacity-50 mb-6">{v.idx}</span>
                <h4 className="text-lg font-bold uppercase tracking-tight mb-3">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 md:py-28 bg-card border-t border-foreground/10">
        {/* Changed from grid to flex flex-wrap justify-center */}
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-16 text-center">
          {[
            { n: "16+", l: "Years operating" },
            { n: "1000+", l: "Projects delivered" },
            { n: "G1", l: "CIDB Grade" },
          ].map((s) => (
            // Added min-width so the items maintain solid spacing on mobile
            <div key={s.l} className="min-w-[150px] md:min-w-[200px]">
              <p className="text-5xl md:text-6xl font-black tracking-tighter text-primary">{s.n}</p>
              <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
