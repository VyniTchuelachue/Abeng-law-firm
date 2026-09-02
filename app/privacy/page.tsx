import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Abeng Law Firm",
};

export default function PrivacyPage() {
  return (
    <main className="bg-ivory pb-24 pt-40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 rounded-sm border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-semibold text-navy">
          Draft — pending attorney review. This page is a placeholder and has not yet been
          approved by the firm.
        </div>

        <h1 className="font-serif text-4xl font-semibold text-navy">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted">
          <p>
            The Abeng Law Firm (&ldquo;the Firm&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects
            your privacy. This policy explains, in general terms, what information we collect
            through this website and how it is used.
          </p>
          <h2 className="font-serif text-xl text-navy">Information we collect</h2>
          <p>
            When you submit a consultation enquiry, we collect the information you provide —
            typically your name, email address, phone number, and a description of your legal
            matter.
          </p>
          <h2 className="font-serif text-xl text-navy">How we use it</h2>
          <p>
            Information submitted through this website is used solely to respond to your enquiry
            and, where a client relationship is established, to provide legal services. We do not
            sell or share your information with third parties for marketing purposes.
          </p>
          <h2 className="font-serif text-xl text-navy">Contact</h2>
          <p>
            Questions about this policy can be directed to{" "}
            <a href="mailto:contact@abenglawfirm.com" className="text-gold underline">
              contact@abenglawfirm.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
