const certs = ["CIDB Malaysia", "SSM Registered", "SPKK Registered", "STB Certified"];

export function CertStrip() {
  return (
    <div className="bg-accent py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 opacity-50 grayscale contrast-125">
        {certs.map((c) => (
          <div key={c} className="text-accent-foreground font-black text-lg md:text-xl tracking-tighter italic">
            {c.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
