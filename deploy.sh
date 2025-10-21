#!/bin/bash

# Deploy Script for Mybud Landing Page
# This script builds and deploys the application to Cloudflare Workers

set -e  # Exit on error

echo "🚀 Starting deployment process..."
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler is not installed. Installing..."
    npm install -g wrangler
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Check if VITE_GA_MEASUREMENT_ID is set in wrangler.json
if ! grep -q '"VITE_GA_MEASUREMENT_ID"' wrangler.json; then
    echo "⚠️  Warning: VITE_GA_MEASUREMENT_ID not found in wrangler.json"
    echo "   Add your Google Analytics Measurement ID to wrangler.json"
fi

# Deploy to Cloudflare Workers
echo "🌐 Deploying to Cloudflare Workers..."
wrangler deploy

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

echo ""
echo "✅ Deployment successful!"
echo ""
echo "📊 Your site is now live!"
echo "   URL: https://lp.mybud.app"
echo ""
echo "💡 Tips:"
echo "   - View logs: wrangler tail"
echo "   - Check status: wrangler deployments list"
echo "   - Rollback: wrangler rollback"
echo ""
echo "📈 Analytics:"
echo "   - Google Analytics: https://analytics.google.com"
echo "   - PostHog: https://app.posthog.com"
echo ""

