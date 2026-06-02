import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
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
  { n: "01", title: "Consultation", body: "Free 60-minute briefing to scope your project, budget range, and timeline. Held at our Seremban office, on Zoom, or on-site." },
  { n: "02", title: "Site Visit", body: "Our project manager and structural engineer survey the land, take measurements, and flag any soil, access, or council constraints." },
  { n: "03", title: "Quotation", body: "Detailed BQ within 7 working days. Line-item costs for materials, labour, M&E, and permits — no opaque lump sums." },
  { n: "04", title: "Agreement", body: "PAM or JKR-form contract, with milestone payment schedule and explicit variation-order procedure. Signed before any work begins." },
  { n: "05", title: "Construction", body: "Daily on-site supervisor, weekly progress photos to your phone, and monthly site-meeting minutes. You're never in the dark." },
  { n: "06", title: "Completion", body: "Joint defects inspection, CCC documentation, and snag-list resolution before we call the project done." },
  { n: "07", title: "Handover", body: "Keys, warranty certificate, M&E manuals, and a one-year post-handover maintenance window. We answer the phone if something needs attention." },
];

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Process"
        title="Seven steps. Zero surprises."
        intro="From the first email to the final key handover, every stage is documented, dated, and signed. Here's exactly what to expect."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="space-y-10">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-6 md:gap-8 group">
                  <div className="mono text-primary font-bold text-2xl pt-1 w-12 shrink-0">{s.n}</div>
                  <div className="pb-10 border-b border-foreground/10 flex-1">
                    <h2 className="font-black uppercase tracking-tight text-xl md:text-2xl mb-3">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{s.body}</p>
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
              <p className="mono text-[10px] uppercase tracking-widest opacity-70 mb-2">Avg. timeline</p>
              <p className="text-3xl font-black tracking-tighter">8 — 14 months</p>
              <p className="text-xs mt-3 opacity-80 leading-relaxed">
                For a standard double-storey bungalow, from contract sign to key handover. Renovations and commercial fit-outs vary.
              </p>
            </div>
            <Link
              to="/contact"
              className="block mt-6 bg-accent text-accent-foreground text-center py-4 text-xs font-bold uppercase tracking-widest hover:bg-foreground transition-colors"
            >
              Start at step 01
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
