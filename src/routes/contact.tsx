import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "60176427285";
const WA_TEMPLATE = `Hi Impian Bina,

Saya ingin mendapatkan sebutan harga untuk projek berikut:

• Nama:
• Jenis projek: (Residential / Renovation / Commercial / Government / Infrastructure)
• Lokasi tapak:
• Anggaran keluasan / bilangan tingkat:
• Tarikh sasaran mula:
• Bajet:

Terima kasih.`;
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEMPLATE)}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Impian Bina — Phone, WhatsApp, Office in Seremban" },
      { name: "description", content: "Contact Impian Bina for quotations and consultations. Phone, WhatsApp, email and Seremban office address with Google Maps directions." },
      { property: "og:title", content: "Contact — Impian Bina" },
      { property: "og:description", content: "Get a quotation. Phone, WhatsApp, email or visit our Seremban office." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        intro={t("contact.hero.intro")}
      />

      {/* WhatsApp quick-quote */}
      <section className="border-b border-foreground/10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="mono text-[10px] uppercase tracking-widest opacity-80 mb-2">{t("contact.wa.channel")}</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
              {t("contact.wa.title")}
            </h2>
            <p className="mt-2 text-sm opacity-90 max-w-xl">
              {t("contact.wa.desc")}
            </p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap"
          >
            <MessageCircle className="size-5" />
            {t("contact.wa.btn")}
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          {/* Contact details */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.phone")}</p>
              <a href="tel:+6067600000" className="block text-2xl font-black tracking-tighter hover:text-primary">+60 6-760 0000</a>
              <p className="text-xs text-muted-foreground mt-1">{t("contact.info.phone_hours")}</p>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.wa")}</p>
              <a href="https://wa.me/60176427285" target="_blank" rel="noreferrer" className="block text-2xl font-black tracking-tighter hover:text-primary">+60 17-642 7285</a>
              <p className="text-xs text-muted-foreground mt-1">{t("contact.info.wa_note")}</p>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.email")}</p>
              <a href="mailto:officialimpianbina@gmail.com" className="block text-xl font-black tracking-tighter hover:text-primary break-all">officialimpianbina@gmail.com</a>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{t("contact.info.office")}</p>
              <address className="not-italic text-lg font-semibold leading-snug">
                E30 Jalan Melati, Felda Sendayan,<br />
                71950 Seremban,<br />
                Negeri Sembilan, Malaysia
              </address>
            </div>
          </div>

          {/* Form */}
          <form
            className="md:col-span-7 bg-card border border-foreground/10 p-8 md:p-10 space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              
              const formData = new FormData(e.target as HTMLFormElement);
              formData.append("access_key", "f5ee752d-52ee-4e54-b6bf-cc3b7f2ff93a");
              formData.append("subject", "New Quotation Request from Impian Bina Website");

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });

                const data = await response.json();

                if (data.success) {
                  toast.success(t("contact.form.success"));
                  (e.target as HTMLFormElement).reset();
                } else {
                  toast.error(t("contact.form.error"));
                  console.error("Form Error:", data);
                }
              } catch (error) {
                toast.error(t("contact.form.network_error"));
                console.error("Fetch Error:", error);
              } finally {
                setSending(false);
              }
            }}
          >
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">{t("contact.form.title")}</h2>
            <p className="text-sm text-muted-foreground mb-6">{t("contact.form.desc")}</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label={t("contact.form.name")} required />
              <Field id="phone" label={t("contact.form.phone")} required type="tel" />
              <Field id="email" label={t("contact.form.email")} required type="email" />
              <Field id="location" label={t("contact.form.location")} required />
            </div>

            <div>
              <label htmlFor="type" className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">{t("contact.form.type")}</label>
              <select id="type" name="type" required className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary">
                <option value="">{t("contact.form.select")}</option>
                <option value="Residential — new build">{t("contact.type.res")}</option>
                <option value="Renovation / extension">{t("contact.type.ren")}</option>
                <option value="Commercial">{t("contact.type.com")}</option>
                <option value="Government / SPKK">{t("contact.type.gov")}</option>
                <option value="Infrastructure">{t("contact.type.inf")}</option>
                <option value="Other">{t("contact.type.oth")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">{t("contact.form.desc_label")}</label>
              <textarea id="message" name="message" required rows={5} className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary resize-none" placeholder={t("contact.form.placeholder")} />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-60"
            >
              {sending ? t("contact.form.sending") : t("contact.form.send")}
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-foreground/10">
        <div className="aspect-[21/9] w-full bg-accent">
          <iframe
            title="Impian Bina office location, Seremban"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=E30+Jalan+Melati,+Felda+Sendayan,+71950+Seremban,+Negeri+Sembilan,+Malaysia&output=embed"
          />
        </div>
      </section>
    </>
  );
}

function Field({ id, label, required, type = "text" }: { id: string; label: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full bg-background border border-foreground/15 p-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}