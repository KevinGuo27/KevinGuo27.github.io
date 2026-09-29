#!/bin/bash
# Build locally to catch errors, then commit and push to main.
# GitHub Actions (.github/workflows/deploy.yml) rebuilds and publishes the site on every push.
set -e
cd "$(dirname "$0")"

echo "🔨 Building site locally..."
npm run build

if [ -z "$(git status --porcelain)" ]; then
  echo "✅ No changes to deploy"
  exit 0
fi

git status --short
read -p "📝 Commit message [Update website content]: " commit_message
git add -A
git commit -m "${commit_message:-Update website content}"
git push origin main

echo "🎉 Deployment triggered! The site updates in 2-3 minutes: https://kevinguo27.github.io/"
echo "   Status: https://github.com/KevinGuo27/KevinGuo27.github.io/actions"
