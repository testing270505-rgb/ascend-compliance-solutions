import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/components/site/SiteData";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Resources — BIS, ISO, FSSAI guides | Vision Consultancy" },
      { name: "description", content: "Plain-English guides to Indian regulatory processes: BIS certification, ISO cost, FSSAI registration." },
      { property: "og:title", content: "Resources & Guides — Vision Consultancy" },
      { property: "og:description", content: "Practical, current guides to BIS, ISO and FSSAI processes in India." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ Resources
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-4xl text-balance">
            Field notes from the <span className="italic text-saffron">Bureau.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            Practical guides to Indian regulatory processes — written by the
            people who file them every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-foreground hover:text-background min-h-[320px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-saffron">{p.category}</span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-paper/60">{p.read}</span>
                </div>
                <h2 className="mt-8 font-display text-2xl md:text-3xl leading-tight">{p.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground group-hover:text-paper/75 flex-1">{p.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
