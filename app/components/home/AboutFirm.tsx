import Image from "next/image";
import Reveal from "../Reveal";

const FACTS = ["OHADA & Cameroonian Law", "French & English", "Douala · Cameroon", "International Network"];

export default function AboutFirm() {
  return (
    <section id="about" className="bg-ivory">
      <div className="mx-auto grid max-w-content grid-cols-1 md:grid-cols-2">
        <Reveal className="relative min-h-[360px] md:min-h-[620px]">
          <Image
            src="/images/about-firm.jpeg"
            alt="Barrister Abeng engaging at an international legal and civil society meeting"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Firm</p>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Local knowledge. <br />International perspective.
            </h2>
          </Reveal>

          <Reveal delayMs={200} className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              The Abeng Law Firm is a full-service legal practice based in Douala, Cameroon, built on
              rigorous courtroom experience and a deep command of Cameroonian and OHADA law.
            </p>
            <p>
              We advise individuals, growing businesses and multinational clients across corporate,
              commercial and dispute matters — combining careful legal analysis with practical,
              business-minded counsel.
            </p>
            <p>
              Our attorneys work fluently in French and English, and maintain professional
              relationships with independent firms and legal networks that extend well beyond
              Cameroon.
            </p>
          </Reveal>

          <Reveal delayMs={320} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-navy/10 pt-8">
            {FACTS.map((fact) => (
              <span key={fact} className="text-xs font-semibold uppercase tracking-wide text-navy/70">
                {fact}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
