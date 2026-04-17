import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { services, stats, processSteps } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision Consultancy — India regulatory certifications, decoded" },
      {
        name: "description",
        content:
          "BIS CRS, BEE, WPC/ETA, TEC, NABL, ISO and trademark approvals — a single-window partner for businesses entering India.",
      },
      { property: "og:title", content: "Vision Consultancy — India regulatory certifications" },
      {
        property: "og:description",
        content:
          "Single-window approvals for BIS, BEE, WPC, TEC, NABL, ISO and trademark in India.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden ink-card"
        style={{ minHeight: "92vh" }}
      >
        {/* Animated background — no image */}
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{ y }}
        >
          <div className="absolute inset-0 blueprint-grid opacity-30" />
          <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-saffron/30 blur-[120px] float-slow" />
          <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-amber-glow/25 blur-[140px] float-slow" style={{ animationDelay: "-3s" }} />
          <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-deep/30 blur-[120px] float-slow" style={{ animationDelay: "-5s" }} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" aria-hidden />
        <motion.div
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32"
          style={{ opacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-amber-glow"
          >
            ◢ Regulatory · Compliance · Licensing — since 2013
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight text-paper text-balance"
          >
            India approved.
            <br />
            <span className="italic text-amber-glow">On time.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-paper/75 text-pretty"
          >
            Vision is the single-window partner that takes your product through
            BIS, BEE, WPC, TEC, NABL, ISO and trademark approvals — without the
            usual paperwork purgatory.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-glow px-6 py-3 text-sm font-semibold text-ink transition-all hover:scale-[1.02]"
            >
              Get a free assessment
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper/10"
            >
              Browse services
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating stat strip */}
        <div className="relative border-t border-paper/15 bg-ink/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-paper/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-6 py-8">
                <p className="font-display text-4xl md:text-5xl text-amber-glow">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-paper/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={["BIS CRS", "BEE Star", "WPC ETA", "TEC MTCTE", "NABL", "ISO 9001", "Trademark", "FSSAI"]} />

      {/* SERVICES */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                ◇ 01 — Services
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl font-medium leading-[1] text-balance">
                Six verticals.
                <br />
                <span className="italic text-saffron">One door.</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md">
                Every Indian regulatory approval your product needs to enter the
                market — handled by specialists who do this every day.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline-grow"
              >
                See all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center justify-between gap-4 py-6 transition-all hover:pl-4"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-muted-foreground">{s.code}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-medium group-hover:text-saffron transition-colors">
                        {s.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-saffron group-hover:rotate-45" />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              ◇ 02 — Why Vision
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-4xl text-balance">
              We don't push paper. We <span className="italic text-saffron">unblock launches.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "12+ years deep", d: "Built specifically around India's BIS, WPC and BEE frameworks — not a general law firm." },
              { t: "850+ clients", d: "From Fortune 500 electronics OEMs to D2C startups across 14 countries." },
              { t: "98% first-pass", d: "Dossiers built to clear the Bureau on first review — no costly resubmissions." },
              { t: "Specialist team", d: "Practice leads dedicated to each vertical. You always speak to someone who's done it before." },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08}>
                <div className="group h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-saffron hover:shadow-[0_20px_60px_-30px_var(--saffron)]">
                  <p className="font-display text-3xl text-saffron">{b.t}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* (Industries section removed) */}
      {/* PROCESS */}
      <section className="ink-card relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-amber-glow">
              ◇ 03 — Process
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] text-paper text-balance">
              A process built to <span className="italic text-amber-glow">not waste your quarter.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.12}>
                <div className="relative">
                  <div className="font-display text-7xl font-bold text-amber-glow/30">{p.step}</div>
                  <h3 className="mt-2 font-display text-3xl text-paper">{p.title}</h3>
                  <p className="mt-3 text-paper/70 max-w-xs">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <Reveal>
          <div className="rounded-3xl bg-secondary p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-saffron/30 blur-3xl float-slow" aria-hidden />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Talk to us
                </p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-[1] text-balance">
                  Tell us about your product. We'll map the route to market.
                </h2>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background hover:bg-saffron hover:text-ink transition-colors"
                >
                  Book a 30-min consult <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
