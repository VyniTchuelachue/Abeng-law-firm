"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#founder", label: "People" },
  { href: "/#insights", label: "Insights" },
  { href: "/#international", label: "International" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-sm border-b border-white/10 py-2"
          : "bg-navy/40 border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6">
        <Link href="/" className="flex min-w-0 flex-shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo.jpeg"
            alt="The Abeng Law Firm crest"
            width={36}
            height={36}
            className="h-9 w-9 flex-shrink-0 rounded-full object-cover transition-all duration-300"
          />
          <span className="truncate font-serif text-lg font-semibold tracking-wide text-ivory">
            Abeng <span className="text-gold">Law Firm</span>
          </span>
        </Link>

        <nav className="hidden flex-1 justify-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-ivory/80 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden flex-shrink-0 items-center gap-2 rounded-sm border border-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-navy lg:inline-flex"
        >
          Request a Consultation <span aria-hidden>→</span>
        </Link>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="block h-px w-6 bg-ivory" />
          <span className="block h-px w-6 bg-ivory" />
          <span className="block h-px w-6 bg-ivory" />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-navy-secondary transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 text-sm font-medium uppercase tracking-wide text-ivory/85"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="my-4 rounded-sm border border-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gold"
          >
            Request a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
