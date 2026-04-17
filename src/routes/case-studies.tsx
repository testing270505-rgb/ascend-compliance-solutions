import { createFileRoute } from "@tanstack/react-router";
import { cases } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real client outcomes | Vision Consultancy" },
      { name: "description", content: "How Vision unblocked launches: BIS R-Numbers in 38 days, parallel WPC + BIS approvals, NABL tender wins." },
      { property: "og:title", content: "Case Studies — Vision Consultancy" },
      { property: "og:description", content: "Real outcomes from BIS, WPC and NABL projects across electronics, IoT and battery sectors." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ Case Studies
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-4xl text-balance">
            Outcomes, not <span className="italic text-saffron">brochure-speak.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {cases.map((c, i) => (
          <Reveal key={c.client} delay={i * 0.05}>
            <article className="grid gap-8 md:grid-cols-12 border-b border-border pb-16 last:border-0">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Case · 0{i + 1}
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">{c.client}</h2>
              </div>
              <div className="md:col-span-8 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-saffron">Problem</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-saffron">What we did</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.action}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-saffron">Result</p>
                  <p className="mt-2 text-sm font-medium">{c.result}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
