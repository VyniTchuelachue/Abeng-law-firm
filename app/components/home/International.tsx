import Image from "next/image";
import Reveal from "../Reveal";

const ENGAGEMENTS = [
  {
    src: "/images/intl-commonwealth-india.jpeg",
    title: "Commonwealth Law Conference",
    place: "Goa, India · 2023",
    body: "Barrister Abeng represented the firm at the 23rd Commonwealth Law Conference in his capacity as a Council Member of the Commonwealth Lawyers Association.",
  },
  {
    src: "/images/intl-tag-alliances.jpeg",
    title: "TAG Alliances",
    place: "International Legal Network",
    body: "Participation in TAG Alliances connects our clients to independent law firms working across borders.",
  },
  {
    src: "/images/intl-africa-strategy.jpeg",
    title: "Africa Regional Strategy Meeting",
    place: "Regional Civil Society Engagement",
    body: "Engaging with legal partners and civil society organisations across the region on shared strategic priorities.",
  },
];

export default function International() {
  return (
    <section id="international" className="relative overflow-hidden bg-navy py-24">
      {/* Subtle abstract network motif — deliberately not a literal map, per firm's guidance to avoid implying offices that don't exist */}
      <svg
        aria-hidden
        viewBox="0 0 1200 600"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      >
        <circle cx="600" cy="300" r="120" fill="none" stroke="#DDB86A" strokeWidth="1" />
        <circle cx="600" cy="300" r="220" fill="none" stroke="#DDB86A" strokeWidth="1" />
        <circle cx="600" cy="300" r="320" fill="none" stroke="#DDB86A" strokeWidth="1" />
        <line x1="200" y1="150" x2="1000" y2="450" stroke="#DDB86A" strokeWidth="1" />
        <line x1="1000" y1="150" x2="200" y2="450" stroke="#DDB86A" strokeWidth="1" />
        {[
          [200, 150], [1000, 450], [1000, 150], [200, 450], [600, 80], [600, 520],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#DDB86A" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-content px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">International</p>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-ivory md:text-4xl">
            Cameroon-based. Internationally connected.
          </h2>
        </Reveal>
        <Reveal delayMs={180}>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/65">
            Our practice is rooted in Cameroon, while our professional relationships extend across
            borders — connecting clients to trusted counsel through recognised international legal
            networks.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {ENGAGEMENTS.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 100}>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-gold-light">
                {item.place}
              </p>
              <h3 className="mt-1 font-serif text-xl text-ivory">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/55">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
