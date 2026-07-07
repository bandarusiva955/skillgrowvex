# SkillGrowVex Academy - Vercel Deployment Script
# Run from project root: .\scripts\deploy.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "=== SkillGrowVex Academy Deployment ===" -ForegroundColor Cyan

# Step 1: Install dependencies
Write-Host "`n[1/4] Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) { throw "npm install failed" }

# Step 2: Generate Prisma client
Write-Host "`n[2/4] Generating Prisma client..." -ForegroundColor Yellow
npx prisma generate

# Step 3: Login to Vercel (if needed)
Write-Host "`n[3/4] Checking Vercel auth..." -ForegroundColor Yellow
$vercelWhoami = npx vercel whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please log in to Vercel in your browser when prompted." -ForegroundColor Green
    npx vercel login
}

# Step 4: Deploy
Write-Host "`n[4/4] Deploying to Vercel..." -ForegroundColor Yellow
npx vercel --prod --yes

Write-Host "`n=== Deployment complete! ===" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Add environment variables in Vercel Dashboard > Settings > Environment Variables"
Write-Host "  2. Set up PostgreSQL (Neon/Supabase) and add DATABASE_URL"
Write-Host "  3. Create Clerk app and add auth keys"
Write-Host "  4. Run: npx prisma db push && npx prisma db seed (with production DATABASE_URL)"
