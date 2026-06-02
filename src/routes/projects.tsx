import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { X } from "lucide-react";

// Placeholder imports for your gallery images.
// Adjust the path "@/" and directory names to match your exact asset structure.
import p01 from "@/assets/gallery/p01.webp";
import p02 from "@/assets/gallery/p02.webp";
import p03 from "@/assets/gallery/p03.webp";
import p04 from "@/assets/gallery/p04.webp";
import p05 from "@/assets/gallery/p05.webp";
import p06 from "@/assets/gallery/p06.webp";
import p07 from "@/assets/gallery/p07.webp";
import p08 from "@/assets/gallery/p08.webp";
import p09 from "@/assets/gallery/p09.webp";
import p10 from "@/assets/gallery/p10.webp";
import p11 from "@/assets/gallery/p11.webp";
import p12 from "@/assets/gallery/p12.webp";
import p13 from "@/assets/gallery/p13.webp";
import p14 from "@/assets/gallery/p14.webp";
import p15 from "@/assets/gallery/p15.webp";
import p16 from "@/assets/gallery/p16.webp";
import p17 from "@/assets/gallery/p17.webp";
import p18 from "@/assets/gallery/p18.webp";
import p19 from "@/assets/gallery/p19.webp";
import p20 from "@/assets/gallery/p20.webp";

const galleryImages: string[] = [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Build Gallery — Impian Bina" },
      { name: "description", content: "A visual showcase of our completed construction projects." },
      { property: "og:title", content: "Build Gallery — Impian Bina" },
      { property: "og:description", content: "A visual showcase of our completed construction projects." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Build Gallery."
        intro="A visual showcase of our completed construction projects and on-site execution."
      />

      {/* Grid Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {galleryImages.map((src, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(src)}
                className="group relative aspect-square w-full overflow-hidden bg-muted"
                aria-label={`View gallery image ${idx + 1}`}
              >
                <img
                  src={src}
                  alt={`Construction progress or completion ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image view"
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close fullscreen"
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
          >
            <X className="size-8" />
          </button>
          
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-[90vh] object-contain" 
            />
          </div>
        </div>
      )}
    </>
  );
}