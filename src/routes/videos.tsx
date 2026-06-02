import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Project Videos — Walkthroughs, Drone Shots & Site Progress | Impian Bina" },
      { name: "description", content: "Watch project walkthroughs, drone footage, and site-progress videos from Impian Bina's residential, commercial and infrastructure builds." },
      { property: "og:title", content: "Project Videos — Impian Bina" },
      { property: "og:description", content: "Walkthroughs, drone shots and site progress." },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

const videos = [
  { title: "Sri Sendayan Bungalow — Walkthrough", category: "Walkthrough", id: "dQw4w9WgXcQ" },
  { title: "FT12 Trunk Road — Aerial Progress", category: "Drone", id: "9bZkp7q19f0" },
  { title: "Senawang Logistics Hub — Final Reveal", category: "Walkthrough", id: "3JZ_D3ELwOQ" },
  { title: "Bukit Beruang School — Site Progress Q3", category: "Progress", id: "kJQP7kiw5Fk" },
];

function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Video Archive"
        title="See the work, not just the photos."
        intro="Walkthroughs, drone passes, and weekly progress reels — straight from our project YouTube channel."
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12">
          {videos.map((v) => (
            <article key={v.id}>
              <div className="aspect-video bg-accent border border-foreground/10">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mt-4">{v.category}</p>
              <h3 className="font-bold uppercase tracking-tight mt-1">{v.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
