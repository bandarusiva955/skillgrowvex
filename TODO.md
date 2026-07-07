# TODO - SkillGrowVex Academy scaffolding & core architecture

## Step 1: Verify build baseline
- [x] Install dependencies (`npm install`)
- [x] Run `npm run build` and capture the first failure

## Step 2: Fix Prisma/seed/build type error
- [x] Locate failing error from build/seed output
- [x] Update `prisma/schema.prisma` or `prisma/seed.ts` to match types/enums/Json fields
- [ ] Re-run `npm run db:seed` (requires valid `DATABASE_URL` in `.env`)

## Step 3: RBAC consistency fix
- [x] Decide/implement single source of truth for role checks (Prisma in layouts/API)
- [x] Ensure middleware uses safe role source (auth-only; roles checked in layouts)
- [x] Prevent redirect loops between `/admin` and `/student`

## Step 4: Ensure deployment-safe env var guards
- [x] Add helpful runtime checks for required env vars in API routes
- [x] Ensure missing env vars do not cause unhandled 500s during build/start

## Step 5: Netlify deploy verification
- [ ] Add required env vars in Netlify
- [ ] Trigger Netlify build
- [ ] Run DB push + seed in production context

## Step 6: Smoke test core flows
- [ ] Public routes render
- [ ] `/sign-in` and auth-protected redirects work
- [ ] Student dashboard loads
- [ ] Admin dashboard loads for SUPER_ADMIN
- [ ] Verify page returns certificate status

