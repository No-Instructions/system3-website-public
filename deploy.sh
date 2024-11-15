#!/bin/bash

# Configuration
PUBLIC_REPO_URL="git@github.com:No-Instructions/system3-website-public.git"
PUBLIC_REPO_DIR="../system3-website-public-deploy"
PRIVATE_REPO_DIR="$(pwd)"

# Create or update public repo directory
if [ ! -d "$PUBLIC_REPO_DIR" ]; then
    git clone $PUBLIC_REPO_URL $PUBLIC_REPO_DIR
fi

# Clean and update public repo
cd $PUBLIC_REPO_DIR
git fetch origin
git reset --hard origin/main

# Copy files, excluding handbook and git
rsync -av --progress \
    --exclude '.git/' \
    --exclude 'apps/www/src/content/handbook/' \
    $PRIVATE_REPO_DIR/ \
    .

# Add GitHub Actions workflow
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to GitHub Pages
on:
    push:
        branches: ["main"]
jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: pnpm/action-setup@v2
              with:
                  version: 8
            - uses: actions/setup-node@v3
              with:
                  node-version: 18
                  cache: "pnpm"
            - name: Install dependencies
              run: pnpm install
            - name: Build website
              working-directory: apps/www
              run: pnpm build
            - name: Deploy to GitHub Pages
              uses: JamesIves/github-pages-deploy-action@v4
              with:
                  folder: apps/www/build
EOF

# Commit and push
git add .
git commit -m "Deploy: $(date)"
git push origin main
