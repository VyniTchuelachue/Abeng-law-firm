import Reveal from "../Reveal";

const ITEMS = [
  {
    label: "Cameroon & OHADA",
    sub: "Local legal knowledge",
    icon: (
      <path d="M4 21h16M5 21V9l7-5 7 5v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Bilingual Practice",
    sub: "French & English",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z" />
      </>
    ),
  },
  {
    label: "International Network",
    sub: "Connected beyond Cameroon",
    icon: (
      <>
        <circle cx="6" cy="7" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M7.7 8.3 10.5 16M16.3 8.3 13.5 16M8 7h8" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Client Focused",
    sub: "Practical. Responsive. Discreet.",
    icon: (
      <path
        d="M12 12.5c1.9 0 3.4-1.6 3.4-3.5S13.9 5.5 12 5.5 8.6 7.1 8.6 9s1.5 3.5 3.4 3.5ZM5 19c.9-3 3.6-5 7-5s6.1 2 7 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy-secondary py-14">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-y-10 gap-x-6 px-6 md:grid-cols-4 md:gap-10">
        {ITEMS.map((item, i) => (
          <Reveal key={item.label} delayMs={i * 90} className="flex flex-col items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="h-7 w-7 text-gold"
            >
              {item.icon}
            </svg>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ivory">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-ivory/60">{item.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
