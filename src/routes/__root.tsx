import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider, useLang } from "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Error 404</p>
        <h1 className="text-6xl font-black tracking-tighter uppercase">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Something broke</p>
        <h1 className="text-3xl font-black tracking-tighter uppercase">This page didn't load</h1>
        <p className="mt-4 text-sm text-muted-foreground">Try refreshing, or head back home.</p>
        <div className="mt-8 flex gap-3 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-accent text-accent-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Try again
          </button>
          <a href="/" className="border border-foreground/15 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    title: "Impian Bina | Professional Construction & Design Services",
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Impian Bina provides premier structural construction, architectural design, and renovation services. Contact us today for a consultation.",
      },
      { name: "author", content: "Impian Bina Sdn Bhd" },
      { name: "theme-color", content: "#c2410c" },
      { property: "og:site_name", content: "Impian Bina" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    // 'lang' is managed by client-side state after hydration
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <RootContent />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

function RootContent() {
  const { lang } = useLang();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Impian Bina Sdn Bhd",
    url: "/",
    email: "officialimpianbina@gmail.com",
    telephone: "+60-6-760-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "E30 Jalan Melati, Felda Sendayan",
      postalCode: "71950",
      addressLocality: "Seremban",
      addressRegion: "Negeri Sembilan",
      addressCountry: "MY",
    },
    areaServed: ["Negeri Sembilan", "Melaka"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}