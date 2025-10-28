#!/bin/bash

# Automated R2 Video Upload Script
# Run this after enabling R2 in Cloudflare Dashboard

set -e

echo "🚀 Setting up R2 for MyBud Videos"
echo ""

# Step 1: Create bucket
echo "📦 Creating R2 bucket: mybud-assets..."
npx wrangler r2 bucket create mybud-assets 2>/dev/null || echo "   (Bucket may already exist, continuing...)"
echo ""

# Step 2: Upload videos
echo "📤 Uploading demo.mp4 (6.3 MB)..."
npx wrangler r2 object put mybud-assets/demo.mp4 --file=public/demo.mp4
echo "✅ demo.mp4 uploaded!"
echo ""

echo "📤 Uploading demo.webm (78 MB) - this may take a minute..."
npx wrangler r2 object put mybud-assets/demo.webm --file=public/demo.webm
echo "✅ demo.webm uploaded!"
echo ""

# Step 3: List uploaded files
echo "📋 Files in bucket:"
npx wrangler r2 object list mybud-assets
echo ""

echo "✅ Videos uploaded successfully!"
echo ""
echo "📌 NEXT STEPS:"
echo ""
echo "1. Go to: https://dash.cloudflare.com/ → R2 → mybud-assets"
echo "2. Click 'Settings' → 'Public Access' → 'Connect Domain'"
echo "3. Enter subdomain: assets.mybud.app (or any name you prefer)"
echo "4. Wait 5 minutes for DNS propagation"
echo "5. Tell me the domain and I'll update the config!"
echo ""
echo "💰 Cost: \$0/month (within free tier)"
echo ""

