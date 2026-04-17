import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vision Consultancy — Phone, Email, Office, Quick Form" },
      { name: "description", content: "Reach Vision Consultancy in New Delhi and Mumbai. Phone, email, office address and a quick contact form." },
      { property: "og:title", content: "Contact — Vision Consultancy" },
      { property: "og:description", content: "Get a free regulatory assessment for the Indian market." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
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
            Send a few details and we'll respond within one working day with a
            tailored regulatory route.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-12">
        {/* Contact info */}
        <div className="lg:col-span-4 space-y-8">
          <Reveal>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-saffron mt-1" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                <p className="mt-1 font-display text-2xl">+91 98 1000 0000</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-saffron mt-1" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="mt-1 font-display text-2xl">hello@visionconsult.in</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-saffron mt-1" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Offices</p>
                <p className="mt-1 font-display text-xl">New Delhi · Mumbai, India</p>
                <p className="mt-1 text-sm text-muted-foreground">Head office: Connaught Place, New Delhi 110001</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl border border-border aspect-[4/3]">
              <iframe
                title="Office map"
                src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed"
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
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              {sent ? (
                <div className="py-12 text-center">
                  <p className="font-display text-3xl">Thanks — we got it.</p>
                  <p className="mt-3 text-muted-foreground">We'll respond within one working day.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" name="name" />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" />
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
                  <button
                    type="submit"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-colors hover:bg-saffron hover:text-ink"
                  >
                    Send enquiry <ArrowUpRight className="h-4 w-4" />
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
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/30"
      />
    </div>
  );
}
