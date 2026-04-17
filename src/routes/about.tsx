import { createFileRoute } from "@tanstack/react-router";
import { team, stats } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vision Consultancy — Our story, mission, team" },
      { name: "description", content: "A New Delhi & Mumbai-based regulatory consultancy enabling international companies, SMEs and startups to launch in India." },
      { property: "og:title", content: "About — Vision Consultancy" },
      { property: "og:description", content: "Our story, mission and the team behind Vision's regulatory practice." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ About
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-5xl text-balance">
            A reliable gateway to India's <span className="italic text-saffron">regulatory landscape.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Vision is a private limited company based in New Delhi and Mumbai,
            specialising in technical certification and regulatory compliance
            for the Indian market. We provide comprehensive, single-window
            solutions for businesses navigating India's complex regulatory
            landscape.
          </p>
        </div>
      </section>

      {/* OUR STORY + MISSION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Our story</p>
          <h2 className="mt-3 font-display text-4xl">From single approvals to single-window.</h2>
          <p className="mt-5 text-muted-foreground">
            Vision started as a small BIS-focused practice and grew alongside
            India's expanding compliance requirements — adding WPC, BEE, TEC,
            NABL, ISO and trademark capabilities as our clients needed them. A
            decade later we still operate by the same principle: understand the
            product, then run the regulatory route end-to-end.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Our mission</p>
          <h2 className="mt-3 font-display text-4xl">Make India the easiest market to enter.</h2>
          <p className="mt-5 text-muted-foreground">
            We enable international companies, SMEs and startups to launch and
            scale in India by facilitating mandatory registrations and
            certifications — from initial strategy design to full
            implementation, with uncompromising adherence to safety, quality
            and environmental standards.
          </p>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="ink-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl md:text-6xl text-amber-glow">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-paper/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Team</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Practice leads</h2>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="bg-background p-8 group hover:bg-foreground hover:text-background transition-colors min-h-[220px] flex flex-col justify-between">
                <div className="h-12 w-12 rounded-full bg-saffron/20 grid place-items-center font-display text-xl text-saffron group-hover:bg-amber-glow group-hover:text-ink">
                  {m.name.split(" ")[1]?.[0] ?? m.name[0]}
                </div>
                <div>
                  <h3 className="font-display text-xl">{m.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground group-hover:text-paper/70">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
