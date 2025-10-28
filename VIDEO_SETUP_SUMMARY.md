# ✅ Video CDN Setup - Summary of Changes

## 🎯 Problem Solved

**Issue**: Cloudflare Workers has a 25MB asset limit, but `demo.webm` is 77.5MB
```
✘ [ERROR] Asset too large (demo.webm = 77.5 MiB, limit = 25 MiB)
```

**Solution**: Host videos on Cloudflare R2 (external CDN) instead of bundling with Workers

---

## 🔧 Changes Made

### 1. Updated `.gitignore`
Videos excluded from git (too large to version):
```
public/demo.mp4
public/demo.webm
dist/client/demo.mp4
dist/client/demo.webm
```

### 2. Updated `vite.config.ts`
Added `excludeLargeAssets()` plugin:
- Removes `demo.mp4` and `demo.webm` from build output
- Runs after build completes (`closeBundle` hook)
- Shows warning: `⚠️ Excluded large asset from build: demo.webm (hosted on CDN)`

**Result**: Videos NOT included in `dist/client/` 🎉

### 3. Updated `Hero.tsx`
Video sources now use environment variables:
```tsx
<source src={import.meta.env.VITE_DEMO_VIDEO_WEBM || '/demo.webm'} />
<source src={import.meta.env.VITE_DEMO_VIDEO_MP4 || '/demo.mp4'} />
```

**Fallback**: If env vars not set, falls back to local paths (for dev)

### 4. Updated `wrangler.json`
Added video URL environment variables:
```json
"VITE_DEMO_VIDEO_WEBM": "",
"VITE_DEMO_VIDEO_MP4": ""
```

**Action Required**: Set these to your R2 URLs after upload!

### 5. Updated `deploy.sh`
Added pre-flight check for video CDN configuration:
- ✅ Checks if `VITE_DEMO_VIDEO_WEBM` is set
- ⚠️ Warns if not configured
- 🛑 Allows you to cancel or continue

### 6. Created `VIDEO_CDN_SETUP.md`
Comprehensive guide for:
- Creating R2 bucket
- Uploading videos
- Configuring public domain
- Setting environment variables
- Troubleshooting

### 7. Updated `DEPLOY_GUIDE.md`
Added prominent warning about video CDN setup requirement

---

## 📋 Next Steps (REQUIRED BEFORE DEPLOY)

### Step 1: Upload Videos to Cloudflare R2

```bash
# Option A: Via Dashboard
https://dash.cloudflare.com/ → R2 → Create bucket → Upload files

# Option B: Via CLI
wrangler r2 object put mybud-assets/demo.webm --file=public/demo.webm
wrangler r2 object put mybud-assets/demo.mp4 --file=public/demo.mp4
```

### Step 2: Connect Public Domain

In R2 bucket settings:
- Click "Connect domain"
- Example: `assets.mybud.app`
- Wait for DNS propagation (~5 mins)

### Step 3: Update `wrangler.json`

```json
{
  "vars": {
    "VITE_DEMO_VIDEO_WEBM": "https://assets.mybud.app/demo.webm",
    "VITE_DEMO_VIDEO_MP4": "https://assets.mybud.app/demo.mp4"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
# or
./deploy.sh
```

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Videos uploaded to R2
  ```bash
  wrangler r2 object list mybud-assets
  ```

- [ ] Public domain working
  ```bash
  curl -I https://assets.mybud.app/demo.webm
  # Should return: HTTP/2 200
  ```

- [ ] Environment variables set in `wrangler.json`
  ```bash
  cat wrangler.json | grep VITE_DEMO_VIDEO
  ```

- [ ] Build excludes videos
  ```bash
  npm run build
  ls dist/client/demo.*
  # Should show: No such file or directory
  ```

- [ ] Deploy succeeds without 25MB error
  ```bash
  wrangler deploy
  # Should complete without errors
  ```

- [ ] Videos load on production
  ```bash
  # Visit https://lp.mybud.app/pt
  # Open DevTools → Network
  # Should see: assets.mybud.app/demo.webm (200 OK)
  ```

---

## 💰 Cost

**Cloudflare R2 Pricing**:
- Storage: First 10 GB/month = **FREE**
- Egress (bandwidth): **ALWAYS FREE** (no bandwidth charges!)
- Operations: 1M Class A requests/month = **FREE**

**Your videos**: 0.0835 GB (83.5 MB total)

**Expected cost**: **$0/month** 🎉

---

## 🔄 Development Workflow

### Local Development (without R2)
```bash
# Videos exist in public/ folder
npm run dev
# Videos load from /demo.webm (local)
```

### Production (with R2)
```bash
# Videos NOT in dist/client/
npm run build
wrangler deploy
# Videos load from https://assets.mybud.app/demo.webm (CDN)
```

---

## 🐛 Troubleshooting

### Videos still in dist/client/ after build
**Check**: Is `excludeLargeAssets()` plugin active?
```bash
cat vite.config.ts | grep excludeLargeAssets
npm run build | grep "Excluded"
```

### Deploy still fails with 25MB error
**Check**: Did you clean dist/ folder?
```bash
rm -rf dist/
npm run build
```

### Videos don't load on production
**Check**: Environment variables set?
```bash
cat wrangler.json | grep VITE_DEMO_VIDEO
```

**Check**: R2 URLs accessible?
```bash
curl -I https://assets.mybud.app/demo.webm
```

**Check**: CORS configured?
See `VIDEO_CDN_SETUP.md` → CORS section

---

## 📚 Related Files

- `VIDEO_CDN_SETUP.md` - Full R2 setup guide
- `DEPLOY_GUIDE.md` - Updated deploy guide
- `vite.config.ts` - Build configuration
- `src/react-app/components/Hero.tsx` - Video player component
- `wrangler.json` - Environment variables
- `deploy.sh` - Deployment script

---

## ✨ Result

✅ **Videos hosted on CDN** (not in Workers bundle)  
✅ **No 25MB limit errors**  
✅ **Fast global delivery** (Cloudflare's edge network)  
✅ **$0/month cost** (within free tier)  
✅ **No bandwidth charges** (R2 egress is free)

**Status**: Ready to deploy once R2 is configured! 🚀


