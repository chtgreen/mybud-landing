# Handoff: landing site → mobile app (what we built & what you should expect)

This document is for the **mobile engineer** (iOS/Android). It summarizes what the **mybud-landing** repo does today and how it connects to the app, payments, and backend.

---

## 1. What the landing is responsible for

| Area | Responsibility |
|------|----------------|
| Marketing copy | PT / EN / ES via `src/react-app/locales/*.json` |
| Early access CTA | Opens **Stripe Payment Links** (USD or BRL by language) |
| Waitlist (free) | `BetaModal` inserts rows into Supabase table **`beta_signups`** (anon key, client-side) |
| Post-payment UX | Static **welcome** page at `https://mybud.app/{pt\|en\|es}/welcome` |
| Analytics | PostHog + GA events on CTA clicks, modal, etc. |

The landing **does not** create paid users, **does not** verify Stripe, and **does not** hold the Supabase **service role** key.

---

## 2. What you should expect as the app developer

### 2.1 Distribution (current product stance)

- **Early access beta:** messaging says **iOS is available via TestFlight**; **Android is “coming soon”** on the marketing site (the app may still be built for both internally).
- **Paid early access** is sold on the web; users still **log into the mobile app** with whatever auth flow you already use (typically Supabase Auth email/magic link or similar).
- **New paying users** will appear in your backend after the **API team** processes Stripe (see §4). Your job is to ensure **only entitled users** can use premium features if that is enforced client-side, server-side, or both (coordinate with API).

### 2.2 User identity

- Checkout collects **email + name** in Stripe; that email should match (or be linked to) the account you create in Supabase.
- If the API creates `auth.users` with `email_confirm: true`, the user can sign in with that email once you send them password setup / magic link / TestFlight instructions (process owned by API or ops).

### 2.3 TestFlight

- Landing copy tells users they will receive a **TestFlight invite by email** (within 24h in the welcome copy). **Sending that email** is not done by the landing repo — it is **API/ops** (or manual until automated).
- You should provide a **stable public TestFlight link** (App Store Connect → TestFlight → public link) to whoever sends onboarding emails.

**Supabase invite link ≠ TestFlight.** The magic/invite URL only completes auth in Supabase; it cannot “contain” the TestFlight install flow. Ops/API should send **one email** (or one custom Supabase template) that includes **both**: (1) Supabase sign-in / confirm link and (2) TestFlight public link. See [stripe-webhook-backend-spec.md](./stripe-webhook-backend-spec.md#onboarding-email-supabase-link-and-testflight-both-in-one-place).

### 2.4 Android

- Play / APK distribution is **not** promised on the current landing. When Android early access is ready, marketing will update copy and possibly add a second checkout or the same flow with different post-purchase instructions.

---

## 3. Technical details useful for mobile

### 3.1 Supabase on the landing (public only)

- URL and **anon** key are embedded in the built site (same project you use for the app).
- Used for: **`beta_signups`** inserts from the waitlist form in `BetaModal.tsx`.
- **Service role** must **never** ship in the app or on the landing; only on your **API server**.

### 3.2 Stripe Payment Links (configured in Stripe Dashboard)

After deploy, env vars (see `wrangler.json`) drive which link opens:

- **`VITE_STRIPE_PAYMENT_LINK`** — USD checkout (EN/ES users, and PT fallback if BRL link missing).
- **`VITE_STRIPE_PAYMENT_LINK_BRL`** — BRL checkout (**PT** locale).

Locale is taken from the URL segment (`/pt/grower`, `/en/grower`, `/es/grower`) and i18n.

**Important for Stripe setup (ops):** each Payment Link’s product/price should be **annual** if you sell per year — in Dashboard the recurring interval must be **year**, not month, or Checkout will show “per month” incorrectly.

### 3.3 Post-payment redirect (Stripe → welcome page)

In **Stripe Dashboard**, for each Payment Link, set **After payment** → redirect to:

- USD link → e.g. `https://mybud.app/en/welcome` (or `/pt/welcome` if you prefer one language).
- BRL link → e.g. `https://mybud.app/pt/welcome`.

The welcome page is **informational only** (no query params from Stripe required). It does not prove payment by itself.

### 3.4 Routes (for deep links / support docs)

| Path | Purpose |
|------|---------|
| `/{lang}/grower` | Main B2C landing (`pt`, `en`, `es`) |
| `/{lang}/welcome` | Thank-you / next steps after payment |
| `/{lang}/collective`, `/{lang}/industry` | B2B pages |

---

## 4. Backend / API (not mobile, but affects you)

Stripe webhooks are sent to **your API**, not the landing. Full spec: [stripe-webhook-backend-spec.md](./stripe-webhook-backend-spec.md).

The API should:

1. Verify `Stripe-Signature`.
2. Handle `checkout.session.completed`.
3. Create/update user and **paid / early_access** flags in DB.
4. Send onboarding email (TestFlight, magic link, etc.).

Until that exists, **manual onboarding** after each sale is still possible (Stripe email notification → create user → send TestFlight).

---

## 5. Analytics events (mobile may ignore)

The landing fires events such as:

- `priority_access_clicked`, early access purchase CTA with `value` / `currency` (USD vs BRL) in properties.
- `welcome_page_viewed` when the post-payment page loads.

No mobile SDK is required for these.

---

## 6. If something breaks from the app’s perspective

| Symptom | Likely cause |
|---------|----------------|
| User paid but cannot sign in | API never created / confirmed auth user; or wrong email |
| User expects TestFlight, nothing arrived | Email not sent yet; spam; wrong address in Stripe |
| “Button does nothing” on web | `VITE_STRIPE_PAYMENT_LINK` empty in deploy env |
| Wrong currency on web | User on wrong language path; or BRL link not set |

---

## 7. Repo reference (for code spelunking)

- `src/react-app/components/BetaModal.tsx` — waitlist + paid CTA + Stripe URLs.
- `src/react-app/pages/WelcomePage.tsx` — post-payment UI.
- `src/react-app/contexts/LanguageContext.tsx` — language detection and `/{lang}` routing.
- `wrangler.json` — production env vars for Cloudflare deploy.
- `docs/stripe-webhook-backend-spec.md` — webhook contract for the API engineer.

---

## 8. One-line summary for mobile

**Users pay on the web via Stripe; the app stays the product they install via TestFlight (iOS first). Entitlement and account creation are owned by the API + Supabase service role, not the landing or the mobile client.**

If you need a **signed JWT** or **custom claim** from Supabase for “early access active,” that is implemented in **API/Supabase**, not in this landing repo.
