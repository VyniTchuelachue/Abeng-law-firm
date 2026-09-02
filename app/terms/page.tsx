import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | The Abeng Law Firm",
};

export default function TermsPage() {
  return (
    <main className="bg-ivory pb-24 pt-40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 rounded-sm border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-semibold text-navy">
          Draft — pending attorney review. This page is a placeholder and has not yet been
          approved by the firm.
        </div>

        <h1 className="font-serif text-4xl font-semibold text-navy">Terms of Use</h1>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted">
          <p>
            By accessing this website, you agree to use it for lawful purposes only and in a
            manner that does not infringe the rights of, or restrict or inhibit the use of, this
            site by any third party.
          </p>
          <h2 className="font-serif text-xl text-navy">Intellectual property</h2>
          <p>
            The content, layout and design of this website are the property of The Abeng Law
            Firm unless otherwise stated, and may not be reproduced without permission.
          </p>
          <h2 className="font-serif text-xl text-navy">No warranty</h2>
          <p>
            This website is provided on an &ldquo;as is&rdquo; basis. While we aim to keep
            information accurate and current, we make no warranties about the completeness,
            reliability, or accuracy of its content.
          </p>
          <h2 className="font-serif text-xl text-navy">Governing law</h2>
          <p>These terms are governed by the laws of the Republic of Cameroon.</p>
        </div>
      </div>
    </main>
  );
}
