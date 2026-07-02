# donden.my — Portfolio

Next.js 14 + TypeScript + Tailwind portfolio site with a Resend-powered
contact form. Content lives in one place (`lib/content.ts`), so editing your
bio, experience, projects, and skills doesn't touch any layout code.

## 1. Edit your content

Open `lib/content.ts` and fill in the `// TODO` marked fields:

- `profile.email` — your real inbox
- `contact.toEmail` — should match the same inbox (this is where the
  contact form delivers messages, alongside `CONTACT_TO_EMAIL` below)
- Project `href` fields — link to live demos or case studies if you have them

Everything else (experience, projects, skills) is already filled in from
your internship and project history — edit freely.

## 2. Run it locally

```bash
npm install
cp .env.example .env.local
```

Then open `.env.local` and add your Resend API key (see step 3), and run:

```bash
npm run dev
```

Visit http://localhost:3000.

## 3. Set up Resend (for the contact form)

1. Sign up at [resend.com](https://resend.com) — the free tier (100
   emails/day) is plenty for a portfolio contact form.
2. Go to **API Keys** → create a new key → copy it.
3. Paste it into `.env.local` as `RESEND_API_KEY=re_...`.
4. Set `CONTACT_TO_EMAIL` to the address you want messages delivered to.

**About the sender address (`CONTACT_FROM_EMAIL`):** by default this uses
Resend's shared test sender (`onboarding@resend.dev`), which works
immediately with zero setup — but it only delivers to the email you signed
up to Resend with. To send from your own address (e.g.
`hello@donden.my`) and deliver to anyone:

1. In Resend, go to **Domains** → **Add Domain** → enter `donden.my`.
2. Add the DNS records Resend gives you at your DNS provider (Cloudflare,
   since that's what you're already using for donden.my).
3. Once verified, set `CONTACT_FROM_EMAIL="Don's Portfolio <hello@donden.my>"`.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/Sheldon2107/donden-portfolio.git
git push -u origin main
```

(Swap in whatever repo name/URL you actually create.)

## 5. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset should auto-detect as **Next.js** — no changes needed.
3. Before deploying, expand **Environment Variables** and add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional — only if you verified your own domain)
4. Deploy.
5. In **Project Settings → Domains**, add `donden.my` and follow Vercel's
   DNS instructions (you've done this before with the Cloudflare → Vercel
   setup, so it should be familiar).

## Project structure

```
app/
  layout.tsx          — fonts, metadata
  page.tsx             — main page, tab state
  globals.css          — theme tokens, base styles
  api/contact/route.ts — Resend email handler
components/
  Sidebar.tsx           — left nav / identity block
  Dossier.tsx           — shared "record header" UI
  sections/             — Overview, Experience, Projects, Skills, Contact
lib/
  content.ts            — ALL site copy — edit this, not the components
```

## Design notes

Soft-white "systems dossier" aesthetic: warm off-white background, deep
navy-charcoal ink, muted amber accent, monospace labels for file-style
metadata (record codes, statuses, dates). Sidebar acts as a case-file index;
each panel opens with a record header carrying structured fields, echoing
the government/systems-documentation work this portfolio is built around.
