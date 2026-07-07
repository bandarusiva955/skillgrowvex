# SkillGrowVex Academy - Netlify Deployment Script
# Run from project root: .\scripts\deploy-netlify.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "=== SkillGrowVex Academy - Netlify Deployment ===" -ForegroundColor Cyan

Write-Host "`n[1/3] Checking Netlify auth..." -ForegroundColor Yellow
$status = npx netlify status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please log in to Netlify when prompted." -ForegroundColor Green
    npx netlify login
}

Write-Host "`n[2/3] Linking site (if needed)..." -ForegroundColor Yellow
if (-not (Test-Path ".netlify\state.json")) {
    npx netlify init
}

Write-Host "`n[3/3] Deploying to production..." -ForegroundColor Yellow
npx netlify deploy --prod --build

Write-Host "`n=== Netlify deployment complete! ===" -ForegroundColor Green
Write-Host "Add environment variables at: https://app.netlify.com/sites/YOUR_SITE/configuration/env" -ForegroundColor Cyan
