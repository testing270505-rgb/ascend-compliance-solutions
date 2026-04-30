import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="ink-card mt-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-amber-glow">
              Vision Consultancy Pvt. Ltd.
            </p>
            <h3 className="mt-4 font-display text-3xl md:text-4xl leading-[1.05] text-balance">
              India's regulatory landscape, decoded.
            </h3>
            <p className="mt-6 max-w-md text-sm text-paper/70">
              A single-window partner for BIS, BEE, WPC, TEC, NABL, ISO and trademark approvals —
              built for international companies, SMEs and startups entering the Indian market.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-amber-glow">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-amber-glow">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-amber-glow">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-glow">
                  About
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link to="/blog" className="hover:text-amber-glow">*/}
              {/*    Resources*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Reach us</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              {/*<li>+91 98 1000 0000</li>*/}
              <li>support@visionconsultants.co</li>
              <li> Mumbai · New Delhi</li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs font-medium hover:bg-amber-glow hover:text-ink hover:border-amber-glow"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-paper/15 pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vision Consultancy. All rights reserved.</p>
          <p className="font-mono">
            Millennium Business Park, Mahape, Navi Mumbai – 400710 · CIN under Companies Act
          </p>
        </div>
      </div>
    </footer>
  );
}
