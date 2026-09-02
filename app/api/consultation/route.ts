import { NextRequest, NextResponse } from "next/server";

interface ConsultationPayload {
  name?: string;
  email?: string;
  phone?: string;
  matterType?: string;
  description?: string;
}

/**
 * Sends the consultation enquiry by email once an email-service API key is configured.
 * Without one, the submission is logged server-side so the form still works end-to-end
 * during development / before the firm connects a provider.
 *
 * To go live with real email delivery:
 *   1. Create a free account at https://resend.com (or any provider you prefer).
 *   2. Verify a sending domain (or use their sandbox address for testing).
 *   3. Add RESEND_API_KEY to your environment variables (Vercel project settings).
 *   4. Update CONSULTATION_TO_EMAIL below if the destination inbox changes.
 */
const CONSULTATION_TO_EMAIL = "contact@abenglawfirm.com";

async function sendConsultationEmail(payload: Required<ConsultationPayload>) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[consultation] RESEND_API_KEY not set — logging submission instead of emailing:", payload);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Abeng Law Firm Website <onboarding@resend.dev>",
      to: [CONSULTATION_TO_EMAIL],
      reply_to: payload.email,
      subject: `New consultation request — ${payload.matterType}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || "—"}\nMatter Type: ${payload.matterType}\n\n${payload.description}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Email provider error: ${res.status} ${body}`);
  }
}

export async function POST(request: NextRequest) {
  let payload: ConsultationPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, matterType, description, phone = "" } = payload;

  if (!name || !email || !matterType || !description) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    await sendConsultationEmail({ name, email, phone, matterType, description });
  } catch (err) {
    console.error("[consultation] failed to send email:", err);
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
