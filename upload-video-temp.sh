#!/bin/bash

# Quick script to upload demo.mp4 to a temporary CDN for testing
# This will give you a URL to use in .env.local

set -e

echo "🎬 Uploading demo.mp4 to temporary CDN for testing..."
echo ""

if [ ! -f "public/demo.mp4" ]; then
    echo "❌ Error: public/demo.mp4 not found"
    exit 1
fi

echo "📤 Uploading demo.mp4 (6.3 MB) to transfer.sh..."
echo "   (This is temporary - file expires in 14 days)"
echo ""

URL=$(curl --upload-file public/demo.mp4 https://transfer.sh/demo.mp4)

echo ""
echo "✅ Upload complete!"
echo ""
echo "📋 Add this to your .env.local file:"
echo ""
echo "VITE_DEMO_VIDEO_MP4=\"$URL\""
echo ""
echo "⚠️  Note: This URL expires in 14 days. For permanent hosting, use R2."
echo "   See: R2_QUICK_START.md"
echo ""

