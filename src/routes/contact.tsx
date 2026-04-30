import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import * as React from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vision Consultancy — Phone, Email, Office, Quick Form" },
      {
        name: "description",
        content:
          "Reach Vision Consultancy in New Delhi and Mumbai. Phone, email, office address and a quick contact form.",
      },
      { property: "og:title", content: "Contact — Vision Consultancy" },
      {
        property: "og:description",
        content: "Get a free regulatory assessment for the Indian market.",
      },
    ],
  }),
  component: ContactPage,
});

type FormState = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setFormState("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setFormState("error");
    }
  }

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ◇ Contact
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[0.98] max-w-4xl text-balance">
            Tell us about your <span className="italic text-saffron">product.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            Send a few details and we'll respond within one working day with a tailored regulatory
            route.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-12">
        {/* Contact info */}
        <div className="lg:col-span-4 space-y-8">
          <Reveal delay={0.05}>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-saffron mt-1" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
                <p className="mt-1 font-display text-2xl">sales@visionconsultants.co</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-saffron mt-1" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Offices
                </p>
                <p className="mt-1 font-display text-xl">New Delhi · Mumbai, India</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Head office: Millennium Business Park, Mahape, Navi Mumbai – 400710
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl border border-border aspect-4/3">
              <iframe
                title="Office map"
                src="https://www.google.com/maps?q=Millennium+Business+Park,+Mahape,+Navi+Mumbai&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              {formState === "success" ? (
                <div className="py-12 text-center">
                  <p className="font-display text-3xl">Thanks — we got it.</p>
                  <p className="mt-3 text-muted-foreground">
                    We'll respond within one working day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Product / category" name="product" full />
                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="mt-2 w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/30"
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {formState === "error" && <p className="mt-4 text-sm text-red-500">{errorMsg}</p>}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-colors hover:bg-saffron hover:text-ink disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send enquiry <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  full,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
  required?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-saffron">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/30"
      />
    </div>
  );
}
