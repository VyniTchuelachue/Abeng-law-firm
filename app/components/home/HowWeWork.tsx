import Link from "next/link";
import Reveal from "../Reveal";

const STEPS = [
  { title: "Tell us about your matter", body: "Send us a brief description of your legal issue." },
  { title: "Initial assessment", body: "Our team reviews the matter and determines the appropriate next step." },
  { title: "Consultation", body: "We discuss your situation, objectives and available options." },
  { title: "Legal strategy", body: "Where appropriate, we develop a clear path forward." },
];

export default function HowWeWork() {
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">How We Work</p>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-4 max-w-lg font-serif text-3xl font-semibold leading-tight text-navy md:text-4xl">
            What happens next?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-navy/10 pt-10 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 90}>
              <span className="font-serif text-3xl text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={400} className="mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-navy-secondary"
          >
            Request a Consultation <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
