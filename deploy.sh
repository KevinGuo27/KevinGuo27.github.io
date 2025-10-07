#!/bin/bash

# ============================================================================
# Personal Website Deployment Script
# ============================================================================
# This script automates the deployment process to prevent common issues:
# 1. Ensures all images are committed
# 2. Builds the site locally to check for errors
# 3. Commits and pushes changes
# 4. Verifies deployment status
# ============================================================================

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Step 1: Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "next.config.js" ]; then
    print_error "Please run this script from the website root directory"
    exit 1
fi

# Step 2: Ensure public directory exists and has content
if [ ! -d "public" ]; then
    print_warning "Creating public directory..."
    mkdir -p public
fi

# Step 3: Check for uncommitted images in public directory
if [ -d "public" ] && [ "$(ls -A public 2>/dev/null)" ]; then
    echo "📁 Checking for new images in public/ directory..."
    git add public/
    if ! git diff --cached --quiet; then
        print_status "Found new images to commit"
    else
        print_status "No new images to commit"
    fi
fi

# Step 4: Build locally to catch any errors
print_status "Building site locally..."
npm run build

if [ $? -eq 0 ]; then
    print_status "Local build successful"
else
    print_error "Local build failed. Please fix errors before deploying."
    exit 1
fi

# Step 5: Check git status
echo "📋 Git status:"
git status --short

# Step 6: Ask for commit message if there are changes
if ! git diff --cached --quiet || ! git diff --quiet; then
    echo ""
    echo "📝 Changes detected. Please enter a commit message:"
    read -p "Commit message: " commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Update website content"
    fi
    
    # Add all changes
    git add .
    
    # Commit changes
    git commit -m "$commit_message"
    
    # Push to main branch
    print_status "Pushing changes to GitHub..."
    git push origin main
    
    print_status "Deployment triggered! 🎉"
    echo ""
    echo "⏳ Your website will be updated in 2-3 minutes."
    echo "🔗 Check status at: https://github.com/KevinGuo27/KevinGuo27.github.io/actions"
    echo "🌐 Your website: https://kevinguo27.github.io/"
    
else
    print_status "No changes to deploy"
fi

echo ""
print_status "Deployment script completed!"
