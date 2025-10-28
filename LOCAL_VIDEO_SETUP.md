# 🎬 Get Video Working Locally - Quick Guide

## Current Status
✅ **Production**: Deployed successfully to `lp.mybud.app`
⚠️ **Local Dev**: Video not showing (no CDN URLs configured)

Right now, you'll see the screenshot fallback in local development because the video URLs aren't set.

---

## 🚀 Quick Fix (Choose One)

### Option 1: Use R2 (Recommended - Permanent Solution)

#### Step 1: Upload to R2 (via Dashboard)
```bash
# 1. Open R2 in browser
open https://dash.cloudflare.com/

# 2. Create bucket: "mybud-assets"
# 3. Upload files:
#    - public/demo.mp4 (6.3 MB)
#    - public/demo.webm (77.5 MB)
# 4. Connect domain (e.g., assets.mybud.app)
# 5. Wait 5 mins for DNS
```

#### Step 2: Create `.env.local` file
```bash
cat > .env.local << 'EOF'
VITE_DEMO_VIDEO_MP4=https://assets.mybud.app/demo.mp4
VITE_DEMO_VIDEO_WEBM=https://assets.mybud.app/demo.webm
EOF
```

#### Step 3: Restart dev server
```bash
npm run dev
```

✅ Video will now play locally!

---

### Option 2: Use Local Files (Quick Test Only)

If you just want to see it working locally without R2:

#### Step 1: Temporarily allow local video files

Create `.env.local`:
```bash
cat > .env.local << 'EOF'
# Use local files for dev (won't work in production!)
VITE_DEMO_VIDEO_MP4=/demo.mp4
EOF
```

#### Step 2: Make sure `demo.mp4` is in `public/`
```bash
ls -lh public/demo.mp4
# Should show: 6.3 MB
```

#### Step 3: Temporarily disable the exclude plugin

Edit `vite.config.ts` - comment out the plugin:
```typescript
export default defineConfig({
  plugins: [
    react(), 
    cloudflare(),
    htmlEnvReplace(),
    // excludeLargeAssets()  // <-- Comment this out for local dev
  ],
});
```

#### Step 4: Restart dev server
```bash
npm run dev
```

⚠️ **Warning**: This only works for local dev. DON'T deploy with this setup (25MB error will return)!

---

### Option 3: Use a Public URL (Fastest for Testing)

If you want to test immediately, use a publicly hosted video:

Create `.env.local`:
```bash
cat > .env.local << 'EOF'
# Temporary public video for testing
VITE_DEMO_VIDEO_MP4=https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
EOF
```

Then restart dev:
```bash
npm run dev
```

✅ Video plays instantly!

⚠️ This is just for testing - replace with your actual R2 URL later.

---

## 🔍 Verify It's Working

### Check 1: Dev server running?
```bash
npm run dev
```

### Check 2: Open browser
```
http://localhost:5173/pt
```

### Check 3: Open DevTools Console
- Press F12
- Go to Console tab
- Check for video-related messages
- If you see "Video failed to load", check your URLs

### Check 4: Network Tab
- Press F12
- Go to Network tab
- Filter: "media"
- Reload page
- Should see: demo.mp4 or demo.webm loading

---

## 📋 Current Setup

**How it works now**:
1. If `VITE_DEMO_VIDEO_MP4` or `VITE_DEMO_VIDEO_WEBM` is set → Shows video
2. If NOT set → Shows screenshot fallback (`/Screenshot_1760407521.png`)
3. If video fails to load → Automatically falls back to screenshot

**Production** (lp.mybud.app):
- Currently shows screenshot (because env vars are empty in wrangler.json)
- Once you set R2 URLs in wrangler.json → Will show videos

**Local Dev** (localhost:5173):
- Currently shows screenshot (because no .env.local)
- Create .env.local with URLs → Will show videos

---

## 🎯 Recommended: Full R2 Setup

For the best experience (production + local dev working):

1. **Upload to R2**: See `R2_QUICK_START.md`
2. **Update production** (`wrangler.json`):
   ```json
   "VITE_DEMO_VIDEO_WEBM": "https://assets.mybud.app/demo.webm",
   "VITE_DEMO_VIDEO_MP4": "https://assets.mybud.app/demo.mp4"
   ```
3. **Update local** (`.env.local`):
   ```bash
   VITE_DEMO_VIDEO_WEBM=https://assets.mybud.app/demo.webm
   VITE_DEMO_VIDEO_MP4=https://assets.mybud.app/demo.mp4
   ```
4. **Deploy**:
   ```bash
   npm run deploy
   ```

Done! Video works everywhere 🎉

---

## 💡 Quick Commands

```bash
# Check if .env.local exists
cat .env.local

# Check R2 bucket
wrangler r2 bucket list

# Check deployed env vars
cat wrangler.json | grep VITE_DEMO

# Test video URL directly
curl -I https://assets.mybud.app/demo.mp4

# Restart dev server
npm run dev
```

---

## ❓ Troubleshooting

**Q: Still seeing screenshot in local dev?**
- Check: Does `.env.local` exist?
- Check: Are URLs correct in `.env.local`?
- Check: Did you restart `npm run dev`?

**Q: Video won't load?**
- Check browser console for errors
- Try opening video URL directly in browser
- Check CORS settings in R2

**Q: Works locally but not in production?**
- Check `wrangler.json` has the URLs
- Redeploy: `npm run deploy`

---

**Status**: Ready for R2 setup! 🚀

See: `R2_QUICK_START.md` for step-by-step R2 guide.

