import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Error · 404
        </p>
        <h1 className="mt-4 font-display text-7xl font-bold">Lost in transit.</h1>
        <p className="mt-4 text-muted-foreground">
          This page hasn't been registered yet. Let's get you back on file.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
        >
          Go home →
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vision Consultancy — India regulatory certifications & compliance" },
      {
        name: "description",
        content:
          "Single-window partner for BIS CRS, BEE, WPC/ETA, TEC MTCTE, NABL testing, ISO and trademark approvals in India.",
      },
      { name: "author", content: "Vision Consultancy" },
      { property: "og:title", content: "Vision Consultancy — India regulatory certifications" },
      {
        property: "og:description",
        content:
          "BIS, BEE, WPC, TEC, NABL, ISO and trademark approvals — built for international companies, SMEs and startups entering India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
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
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
