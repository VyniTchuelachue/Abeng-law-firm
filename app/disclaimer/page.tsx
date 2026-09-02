import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | The Abeng Law Firm",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-ivory pb-24 pt-40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 rounded-sm border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-semibold text-navy">
          Draft — pending attorney review. This page is a placeholder and has not yet been
          approved by the firm.
        </div>

        <h1 className="font-serif text-4xl font-semibold text-navy">Legal Disclaimer</h1>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted">
          <p>
            The content of this website is provided for general informational purposes only and
            does not constitute legal advice. Viewing this website, or sending an enquiry through
            it, does not create an attorney-client relationship between you and The Abeng Law
            Firm.
          </p>
          <p>
            No attorney-client relationship is created by submitting information through this
            website. Such a relationship is only formed once the Firm has confirmed engagement in
            writing.
          </p>
          <p>
            Laws and their interpretation change over time and may vary by jurisdiction. You
            should not act, or refrain from acting, on the basis of any content on this website
            without first seeking appropriate legal counsel on your specific circumstances.
          </p>
        </div>
      </div>
    </main>
  );
}
