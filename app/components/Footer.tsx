import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 text-ivory/70">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Abeng Law Firm crest"
                width={52}
                height={52}
                className="h-[52px] w-[52px] rounded-full object-cover"
              />
              <span className="font-serif text-xl font-semibold text-ivory">
                Abeng <span className="text-gold">Law Firm</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed">
              Strategic legal counsel for individuals, businesses and international clients — rooted
              in Douala, Cameroon.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-ivory">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#about" className="hover:text-gold-light">About</a></li>
              <li><a href="/#expertise" className="hover:text-gold-light">Expertise</a></li>
              <li><a href="/#founder" className="hover:text-gold-light">People</a></li>
              <li><a href="/#insights" className="hover:text-gold-light">Insights</a></li>
              <li><a href="/#international" className="hover:text-gold-light">International</a></li>
              <li><Link href="/contact" className="hover:text-gold-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-ivory">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Douala, Cameroon</li>
              <li><a href="tel:233420208" className="hover:text-gold-light">233 420 208</a></li>
              <li><a href="mailto:contact@abenglawfirm.com" className="hover:text-gold-light">contact@abenglawfirm.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-ivory/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} The Abeng Law Firm. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-light">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-light">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-gold-light">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
