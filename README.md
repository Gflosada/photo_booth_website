# Oralndo Ohiti Booth Events

Production-ready React, TypeScript, and Vite website for Oralndo Ohiti Booth Events, an Orlando photo booth rental business serving weddings, parties, corporate events, quinceaneras, and private celebrations across Central Florida.

## Tech Stack

- React + TypeScript
- Vite 6
- Tailwind CSS v4
- Radix/shadcn-style UI primitives
- React Router
- GSAP + ScrollTrigger
- React Hook Form + Zod
- React Helmet Async
- Supabase-ready lead capture
- Stripe-ready checkout architecture
- Vercel SPA deployment

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts Vite locally.
- `npm run build` runs TypeScript and creates a production build.
- `npm run preview` previews the production build.
- `npm run typecheck` runs TypeScript without emitting files.
- `npm run lint` runs ESLint.
- `npm run format` formats files with Prettier.

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

Public frontend variables:

- `VITE_PUBLIC_SITE_URL`
- `VITE_PUBLIC_GA_ID`
- `VITE_PUBLIC_GTM_ID`
- `VITE_PUBLIC_META_PIXEL_ID`
- `VITE_PUBLIC_CLARITY_ID`
- `VITE_PUBLIC_BUSINESS_PHONE`
- `VITE_PUBLIC_BUSINESS_EMAIL`
- `VITE_PUBLIC_SUPABASE_URL`
- `VITE_PUBLIC_SUPABASE_ANON_KEY`

Server-only variables for Vercel functions:

- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`

Do not expose server-only secrets in frontend code.

## Project Structure

- `src/app` contains app shell and providers.
- `src/components/layout` contains header, footer, sticky mobile CTAs, and scroll restoration.
- `src/components/animation` contains GSAP providers and reusable hooks.
- `src/components/booking` contains quote and booking form components.
- `src/components/seo` contains metadata and schema components.
- `src/pages` contains route-level pages.
- `src/data` contains services, packages, FAQ, testimonials, gallery, and SEO content.
- `src/lib` contains analytics, validation, Supabase, Stripe, and submission helpers.
- `api` contains Vercel serverless placeholders.

## Design System

The site preserves the Figma Make premium event aesthetic: black backgrounds, glass cards, electric purple, soft pink, champagne highlights, rounded CTAs, and large visual sections. Tokens live in `src/styles/tokens.css` and extend the existing Tailwind v4 globals.

## GSAP Animation System

GSAP is installed as the primary production animation engine. Reusable hooks support reveal, stagger, parallax, text reveal, page transition, and reduced-motion behavior. Existing Figma `motion/react` animations remain where removing them would create unnecessary churn; future cleanup can migrate the remaining small interactions.

## SEO Strategy

The app uses React Router routes, unique metadata, canonical URLs, Open Graph tags, schema markup, sitemap, robots.txt, semantic headings, and Orlando-focused landing pages.

Local SEO pages:

- `/photo-booth-rental-orlando`
- `/wedding-photo-booth-orlando`
- `/360-photo-booth-orlando`
- `/corporate-photo-booth-orlando`
- `/birthday-photo-booth-orlando`

Because this is a Vite SPA, metadata and schema improve crawlability but are not equivalent to SSR/SSG. For maximum organic SEO at scale, future migration to SSR/SSG or prerendering would be stronger.

## Analytics

`src/lib/analytics.ts` provides safe wrappers for GA4, GTM, Meta Pixel, and Microsoft Clarity. Events are no-ops when tracking IDs or scripts are not configured.

Tracked events include book-now clicks, quote clicks, package selection, gallery interaction, form start, form submit, checkout start, phone clicks, email clicks, and contact submissions.

## Booking And Quote Flow

The quote and booking forms use React Hook Form and Zod validation. If Supabase public env variables are present, frontend submissions can insert into Supabase tables. If not configured, the UI clearly returns a demo/configuration-needed response instead of pretending a backend is complete.

Suggested Supabase tables:

- `booking_requests`
- `quote_requests`
- `contact_messages`
- `lead_events`

## Stripe Plan

Stripe Checkout must run through serverless functions only. `api/create-checkout-session.ts` is key-gated and ready for configured products/prices. Frontend code never imports private Stripe secrets.

## Vercel Deployment

Vercel settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` rewrites all routes to `/` so nested React Router URLs refresh correctly.

## Known Limitations

- Real lead capture requires Supabase project configuration and table policies.
- Stripe requires production price IDs and webhook handling before taking deposits.
- Email/SMS requires Resend/Twilio credentials and approved templates.
- SPA SEO is improved but not as strong as SSR/SSG.
