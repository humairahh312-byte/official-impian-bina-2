import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — SSM, CIDB, SPKK, STB | Impian Bina" },
      { name: "description", content: "Impian Bina is registered and certified: SSM company registration, CIDB Grade G1 contractor licence, SPKK certification, and STB Bumiputera status." },
      { property: "og:title", content: "Certifications & Licences — Impian Bina" },
      { property: "og:description", content: "SSM, CIDB G1, SPKK, and STB certified contractor." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

const certs = [
  {
    code: "SSM",
    issuer: "Suruhanjaya Syarikat Malaysia",
    reg: "Reg. No. 201201040000 (1020000-X)",
    body: "Companies Commission of Malaysia registration. Confirms Impian Bina Sdn Bhd as a legally incorporated Sendirian Berhad entity authorised to trade and enter contracts in Malaysia.",
  },
  {
    code: "CIDB",
    issuer: "Construction Industry Development Board",
    reg: "Grade G1 · Category B, CE, ME",
    body: "Highest contractor grade — no project value limit. CIDB G1 is required for all government tenders above RM10 million and is the industry's benchmark for delivery capability.",
  },
  {
    code: "SPKK",
    issuer: "Sijil Perolehan Kerja Kerajaan",
    reg: "SPKK No. 0120000000-000",
    body: "Government works procurement certificate. Allows direct bidding on JKR, state, and federal construction tenders. Renewed annually with full financial and capability audit.",
  },
  {
    code: "STB",
    issuer: "Sijil Taraf Bumiputera",
    reg: "Bumiputera Status Certified",
    body: "Bumiputera ownership certification from the Ministry of Finance. Enables participation in Bumiputera-reserved government and GLC tender categories.",
  },
];

function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Licences & Certifications"
        title="Paperwork that wins tenders."
        intro="Every certification is current, every audit is clean. Click any badge to request the supporting documentation."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {certs.map((c) => (
            <article key={c.code} className="bg-card p-10 md:p-12">
              <div className="flex items-start justify-between gap-6 mb-8">
                <div className="size-24 md:size-28 bg-accent text-accent-foreground flex items-center justify-center">
                  <span className="font-black text-3xl md:text-4xl tracking-tighter">{c.code}</span>
                </div>
                <div className="size-12 border border-primary text-primary flex items-center justify-center mono text-xs">
                  ✓
                </div>
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">{c.issuer}</h2>
              <p className="mono text-xs uppercase tracking-widest text-primary mb-4">{c.reg}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card border-y border-foreground/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="mono text-xs uppercase tracking-widest text-primary mb-4">Verification</p>
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-4">
            Need to verify a certificate?
          </h3>
          <p className="text-muted-foreground">
            Procurement teams can request scanned originals of any certification via email — we typically respond within one working day.
          </p>
          <a
            href="mailto:officialmpianbina@gmail.com"
            className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Request originals
          </a>
        </div>
      </section>
    </>
  );
}
