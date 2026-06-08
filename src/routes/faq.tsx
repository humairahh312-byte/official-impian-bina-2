import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Swapped to translation keys
const faqs = [
  { qKey: "faq.q1.q", aKey: "faq.q1.a" },
  { qKey: "faq.q2.q", aKey: "faq.q2.a" },
  { qKey: "faq.q3.q", aKey: "faq.q3.a" },
  { qKey: "faq.q4.q", aKey: "faq.q4.a" },
  { qKey: "faq.q5.q", aKey: "faq.q5.a" },
  { qKey: "faq.q6.q", aKey: "faq.q6.a" },
  { qKey: "faq.q7.q", aKey: "faq.q7.a" },
  { qKey: "faq.q8.q", aKey: "faq.q8.a" },
];

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
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLang();

  // Dynamic JSON-LD generation for SEO translation
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: t(f.qKey),
      acceptedAnswer: { "@type": "Answer", text: t(f.aKey) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <PageHero
        eyebrow={t("faq.hero.eyebrow")}
        title={t("faq.hero.title")}
        intro={t("faq.hero.intro")}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="border-t border-foreground/10">
            {faqs.map((f, i) => (
              <AccordionItem key={f.qKey} value={`item-${i}`} className="border-b border-foreground/10">
                <AccordionTrigger className="text-left py-6 text-base md:text-lg font-bold uppercase tracking-tight hover:text-primary hover:no-underline">
                  <span className="flex gap-4 items-start">
                    <span className="mono text-xs text-primary pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span>{t(f.qKey)}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-10 pb-6">
                  {t(f.aKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-accent text-accent-foreground p-10 text-center">
            <p className="mono text-[10px] uppercase tracking-widest text-primary mb-3">{t("faq.cta.eyebrow")}</p>
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">{t("faq.cta.title")}</h3>
            <Link to="/contact" className="inline-flex bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors">
              {t("faq.cta.btn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}