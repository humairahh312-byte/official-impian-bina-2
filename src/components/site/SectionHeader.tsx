import type { ReactNode } from "react";

export function SectionHeader({
  index,
  title,
  description,
  align = "between",
}: {
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "between" | "stack";
}) {
  if (align === "stack") {
    return (
      <div className="mb-16 border-b border-foreground/10 pb-8">
        {index && <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">{index}</p>}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">{title}</h2>
        {description && <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">{description}</p>}
      </div>
    );
  }
  return (
    <div className="mb-16 border-b border-foreground/10 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        {index && <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">{index}</p>}
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">{title}</h2>
      </div>
      {description && <p className="max-w-md text-sm text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
