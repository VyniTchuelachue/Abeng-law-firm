import Reveal from "../Reveal";

const TESTIMONIALS = [
  { quote: "Someone who knows what he's doing.", name: "Desmond Chi", meta: "Local Guide · 211 reviews" },
  { quote: "Polite, proactive and very professional staff.", name: "Mirabel Toko", meta: "Local Guide · 4 reviews" },
  { quote: "Very good.", name: "Vish Boy", meta: "Google Review" },
];

export default function Reviews() {
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Client Feedback</p>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-navy md:text-4xl">
            Trusted by our clients
          </h2>
        </Reveal>

        <Reveal delayMs={180} className="mt-10 flex flex-wrap items-baseline gap-4">
          <span className="font-serif text-6xl font-semibold text-navy">4.5</span>
          <span className="text-lg text-muted">/ 5</span>
          <a
            href="https://maps.app.goo.gl/JTmnHy89TZwwTjJN7"
            target="_blank"
            rel="noopener"
            className="ml-2 text-sm font-semibold uppercase tracking-wide text-gold underline decoration-gold/40 underline-offset-4 hover:text-navy"
          >
            Based on verified Google reviews →
          </a>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-navy/10 pt-12 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delayMs={i * 100}>
              <p className="font-serif text-xl italic leading-snug text-navy">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-navy">{t.name}</p>
              <p className="text-xs text-muted">{t.meta}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
