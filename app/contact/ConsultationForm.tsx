"use client";

import { useState } from "react";

const MATTER_TYPES = [
  "Corporate / Commercial",
  "Litigation",
  "Real Estate",
  "Employment",
  "Banking & Finance",
  "Family / Personal",
  "Intellectual Property",
  "Immigration / Investment",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/30 bg-navy-secondary p-8 text-center">
        <p className="font-serif text-2xl text-ivory">Thank you.</p>
        <p className="mt-3 text-sm leading-relaxed text-ivory/70">
          Your enquiry has been received. A member of our team will get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-white/15 bg-navy px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input name="name" type="text" required placeholder="Full Name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email Address" className={inputClass} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
        <select name="matterType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Matter Type
          </option>
          {MATTER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="description"
        required
        rows={5}
        placeholder="Briefly tell us about your matter."
        className={inputClass}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-gold-light disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request Consultation"} <span aria-hidden>→</span>
      </button>

      {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}

      <p className="border-t border-white/10 pt-5 text-xs leading-relaxed text-ivory/45">
        Your enquiry is treated with discretion. Please do not include highly sensitive or
        confidential information until an attorney has confirmed a secure channel for
        communication.
      </p>
    </form>
  );
}
