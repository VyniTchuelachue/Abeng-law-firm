import type { Metadata } from "next";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
  title: "Contact | The Abeng Law Firm",
  description: "Request a consultation with The Abeng Law Firm in Douala, Cameroon.",
};

export default function ContactPage() {
  return (
    <main className="bg-navy pb-24 pt-40">
      <div className="mx-auto max-w-content px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get In Touch</p>
        <h1 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight text-ivory md:text-5xl">
          Let&rsquo;s discuss your matter.
        </h1>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ivory/65">
          Tell us briefly about your legal needs and our team will get back to you.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-ivory">The Abeng Law Firm</h2>
            <p className="mt-1 text-sm text-ivory/60">Douala, Cameroon</p>

            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold-light">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:233420208" className="text-ivory/85 hover:text-gold-light">
                    233 420 208
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold-light">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:contact@abenglawfirm.com" className="text-ivory/85 hover:text-gold-light">
                    contact@abenglawfirm.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold-light">Office Hours</dt>
                <dd className="mt-1 text-ivory/85">Monday – Friday: 8:00 AM – 5:30 PM</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold-light">Location</dt>
                <dd className="mt-1">
                  <a
                    href="https://maps.app.goo.gl/JTmnHy89TZwwTjJN7"
                    target="_blank"
                    rel="noopener"
                    className="text-ivory/85 hover:text-gold-light"
                  >
                    Get Directions on Google Maps →
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-sm border border-white/10">
              <iframe
                title="The Abeng Law Firm location map"
                src="https://www.google.com/maps?q=4.0290645,9.7019888&hl=en&z=16&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory">Request a Consultation</h2>
            <div className="mt-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
