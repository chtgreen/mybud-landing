# Stripe webhook — backend API spec (for your API programmer)

The landing site does **not** handle payments or user provisioning. Stripe sends webhooks **directly to your API**.

## What to build

- **Route:** `POST /webhooks/stripe` (path is your choice; use one stable URL).
- **Body:** Raw JSON bytes exactly as Stripe sends them (do **not** parse as form-urlencoded).
- **Header:** Read `Stripe-Signature` and verify the payload with Stripe’s signing secret (`whsec_...` from Dashboard → Developers → Webhooks → your endpoint).

## Stripe Dashboard configuration

1. Developers → Webhooks → Add endpoint.
2. URL: `https://<your-api-domain>/webhooks/stripe` (HTTPS only).
3. Events: at minimum `checkout.session.completed`.
4. Copy the endpoint **Signing secret** into your API env (e.g. `STRIPE_WEBHOOK_SECRET`).

## Verification (required)

Use the official Stripe SDK for your stack to verify signatures on the **raw request body** before parsing JSON. Reject with `400` if verification fails.

- Node: `stripe.webhooks.constructEvent(rawBody, sigHeader, webhookSecret)`
- Do not use body-parser JSON middleware on this route before verification.

## Successful handling

- Respond with **HTTP 2xx** quickly (Stripe retries on non-2xx).
- Treat each event **idempotently** using `event.id` (store processed IDs so duplicates do not double-create users).

## Event: `checkout.session.completed`

After verification, parse JSON. Relevant fields on `event.data.object` (Checkout Session):

| Field | Use |
|--------|-----|
| `id` | Session id (good for logs / idempotency key with `event.id`) |
| `customer_details.email` | Primary customer email (often present) |
| `customer_email` | Fallback if details missing |
| `customer_details.name` | Optional display name |
| `amount_total` | Amount in smallest currency unit (e.g. cents) |
| `currency` | Lowercase ISO code (`usd`, `brl`) |
| `mode` | `subscription` or `payment` |
| `subscription` | Subscription id if `mode === subscription` |
| `payment_status` | Should be `paid` for successful checkout |

**Minimum logic:** if `payment_status !== 'paid'`, you may still receive the event — decide whether to skip provisioning until paid.

## Suggested server-side steps (your API)

1. Verify signature.
2. If `type !== 'checkout.session.completed'`, return 200 and no-op (or only handle types you care about).
3. Extract email; if missing, log and return 200 (avoid infinite retries for bad data) or 400 per your policy.
4. Upsert user in Supabase with **service role** (server only): create auth user and/or update `profiles` / `subscriptions` table with `stripe_customer_id`, `plan`, `early_access`, etc.
5. Send transactional email (see **Onboarding email** below).
6. Persist `event.id` as processed.

## Onboarding email: Supabase link and TestFlight (both in one place)

**You cannot put TestFlight inside the Supabase invite URL.** Supabase’s link goes to your project’s auth handler (confirm email, magic link, etc.). TestFlight uses Apple’s URL (`https://testflight.apple.com/join/...` or equivalent). They are two different destinations.

**What to do instead (pick one):**

1. **Single “welcome” email from your API** (recommended after Stripe webhook): one message that includes:
   - Short intro (“You’re in — early access”)
   - **Sign in / set password:** link from Supabase (`inviteUserByEmail`, magic link, or recovery link generated server-side)
   - **Install the app:** your **public TestFlight join link** (from App Store Connect → TestFlight → External testing → Public Link), plus 1–2 lines on installing the TestFlight app first
2. **Custom SMTP + template in Supabase** (Dashboard → Auth → Email templates): edit the invite/magic-link template HTML to add a fixed paragraph + TestFlight URL below the button. The button still only does auth; the **body** carries TestFlight.
3. **Redirect after auth:** `SITE_URL` / redirect after confirm goes to a page on your domain that says “Download on TestFlight” with the link (still two steps, but feels like one flow).

Store the TestFlight public link in API env (e.g. `TESTFLIGHT_PUBLIC_URL`) so you change it in one place when Apple rotates the link.

## Optional: extra internal header

Not required if Stripe signature verification is implemented correctly. If you want defense in depth, you can add middleware that checks `X-Internal-Key` against a shared secret — **Stripe will not send this**; you would only use it if you put a reverse proxy in front. For Stripe → API direct, **signature verification is the protection**.

## Local testing

- [Stripe CLI](https://stripe.com/docs/stripe-cli): `stripe listen --forward-to localhost:3000/webhooks/stripe`
- Trigger test events: `stripe trigger checkout.session.completed`

## Landing site (reference)

- After payment, users can be redirected to `https://mybud.app/{lang}/welcome` (configure on each Payment Link in Stripe).
- Payment link URLs live in `wrangler.json` as `VITE_STRIPE_PAYMENT_LINK` and `VITE_STRIPE_PAYMENT_LINK_BRL`.
