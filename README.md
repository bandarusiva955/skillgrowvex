# SkillGrowVex Academy

**Empowering Talent. Building Futures.**

A production-ready EdTech SaaS platform for project-based internships, certifications, and career development.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion |
| Backend | Next.js API Routes, Node.js |
| Database | PostgreSQL + Prisma ORM |
| Auth | Clerk |
| Storage | Cloudinary |
| PDF | PDF-lib |
| QR Codes | qrcode |
| Charts | Recharts |
| Hosting | Vercel |

## Features

### Public Website
- Premium homepage with hero, stats, programs, testimonials, FAQ
- About page with founder story (Bandaru Siva)
- Internship programs catalog (8 categories)
- Program detail pages with curriculum & assignments
- Certificate verification portal (`/verify`)
- Contact form

### Student Dashboard
- Profile management
- Enrolled programs with progress tracking
- Assignment submission (PDF, ZIP, Excel, Power BI, Images)
- Certificate downloads with LinkedIn sharing
- Resume builder
- Portfolio builder
- Job readiness score & ranking

### Admin Dashboard
- Student management
- Internship management
- Submission review & scoring
- Certificate issuance
- Analytics dashboard

### Certificate System
- Professional PDF generation
- QR code verification
- Format: `SGV-2026-000001`
- Founder signature (Bandaru Siva)

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Clerk account
- Cloudinary account (optional for file uploads)

### Installation

```bash
cd skillgrowvex-academy
npm install
cp .env.example .env
```

### Environment Variables

Edit `.env` with your credentials:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/skillgrowvex"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
CLERK_WEBHOOK_SECRET=whsec_xxx
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
SUPER_ADMIN_ID=user_xxx
```

### Database Setup

```bash
npm run db:push
npm run db:seed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
skillgrowvex-academy/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Seed data (8 programs, badges, testimonials)
├── src/
│   ├── app/
│   │   ├── (public)/      # Home, About, Programs, Verify, Contact
│   │   ├── student/       # Student dashboard
│   │   ├── admin/         # Admin dashboard
│   │   ├── sign-in/       # Clerk auth
│   │   └── api/           # API routes
│   ├── components/
│   │   ├── ui/            # Design system components
│   │   ├── layout/        # Header, Footer, Sidebar
│   │   ├── home/          # Homepage sections
│   │   ├── student/       # Student components
│   │   └── admin/         # Admin components
│   └── lib/
│       ├── db.ts          # Prisma client
│       ├── auth.ts        # Auth helpers
│       ├── certificate.ts # PDF + QR generation
│       ├── cloudinary.ts  # File uploads
│       ├── constants.ts   # Site config
│       └── validations.ts # Zod schemas
```

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/verify` | GET | Verify certificate by ID |
| `/api/contact` | POST | Submit contact form |
| `/api/submissions` | POST | Upload assignment |
| `/api/submissions/review` | POST | Admin review submission |
| `/api/certificates` | POST | Issue certificate |
| `/api/certificates/[id]/download` | GET | Download PDF |
| `/api/enrollments` | POST | Enroll in program |
| `/api/users/profile` | PATCH | Update profile |
| `/api/users/resume` | PUT | Save resume |
| `/api/users/portfolio` | PUT | Save portfolio |
| `/api/admin/analytics` | GET | Analytics data |
| `/api/webhooks/clerk` | POST | Clerk user sync |

## Roles

| Role | Access |
|------|--------|
| STUDENT | Student dashboard, submissions, certificates |
| ADMIN | Admin dashboard, review, issue certificates |
| SUPER_ADMIN | Full platform access |

Set `SUPER_ADMIN_ID` in `.env` to your Clerk user ID for super admin access.

## Deployment (Netlify) — Recommended

**Live site:** [https://skillgrowvex-academy.netlify.app](https://skillgrowvex-academy.netlify.app)

**Admin:** [https://app.netlify.com/projects/skillgrowvex-academy](https://app.netlify.com/projects/skillgrowvex-academy)

### One-time setup (GitHub → Netlify remote build)

1. Create a GitHub repo: `bandarusiva955/skillgrowvex-academy`
2. Push code:
   ```bash
   git remote add origin https://github.com/bandarusiva955/skillgrowvex-academy.git
   git push -u origin main
   ```
3. In Netlify Dashboard → **Project configuration** → **Build & deploy** → **Link repository** → select the repo
4. Netlify auto-detects Next.js and uses `netlify.toml`
5. Add remaining env vars (Clerk, DATABASE_URL, Cloudinary) in **Environment variables**
6. Trigger deploy — build runs on Netlify servers
7. Run `npx prisma db push && npx prisma db seed` with production `DATABASE_URL`
8. Configure Clerk webhook: `https://skillgrowvex-academy.netlify.app/api/webhooks/clerk`

### CLI deploy (after Git linked)

```bash
npx netlify login
npx netlify link --name skillgrowvex-academy
git push origin main   # triggers auto-deploy
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Connect PostgreSQL (Neon, Supabase, or Railway)
5. Run `npx prisma db push` and `npx prisma db seed`
6. Configure Clerk webhook: `https://your-domain.com/api/webhooks/clerk`

## Future Roadmap

- Paid courses & subscription plans
- Live classes
- Placement assistance
- Mock interviews
- AI learning assistant
- Company partnerships

## License

Proprietary — SkillGrowVex Academy © 2026
