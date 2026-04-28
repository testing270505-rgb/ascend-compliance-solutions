import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/components/site/SiteData";

const bodies: Record<string, string[]> = {
  "how-to-get-bis-certification-in-india": [
    "BIS CRS (Compulsory Registration Scheme) is a test-report-based regime. Unlike ISI marking, there is no factory audit — your product is judged on lab results.",
    "Step 1 — Pick the correct Indian Standard (IS). The BIS notification specifies the IS your product falls under. Get this wrong and the entire dossier fails.",
    "Step 2 — Sample testing at a BIS-recognised lab. Schedule slots early; lab queues during festive months can stretch to 4–6 weeks.",
    "Step 3 — File the application with technical documentation, test report, AIR (Authorised Indian Representative) details and fees.",
    "Step 4 — Address Bureau queries within deadline. Most rejections come from incomplete BOMs or mismatched IS clauses.",
    "Step 5 — Receive your R-Number and start labelling. Renewal is every 2 years.",
  ],
  "iso-certification-cost": [
    "There are three real cost buckets in ISO certification: registrar fees, audit days and internal documentation effort.",
    "Registrar fees vary by accreditation body (NABCB, UKAS, ANAB) and certification scope. Expect ₹40,000–₹1,50,000 for a single-site SME.",
    "Audit days depend on employee count and risk. A 50-person firm typically needs 3–4 days for ISO 9001 stage-1 + stage-2.",
    "Documentation is the silent cost. Building manuals, procedures and records from scratch takes 30–60 person-days unless you buy templates.",
    "ISO 27001 and 45001 cost more than ISO 9001 due to specialist audit time and broader evidence requirements.",
  ],
  "fssai-registration-process": [
    "FSSAI has three tiers: Basic (turnover < ₹12 L), State (₹12 L–₹20 Cr) and Central (>₹20 Cr or import/export).",
    "Basic registration is filed on FoSCoS, takes ~7 working days and needs minimal documents — mostly identity and address proofs.",
    "State licences require a unit layout, water test report and food safety management plan. Expect 30–60 days.",
    "Central licences add product-category specifics, import-export code (where applicable) and a more rigorous SOP set.",
    "Renew on time — late renewal carries ₹100/day in penalties and can suspend operations.",
  ],
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post, body: bodies[params.slug] ?? [] };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Vision Resources` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
        ]
      : [],
  }),
  component: BlogPost,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-5xl">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-block underline-grow">
        Back to resources →
      </Link>
    </div>
  ),
});

function BlogPost() {
  const { post, body } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All resources
      </Link>
      <p className="mt-8 font-mono text-xs uppercase tracking-widest text-saffron">
        {post.category} · {post.read}
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-6xl font-medium leading-none text-balance">
        {post.title}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground">
        {body.map((p: string, i: number) => (
          <p key={i} className="text-pretty">
            <span className="font-mono text-xs text-saffron mr-3">0{i + 1}</span>
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
