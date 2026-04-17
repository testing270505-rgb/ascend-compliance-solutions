import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl">What we deliver</h2>
              <p className="mt-4 text-muted-foreground">
                A focused execution plan that gets your product registered, on
                shelf and in customer hands — fast.
              </p>
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

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Related
          </p>
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
