# 🎬 Video CDN Setup Guide - Cloudflare R2

## Why We Need This

Cloudflare Workers has a **25MB limit per asset**. Our demo videos are:
- `demo.webm`: 77.5 MB
- `demo.mp4`: 6.3 MB

We need to host them on **Cloudflare R2** (object storage, like AWS S3) and serve them via CDN.

---

## 📦 Step 1: Create R2 Bucket

### 1.1 Login to Cloudflare Dashboard
```bash
# Open in browser
https://dash.cloudflare.com/
```

### 1.2 Navigate to R2
1. Click **R2** in the left sidebar
2. Click **Create bucket**
3. Name: `mybud-assets` (or any name you prefer)
4. Location: **Automatic** (or choose closest to your users)
5. Click **Create bucket**

---

## 📤 Step 2: Upload Videos to R2

### Option A: Using Cloudflare Dashboard (Easiest)

1. Go to your R2 bucket (`mybud-assets`)
2. Click **Upload**
3. Drag and drop:
   - `public/demo.webm` (77.5 MB)
   - `public/demo.mp4` (6.3 MB)
4. Wait for upload to complete ✅

### Option B: Using Wrangler CLI

```bash
# Upload demo.webm
wrangler r2 object put mybud-assets/demo.webm --file=public/demo.webm

# Upload demo.mp4
wrangler r2 object put mybud-assets/demo.mp4 --file=public/demo.mp4
```

---

## 🌐 Step 3: Make Bucket Public (Enable CDN)

### 3.1 Connect Custom Domain (Recommended)

1. In your R2 bucket settings, click **Connect domain**
2. Choose one of:
   - **Option A**: Subdomain on Cloudflare-managed domain
     - Example: `assets.mybud.app`
   - **Option B**: Custom domain
     - Example: `cdn.mybud.app`
3. Click **Connect domain**
4. Wait for DNS to propagate (~5 minutes)

### 3.2 Get Public URLs

After connecting domain, your videos will be available at:
```
https://assets.mybud.app/demo.webm
https://assets.mybud.app/demo.mp4
```

---

## 🔧 Step 4: Update Environment Variables

### 4.1 Edit `wrangler.json`

Replace the empty strings with your R2 public URLs:

```json
{
  "vars": {
    "VITE_DEMO_VIDEO_WEBM": "https://assets.mybud.app/demo.webm",
    "VITE_DEMO_VIDEO_MP4": "https://assets.mybud.app/demo.mp4"
  }
}
```

### 4.2 For Local Development (Optional)

Create `.env.local`:
```bash
VITE_DEMO_VIDEO_WEBM=https://assets.mybud.app/demo.webm
VITE_DEMO_VIDEO_MP4=https://assets.mybud.app/demo.mp4
```

---

## 🚀 Step 5: Deploy

Now you can deploy without the 25MB error:

```bash
npm run build
wrangler deploy
```

Or use the deploy script:
```bash
./deploy.sh
```

---

## ✅ Step 6: Verify

### 6.1 Check Videos Load

Visit your landing page:
```
https://lp.mybud.app/pt
```

Open browser DevTools → Network tab:
- You should see requests to `https://assets.mybud.app/demo.webm`
- Status: `200 OK`
- Video should autoplay in the iPhone mockup

### 6.2 Test Video URLs Directly

```bash
# Test WebM
curl -I https://assets.mybud.app/demo.webm

# Test MP4
curl -I https://assets.mybud.app/demo.mp4
```

Should return:
```
HTTP/2 200
content-type: video/webm  (or video/mp4)
```

---

## 💡 Alternative Options (if not using R2)

### Option 1: Bunny CDN
1. Sign up: https://bunny.net
2. Create storage zone
3. Upload videos
4. Get CDN URL: `https://xyz.b-cdn.net/demo.webm`

### Option 2: AWS S3 + CloudFront
1. Create S3 bucket
2. Upload videos
3. Create CloudFront distribution
4. Get URL: `https://d1234abcd.cloudfront.net/demo.webm`

### Option 3: Digital Ocean Spaces
1. Create Space
2. Upload videos
3. Enable CDN
4. Get URL: `https://mybud.nyc3.digitaloceanspaces.com/demo.webm`

---

## 💰 Pricing (Cloudflare R2)

**R2 Storage**:
- First 10 GB/month: **FREE**
- Beyond 10 GB: $0.015/GB/month

**R2 Bandwidth**:
- Egress (downloads): **FREE** (no bandwidth charges!)
- Operations: Class A (1M requests/month free)

**Your Cost**:
- Videos: 0.0835 GB = **FREE** (under 10 GB)
- Bandwidth: **FREE** (R2 has no egress fees)
- **Total: $0/month** 🎉

---

## 🔒 CORS Configuration (if needed)

If videos don't load due to CORS:

1. Go to R2 bucket settings
2. Click **CORS policy**
3. Add:
```json
[
  {
    "AllowedOrigins": ["https://lp.mybud.app"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "MaxAgeSeconds": 3000
  }
]
```

---

## 🐛 Troubleshooting

### Problem: Video not loading in production

**Check 1**: Environment variables set in wrangler.json?
```bash
cat wrangler.json | grep VITE_DEMO_VIDEO
```

**Check 2**: R2 domain accessible?
```bash
curl -I https://assets.mybud.app/demo.webm
```

**Check 3**: CORS configured?
- See CORS section above

### Problem: R2 domain not resolving

**Solution**: Wait 5-10 minutes for DNS propagation
```bash
nslookup assets.mybud.app
```

### Problem: Still getting 25MB error

**Solution**: Verify videos excluded from build
```bash
npm run build
ls -lh dist/client/demo.*
# Should show: No such file or directory
```

---

## 📝 Summary

1. ✅ Create R2 bucket: `mybud-assets`
2. ✅ Upload `demo.webm` and `demo.mp4`
3. ✅ Connect domain: `assets.mybud.app`
4. ✅ Update `wrangler.json` with R2 URLs
5. ✅ Deploy: `npm run deploy`
6. ✅ Verify videos load on production

**Cost**: $0/month (within free tier)
**CDN**: Cloudflare's global network (200+ cities)
**Performance**: Videos cached at edge, ultra-fast loading

---

**Need Help?** Open an issue or contact the team.

