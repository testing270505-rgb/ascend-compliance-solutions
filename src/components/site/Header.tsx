import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          {/*Logo*/}
          <img
            src="/src/images/logo/VC3.png"
            className="h-14 w-auto object-contain mix-blend-multiply"
            alt=""
          />
          {/*<span className="grid h-8 w-8 place-items-center rounded-sm bg-foreground text-background font-display text-lg font-bold transition-transform group-hover:rotate-3">*/}
          {/*  V*/}
          {/*</span>*/}
          {/*Brand Name*/}
          {/*<span className="font-display text-lg font-semibold tracking-tight">*/}
          {/*  <span className="bg-linear-to-r from-[#06192D] via-[#0B2D4D] to-[#F5A623] bg-clip-text text-transparent">*/}
          {/*    Vision*/}
          {/*  </span>{" "}*/}
          {/*  <span className="text-[#F5A623] italic">Consultancy</span>*/}
          {/*</span>*/}
          <span className="font-display text-lg font-semibold tracking-tight bg-linear-to-r from-[#06192D] via-[#0B2D4D] to-[#F5A623] bg-clip-text text-transparent">
            Vision Consultancy
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors underline-grow ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-all hover:bg-accent hover:text-accent-foreground lg:inline-flex"
        >
          Get a quote →
        </Link>
        <button aria-label="Menu" className="lg:hidden p-2" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
            >
              Get a quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
