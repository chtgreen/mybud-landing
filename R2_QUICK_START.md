# 🚀 R2 Video Setup - Quick Start (5 Minutes)

## Problem
```
✘ [ERROR] Asset too large. demo.webm = 77.5 MiB (limit: 25 MiB)
```

## Solution
Upload videos to Cloudflare R2 (takes 5 minutes!)

---

## Quick Steps

### 1️⃣ Create R2 Bucket (1 min)
```
1. Go to: https://dash.cloudflare.com/
2. Click: R2 → Create bucket
3. Name: mybud-assets
4. Click: Create bucket
```

### 2️⃣ Upload Videos (2 min)
```
1. Click: Upload
2. Drag files:
   - public/demo.webm (77.5 MB)
   - public/demo.mp4 (6.3 MB)
3. Wait for upload ✅
```

### 3️⃣ Connect Domain (1 min)
```
1. Click: Settings → Connect domain
2. Choose: assets.mybud.app (or any subdomain)
3. Click: Connect domain
4. Wait 5 mins for DNS ⏳
```

### 4️⃣ Update Config (30 sec)
Edit `wrangler.json`:
```json
"VITE_DEMO_VIDEO_WEBM": "https://assets.mybud.app/demo.webm",
"VITE_DEMO_VIDEO_MP4": "https://assets.mybud.app/demo.mp4"
```

### 5️⃣ Deploy! (30 sec)
```bash
npm run deploy
```

---

## Verify It Works

Visit: `https://lp.mybud.app/pt`

Video should autoplay in the iPhone mockup! 🎬

---

## Cost
**$0/month** (free tier covers everything)

---

## Need Help?
See full guide: `VIDEO_CDN_SETUP.md`


