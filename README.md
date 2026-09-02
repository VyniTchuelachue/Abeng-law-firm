# The Abeng Law Firm — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Going live with the consultation form's email

The `/contact` form posts to `/api/consultation`, which validates the submission and, right
now, logs it to the server console (visible in your Vercel deployment's function logs). To
have it actually send an email to the firm:

1. Create a free account at [resend.com](https://resend.com) (or any email API provider).
2. Verify a sending domain (or use their sandbox sender while testing).
3. In your Vercel project settings, add an environment variable named `RESEND_API_KEY` with
   your Resend API key.
4. Redeploy. The route in `app/api/consultation/route.ts` will automatically start sending
   real emails once that variable is present — no code changes needed.

If the destination inbox should be something other than `contact@abenglawfirm.com`, update
`CONSULTATION_TO_EMAIL` at the top of that file.

## Content still pending attorney review

The following pages contain **draft placeholder copy** and are clearly marked as such on the
page itself — do not treat them as final until the firm's counsel has reviewed the wording:

- `/privacy`
- `/disclaimer`
- `/terms`

## What's next (not built in this pass)

Per the phased plan, this pass covers the full homepage redesign, the Contact page, and the
legal-page stubs. Still to come in a follow-up pass:

- Dedicated pages for each of the 8 practice areas (currently homepage rows only)
- Full-length Legal Insights articles (currently a "Coming Soon" teaser)
- Deeper legal-page content once the firm's attorney has reviewed it
