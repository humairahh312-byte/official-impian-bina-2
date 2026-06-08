import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useLang } from "@/lib/i18n";

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

// Replaced static text with translation keys
const videos = [
  { titleKey: "vid.1.title", categoryKey: "vid.1.cat", id: "dQw4w9WgXcQ" },
  { titleKey: "vid.2.title", categoryKey: "vid.2.cat", id: "9bZkp7q19f0" },
  { titleKey: "vid.3.title", categoryKey: "vid.3.cat", id: "3JZ_D3ELwOQ" },
  { titleKey: "vid.4.title", categoryKey: "vid.4.cat", id: "kJQP7kiw5Fk" },
];

function VideosPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("vid.hero.eyebrow")}
        title={t("vid.hero.title")}
        intro={t("vid.hero.intro")}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12">
          {videos.map((v) => (
            <article key={v.id}>
              <div className="aspect-video bg-accent border border-foreground/10">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={t(v.titleKey)}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mono text-[10px] uppercase tracking-widest text-primary mt-4">{t(v.categoryKey)}</p>
              <h3 className="font-bold uppercase tracking-tight mt-1">{t(v.titleKey)}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}