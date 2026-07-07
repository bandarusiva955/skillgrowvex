# Start dev server on port 3000 (kills stale node processes on that port first)
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "=== SkillGrowVex Academy - Dev Server ===" -ForegroundColor Cyan

$port = 3000
$connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($connections) {
    Write-Host "Stopping stale process on port $port..." -ForegroundColor Yellow
    $connections | ForEach-Object {
        Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 2
}

Write-Host "Clearing build cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force "node_modules\.cache\sgv-next" -ErrorAction SilentlyContinue

Write-Host "Starting at http://localhost:$port" -ForegroundColor Green
npx next dev -p $port
