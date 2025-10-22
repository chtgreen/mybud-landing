# 🚀 Go-Live To‑Do List

Use this checklist to close the remaining gaps before launching the landing pages in production.

## 🔴 Blockers (Fix Before Launch)
- Update every footer destination; social icons and legal links still point to `#` so visitors can’t reach your channels or policies (`src/react-app/components/Footer.tsx`).
- Provide the Open Graph / Twitter preview asset referenced by the SEO tags (`public/mybud-og-image.png`) to avoid broken link previews.
- Execute the hardening SQL on the live Supabase project and remove seed rows:
  1. Run `supabase-setup.sql` **without** the demo inserts, or delete the inserted rows immediately after.
  2. Apply `RLS-SEGURO.sql` so FORCE RLS is enabled and only the intended roles can read/write.
- Confirm the priority-access CTA resolves; today `https://store.mybud.app/` fails the DNS check used in our automated tests (`BetaModal.tsx`).

## 🟠 High Priority (Address in the same sprint)
- Restrict or disable the in-browser copy editor gate that activates with `?edit=1` (`src/react-app/App.tsx`), otherwise anyone can live-edit copy in production.
- Replace the App Store badges’ `href="#"` with real store URLs or an explicit “coming soon” action (`src/react-app/components/ComingSoon.tsx`).
- Point the header logo to the localized homepage instead of `#` so the primary brand link works (`src/react-app/components/Header.tsx`).
- Decide what to do with `VITE_STRIPE_PAYMENT_LINK`; populate it with the actual checkout link or remove the unused env var from `.env` and `wrangler.json`.
- Complete the real imagery/screenshots pass outlined in `LANDING_PAGE_IMPROVEMENTS.md` to align with the CTO’s “less abstract” guidance.

## ✅ Verification & Deployment
- Re-run `node test-forms-and-links.js` after the Shopify domain resolves; the current failure is only the DNS lookup.
- Walk through every step in `MANUAL_TEST_CHECKLIST.md` once Supabase is live (ensures analytics + DB writes work end-to-end).
- When all boxes above are green: build & deploy with `./deploy.sh`, then watch `wrangler tail`, GA4 real-time, and PostHog live events for smoke validation.

