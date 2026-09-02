import Image from "next/image";
import Reveal from "../Reveal";

const CREDENTIALS = [
  {
    org: "Commonwealth Lawyers Association",
    role: "Council Member",
  },
  {
    org: "Commonwealth Law Conference",
    role: "Delegate — Goa, India (2023)",
  },
  {
    org: "TAG Alliances",
    role: "International Network Representative",
  },
];

export default function Founder() {
  return (
    <section id="founder" className="bg-navy py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Founder</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-ivory md:text-5xl">
              Barrister Abeng
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-light">
              Founder &amp; Managing Partner
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ivory/70">
              <p>
                Barrister Abeng leads The Abeng Law Firm with a career built on rigorous advocacy
                and an active role in the international legal community.
              </p>
              <p>
                His practice combines hands-on courtroom experience in Cameroon with ongoing
                engagement in global legal policy and cross-border cooperation — representing the
                firm at international gatherings of independent legal professionals.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={150} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-5 -top-5 h-full w-full border border-gold/40 md:-left-6 md:-top-6" />
            <div className="relative h-[420px] w-full overflow-hidden md:h-[480px]">
              <Image
                src="/images/founder-portrait.jpeg"
                alt="Barrister Abeng, Founder of The Abeng Law Firm"
                fill
                sizes="(min-width: 768px) 400px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 md:grid-cols-3">
          {CREDENTIALS.map((c, i) => (
            <Reveal key={c.org} delayMs={i * 100}>
              <span className="font-serif text-2xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ivory">
                {c.org}
              </p>
              <p className="mt-2 text-sm text-ivory/60">{c.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
