import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Certifications, Compliance, Licensing | Vision Consultancy" },
      {
        name: "description",
        content:
          "Six regulatory verticals: BIS CRS, BEE, WPC/ETA, TEC MTCTE, NABL testing, Trademark & ISO certification.",
      },
      { property: "og:title", content: "Services — Vision Consultancy" },
      {
        property: "og:description",
        content: "BIS, BEE, WPC, TEC, NABL, ISO and trademark services for the Indian market.",
      },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const matchRoute = useMatchRoute();
  const isChildRoute = matchRoute({ to: "/services/$slug" });

  if (isChildRoute) {
    return <Outlet />;
  }

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ Services
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-4xl text-balance">
            Certifications, compliance & <span className="italic text-saffron">licensing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            Six tightly-focused practices that cover every mandatory approval your product needs to
            enter and grow in India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col bg-background p-8 md:p-10 transition-colors hover:bg-foreground hover:text-background"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-amber-glow">
                    {s.code}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-amber-glow" />
                </div>
                <h2 className="mt-8 font-display text-3xl md:text-4xl font-medium leading-[1.05]">
                  {s.name}
                </h2>
                <p className="mt-2 text-sm font-medium opacity-80">{s.title}</p>
                <p className="mt-6 text-sm text-muted-foreground group-hover:text-paper/70">
                  {s.short}
                </p>
                <ul className="mt-6 space-y-1.5 text-xs text-muted-foreground group-hover:text-paper/70">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-saffron">→</span> {b}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
