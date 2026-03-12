# Atria Marketing Site

Next.js marketing website for Atria Health, focused on RPM, RTM, CCM, and cardiac monitoring services for B2B healthcare buyers.

## Getting Started

Install dependencies and run development:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Site Sections

- Home
- Platform
- Programs (RPM, RTM, CCM, Cardiac)
- Services
- Reimbursement and ROI
- About
- Contact

## Analytics

Google Analytics loads only when `NEXT_PUBLIC_GA_ID` is provided.

Tracked events:
- `cta_click`
- `sticky_demo_cta_click`
- `lead_submit`

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` - canonical site URL
- `NEXT_PUBLIC_GA_ID` - optional GA measurement ID

## Deployment

- Fastest path: deploy on Vercel.
- EC2 path: follow `DEPLOYMENT_EC2.md` for Docker, Nginx, SSL, and operational checks.

## Notes

- Revenue sections use potential estimates only and include reimbursement disclaimers.
- Update copy in `src/content/siteContent.ts` for all major messaging blocks.
