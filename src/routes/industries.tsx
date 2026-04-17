import { createFileRoute } from "@tanstack/react-router";
import { industries } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries we serve — Electronics, Food, Cosmetics, Manufacturing | Vision" },
      { name: "description", content: "Specialised regulatory support for electronics, food, cosmetics, manufacturing and Indian-market startups." },
      { property: "og:title", content: "Industries — Vision Consultancy" },
      { property: "og:description", content: "Vertical specialisation across electronics, food, cosmetics, manufacturing and startups." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ Industries
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-4xl text-balance">
            Specialisation, not <span className="italic text-saffron">generalisation.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            Each industry comes with its own paperwork, labs and regulators.
            Vision teams are organised by vertical so you always work with
            people who know your category cold.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.06}>
              <div className="group h-full bg-background p-10 transition-colors hover:bg-foreground hover:text-background min-h-[280px] flex flex-col justify-between">
                <p className="font-mono text-xs text-muted-foreground group-hover:text-amber-glow">
                  Vertical · 0{i + 1}
                </p>
                <div>
                  <h2 className="font-display text-4xl md:text-5xl font-medium">{ind.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground group-hover:text-paper/70">{ind.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
