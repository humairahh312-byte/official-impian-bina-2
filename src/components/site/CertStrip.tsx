import { useLang } from "@/lib/i18n";

export function CertStrip() {
  const { t } = useLang();

  // Array of keys mapped to the dictionary
  const certs = [
    "cert.cidb",
    "cert.ssm",
    "cert.spkk",
    "cert.stb"
  ];

  return (
    <div className="bg-accent py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 opacity-50 grayscale contrast-125">
        {certs.map((key) => (
          <div 
            key={key} 
            className="text-accent-foreground font-black text-lg md:text-xl tracking-tighter italic"
          >
            {t(key)}
          </div>
        ))}
      </div>
    </div>
  );
}