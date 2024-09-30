git pull
git status

$addChanges = Read-Host "Do you want to add all changes to staging? (y/n)"

if ($addChanges -eq "y") {
    git add .
    $commitMessage = Read-Host "Enter your commit message"
    git commit -m "$commitMessage"
    git push origin develop
    git push secondary develop --force
} else {
    Write-Host "Aborted adding changes to staging."
}