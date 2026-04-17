import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.name} — ${loaderData.service.title} | Vision` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.name} | Vision Consultancy` },
          { property: "og:description", content: loaderData.service.short },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-5xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block underline-grow">
        Back to services →
      </Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ Service · {service.code}
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] text-balance max-w-4xl">
            {service.name}
          </h1>
          <p className="mt-4 font-display text-2xl md:text-3xl text-saffron italic max-w-3xl">
            {service.title}
          </p>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{service.short}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">◇ Overview</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">What this is</h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-5">
            {service.overview.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-lg leading-relaxed text-foreground/85">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">◇ How we deliver</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Core service pillars</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {service.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full bg-background p-8 md:p-10">
                  <span className="font-mono text-xs text-saffron">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl leading-tight">{p.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage list */}
      {service.coverage && (
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">◇ Coverage</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Products we cover</h2>
            </div>
            <div className="md:col-span-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.coverage.map((c, i) => (
                  <Reveal key={c} delay={i * 0.04}>
                    <li className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                      <Check className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{c}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Benefits table */}
      {service.benefits && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">◇ Why it matters</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">Key benefits</h2>
            <div className="mt-10 overflow-hidden rounded-xl border border-border">
              <div className="grid grid-cols-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest">
                <div className="p-4 col-span-1">Feature</div>
                <div className="p-4 col-span-2">Impact</div>
              </div>
              {service.benefits.map((b, i) => (
                <div key={b.feature} className={`grid grid-cols-3 ${i !== 0 ? "border-t border-border" : ""}`}>
                  <div className="p-5 font-display text-lg">{b.feature}</div>
                  <div className="p-5 col-span-2 text-muted-foreground">{b.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What we deliver bullets */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">◇ Engagement</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">What we deliver</h2>
              <p className="mt-4 text-muted-foreground">
                A focused execution plan that gets your product registered, on shelf and in customer hands — fast.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-saffron hover:text-foreground transition-colors"
              >
                Start your application <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {service.bullets.map((b, i) => (
                <Reveal key={b} delay={i * 0.08}>
                  <li className="flex items-start gap-6 py-6">
                    <span className="font-mono text-xs text-saffron mt-1">0{i + 1}</span>
                    <span className="font-display text-xl md:text-2xl leading-snug">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Related</p>
          <h3 className="mt-4 font-display text-3xl md:text-4xl">Other services</h3>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group rounded-xl border border-border bg-card p-6 hover:-translate-y-1 transition-all hover:border-saffron"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{o.code}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-saffron group-hover:rotate-45 transition-transform" />
                </div>
                <h4 className="mt-4 font-display text-xl">{o.name}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{o.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
