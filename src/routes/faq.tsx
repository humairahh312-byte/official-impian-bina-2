import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do you provide free quotations?", a: "Yes. Initial consultation and quotation are always free. You'll receive a detailed BQ within 7 working days of the site visit, with no obligation to proceed." },
  { q: "What areas do you cover?", a: "We exclusively serve Negeri Sembilan and Melaka. Projects elsewhere are considered case-by-case and require a minimum contract value of RM250,000." },
  { q: "Do you handle government projects?", a: "Yes. We hold CIDB Grade G1 and an active SPKK certificate, so we can bid directly on JKR, state, and federal tenders. We also hold Bumiputera (STB) status." },
  { q: "What is the minimum project value outside Negeri Sembilan and Melaka?", a: "RM250,000. This allows us to maintain a dedicated on-site supervisor and logistics chain without compromising our core regional clients." },
  { q: "How long does a typical residential build take?", a: "A standard double-storey bungalow takes 4 to 8 months from contract sign to handover. Renovations vary between 3 and 9 months depending on structural scope." },
  { q: "Do you offer post-handover warranty?", a: "Yes — every project includes a 1-year defects liability period and a 10-year structural warranty on new residential builds." },
  { q: "Can you work with my own architect or designer?", a: "Absolutely. We frequently collaborate with external architects and interior designers. We can also recommend trusted partners if you don't have one." },
  { q: "What's the deposit and payment structure?", a: "Standard milestone schedule: 10% on contract sign, then progressive payments tied to verified construction milestones, with 5% retention released after the defects liability period." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Common Questions Answered | Impian Bina" },
      { name: "description", content: "Answers to common questions about Impian Bina's construction services: free quotations, coverage areas, government projects, timelines, and warranties." },
      { property: "og:title", content: "Frequently Asked Questions — Impian Bina" },
      { property: "og:description", content: "Quotations, coverage, government work, timelines and warranties." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Quick answers."
        intro="If your question isn't here, drop us a line — we usually reply same-day."
      />

      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="border-t border-foreground/10">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-foreground/10">
                <AccordionTrigger className="text-left py-6 text-base md:text-lg font-bold uppercase tracking-tight hover:text-primary hover:no-underline">
                  <span className="flex gap-4 items-start">
                    <span className="mono text-xs text-primary pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-10 pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-accent text-accent-foreground p-10 text-center">
            <p className="mono text-[10px] uppercase tracking-widest text-primary mb-3">Still curious?</p>
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">Ask us directly.</h3>
            <Link to="/contact" className="inline-flex bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
