import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pb-16 pt-32 md:min-h-[880px] md:pb-0 md:pt-0">
      {/* Full-bleed background photo — desktop only (mobile keeps a lightweight gradient) */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-secondary md:hidden" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04080f]/97 via-[#04080f]/85 to-[#04080f]/30 md:via-[#04080f]/70 md:to-[#04080f]/20" />

      <div className="relative z-10 mx-auto max-w-content px-6 md:pt-44">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] leading-relaxed text-gold-light">
              Strategic Legal Counsel.
              <br />
              Practical Solutions. Lasting Impact.
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <span className="my-6 block h-px w-10 bg-gold" />
          </Reveal>
          <Reveal delayMs={180}>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-ivory md:text-6xl">
              Trusted Legal Counsel <span className="text-gold">for Individuals &amp; Businesses</span>
            </h1>
          </Reveal>
          <Reveal delayMs={300}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">
              Cameroon-based legal representation with an international perspective — advising
              individuals, businesses and institutions across complex legal matters.
            </p>
          </Reveal>
          <Reveal delayMs={420}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-gold-light"
              >
                Request a Consultation <span aria-hidden>→</span>
              </Link>
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 rounded-sm border border-gold-light/70 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-gold-light transition-colors hover:bg-gold-light hover:text-navy"
              >
                Explore Our Expertise <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Desktop portrait — vertically centered in the hero, per the requested fix */}
      <Reveal
        delayMs={250}
        className="absolute right-[3%] top-1/2 hidden h-[82%] max-w-[44%] -translate-y-1/2 items-end md:flex"
      >
        <Image
          src="/images/hero-portrait-cutout.png"
          alt="Portrait of Barrister Abeng, Founder of The Abeng Law Firm"
          width={620}
          height={780}
          priority
          className="h-full w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
        />
      </Reveal>
      <Reveal
        delayMs={500}
        className="absolute right-[8%] top-[26%] hidden text-right md:block"
      >
        <p className="font-signature text-4xl text-gold-light">Barrister Abeng</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-ivory/75">
          Founder &amp; Managing Partner
        </p>
      </Reveal>

      {/* Mobile: portrait sits below the headline, not squeezed beside it */}
      <div className="relative z-10 mx-auto mt-10 flex max-w-[240px] flex-col items-center px-6 text-center md:hidden">
        <Image
          src="/images/hero-portrait-cutout.png"
          alt="Portrait of Barrister Abeng, Founder of The Abeng Law Firm"
          width={480}
          height={600}
          className="h-auto w-full object-contain"
        />
        <p className="mt-4 font-signature text-3xl text-gold-light">Barrister Abeng</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-ivory/75">
          Founder &amp; Managing Partner
        </p>
      </div>
    </section>
  );
}
