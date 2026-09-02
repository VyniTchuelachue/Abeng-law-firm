import Reveal from "../Reveal";

const ARTICLES = [
  {
    title: "Understanding OHADA Business Law",
    category: "Corporate & Commercial",
  },
  {
    title: "Land Acquisition in Cameroon: Key Due Diligence Steps",
    category: "Real Estate",
  },
  {
    title: "Doing Business in Cameroon: A Perspective for Foreign Investors",
    category: "International",
  },
];

export default function InsightsTeaser() {
  return (
    <section id="insights" className="bg-navy py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Legal Insights</p>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-4 max-w-lg font-serif text-3xl font-semibold leading-tight text-ivory md:text-4xl">
            Perspectives on law in Cameroon and beyond
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delayMs={i * 90}>
              <div className="flex flex-col gap-3 py-8 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-light">
                    {a.category}
                  </p>
                  <h3 className="mt-2 max-w-xl font-serif text-2xl text-ivory md:text-3xl">
                    {a.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-ivory/40">
                  Coming Soon
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
