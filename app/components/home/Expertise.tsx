import Link from "next/link";
import Reveal from "../Reveal";

const AREAS = [
  { title: "Corporate & Commercial", sub: "Business formation · Governance · M&A" },
  { title: "Litigation & Dispute Resolution", sub: "Commercial · Civil · OHADA · Arbitration" },
  { title: "Real Estate & Property", sub: "Land · Transactions · Due diligence" },
  { title: "Labour & Employment", sub: "Employment · Workplace · Disputes" },
  { title: "Banking & Finance", sub: "Lending · Security · Regulatory compliance" },
  { title: "Family & Personal", sub: "Marriage · Succession · Inheritance" },
  { title: "Intellectual Property", sub: "Trademark · Copyright · IP protection" },
  { title: "Immigration & Investment", sub: "Residency · Work permits · Cross-border matters" },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-navy py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What We Do</p>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ivory md:text-4xl">
            Our Expertise
          </h2>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="mt-3 max-w-md text-sm text-ivory/60">
            Legal counsel designed around the complexity of your matter.
          </p>
        </Reveal>

        <div className="mt-12 border-t border-white/10">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delayMs={i * 40}>
              <Link
                href="/contact"
                className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.03] md:py-7"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="w-8 font-serif text-lg text-gold/50 transition-colors group-hover:text-gold md:w-12 md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ivory transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-light md:text-2xl">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-xs text-ivory/45 md:text-sm">{area.sub}</p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="flex-shrink-0 text-xl text-ivory/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
