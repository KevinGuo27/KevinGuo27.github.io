#!/bin/bash

echo "🚀 Starting your personal website locally..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    echo "Or run: brew install node (if you have Homebrew)"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🌟 Starting development server..."
echo "Your website will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
