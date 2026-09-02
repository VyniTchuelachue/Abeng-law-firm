import Reveal from "../Reveal";

const REASONS = [
  {
    title: "Local expertise",
    body: "Deep understanding of Cameroonian and OHADA legal frameworks.",
  },
  {
    title: "International perspective",
    body: "Professional relationships extending beyond Cameroon.",
  },
  {
    title: "Practical advice",
    body: "Legal advice translated into actionable business decisions.",
  },
  {
    title: "Direct engagement",
    body: "Clients work closely with experienced legal counsel.",
  },
  {
    title: "Bilingual service",
    body: "Professional communication in English and French.",
  },
];

export default function WhyAbeng() {
  return (
    <section className="bg-ivory pb-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why Abeng</p>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-4 max-w-lg font-serif text-3xl font-semibold leading-tight text-navy md:text-4xl">
            Why clients choose Abeng
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-navy/10 pt-10 md:grid-cols-5">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delayMs={i * 80}>
              <span className="font-serif text-3xl text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-navy">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{reason.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
