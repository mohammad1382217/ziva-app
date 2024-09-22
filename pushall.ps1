git pull origin main
git status

$addChanges = Read-Host "Do you want to add all changes to staging? (y/n)"

if ($addChanges -eq "y") {
    git add .
    $commitMessage = Read-Host "Enter your commit message"
    git commit -m "$commitMessage"
    git push origin main
    git push secondary main --force
} else {
    Write-Host "Aborted adding changes to staging."
}