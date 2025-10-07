#!/bin/bash

# ============================================================================
# Website Update Helper Script
# ============================================================================
# Quick helper for common website updates
# ============================================================================

echo "🌐 Personal Website Update Helper"
echo "=================================="
echo ""
echo "What would you like to update?"
echo ""
echo "1) Add new images"
echo "2) Update research projects"
echo "3) Update publications"
echo "4) Update experience"
echo "5) Just deploy current changes"
echo "6) Exit"
echo ""

read -p "Choose an option (1-6): " choice

case $choice in
    1)
        echo ""
        echo "📁 Adding new images:"
        echo "1. Copy your images to the public/ directory"
        echo "2. Update image references in app/page.tsx"
        echo "3. Run ./deploy.sh to deploy"
        echo ""
        echo "Current images in public/:"
        ls -la public/ 2>/dev/null || echo "No images in public/ directory"
        ;;
    2)
        echo ""
        echo "🔬 Updating research projects:"
        echo "1. Edit app/page.tsx - modify the 'research' array"
        echo "2. Add any new images to public/ directory"
        echo "3. Run ./deploy.sh to deploy"
        ;;
    3)
        echo ""
        echo "📚 Updating publications:"
        echo "1. Edit app/page.tsx - modify the 'publications' array"
        echo "2. Add any new images to public/ directory"
        echo "3. Run ./deploy.sh to deploy"
        ;;
    4)
        echo ""
        echo "💼 Updating experience:"
        echo "1. Edit app/page.tsx - modify the 'experience' array"
        echo "2. Add any new images to public/ directory"
        echo "3. Run ./deploy.sh to deploy"
        ;;
    5)
        echo ""
        echo "🚀 Deploying current changes..."
        ./deploy.sh
        ;;
    6)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid option. Please choose 1-6."
        ;;
esac
