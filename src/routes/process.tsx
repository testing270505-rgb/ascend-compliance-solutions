import { createFileRoute, Link } from "@tanstack/react-router";
import { processSteps } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Consultation, Documentation, Application | Vision" },
      { name: "description", content: "How Vision moves your product through Indian regulatory approvals — Consultation, Documentation, Application." },
      { property: "og:title", content: "Process — Vision Consultancy" },
      { property: "og:description", content: "A three-stage workflow that gets BIS, BEE, WPC, TEC, NABL and ISO approvals across the line." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ Workflow
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-4xl text-balance">
            Three stages. <span className="italic text-saffron">Zero surprises.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-px bg-border">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="group grid gap-8 bg-background p-8 md:p-12 md:grid-cols-12 transition-colors hover:bg-foreground hover:text-background">
                <div className="md:col-span-3">
                  <span className="font-display text-7xl md:text-8xl font-bold text-saffron group-hover:text-amber-glow">
                    {p.step}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-display text-3xl md:text-4xl">{p.title}</h2>
                </div>
                <div className="md:col-span-4">
                  <p className="text-muted-foreground group-hover:text-paper/75">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Reveal>
          <h3 className="font-display text-3xl md:text-4xl">Ready to start at Stage 01?</h3>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background hover:bg-saffron hover:text-ink"
          >
            Book your free consultation →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
