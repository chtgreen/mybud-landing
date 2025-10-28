import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import * as fs from 'fs';
import * as path from 'path';

/**
 * Load environment variables from wrangler.json
 * This ensures Vite has access to the same vars at build time
 */
function loadWranglerVars() {
  try {
    const wranglerPath = path.resolve(process.cwd(), 'wrangler.json');
    const wranglerConfig = JSON.parse(fs.readFileSync(wranglerPath, 'utf-8'));
    return wranglerConfig.vars || {};
  } catch (error) {
    console.warn('Could not load wrangler.json vars:', error);
    return {};
  }
}

/**
 * Plugin to replace environment variables in HTML
 * Replaces %VITE_*% patterns with actual env values
 */
function htmlEnvReplace(): Plugin {
  return {
    name: 'html-env-replace',
    transformIndexHtml(html) {
      // Replace all %VITE_*% patterns with environment variables
      return html.replace(/%VITE_(\w+)%/g, (_match, key) => {
        const envKey = `VITE_${key}`;
        const value = process.env[envKey];
        
        // If env var is not set, return empty string (for optional vars like GA)
        if (!value || value === 'undefined') {
          return '';
        }
        
        return value;
      });
    }
  };
}

/**
 * Plugin to exclude large video files from build
 * Videos should be hosted on R2/CDN due to Cloudflare Workers 25MB limit
 */
function excludeLargeAssets(): Plugin {
  return {
    name: 'exclude-large-assets',
    closeBundle() {
      // Remove demo videos from dist after build
      const distClient = path.resolve(process.cwd(), 'dist/client');
      const filesToRemove = ['demo.mp4', 'demo.webm'];
      
      filesToRemove.forEach(file => {
        const filePath = path.join(distClient, file);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log(`⚠️  Excluded large asset from build: ${file} (hosted on CDN)`);
        }
      });
    }
  };
}

// Load wrangler vars for build-time injection
const wranglerVars = loadWranglerVars();

export default defineConfig({
  plugins: [
    react(), 
    cloudflare(),
    htmlEnvReplace(),
    excludeLargeAssets()
  ],
  // Inject wrangler.json vars at build time so Vite can replace import.meta.env.VITE_*
  define: {
    'import.meta.env.VITE_DEMO_VIDEO_WEBM': JSON.stringify(wranglerVars.VITE_DEMO_VIDEO_WEBM || '/demo.webm'),
    'import.meta.env.VITE_DEMO_VIDEO_MP4': JSON.stringify(wranglerVars.VITE_DEMO_VIDEO_MP4 || '/demo.mp4'),
    'import.meta.env.VITE_POSTHOG_KEY': JSON.stringify(wranglerVars.VITE_POSTHOG_KEY || ''),
    'import.meta.env.VITE_POSTHOG_HOST': JSON.stringify(wranglerVars.VITE_POSTHOG_HOST || ''),
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(wranglerVars.VITE_SUPABASE_URL || ''),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(wranglerVars.VITE_SUPABASE_ANON_KEY || ''),
    'import.meta.env.VITE_STRIPE_PAYMENT_LINK': JSON.stringify(wranglerVars.VITE_STRIPE_PAYMENT_LINK || ''),
    'import.meta.env.VITE_GA_MEASUREMENT_ID': JSON.stringify(wranglerVars.VITE_GA_MEASUREMENT_ID || ''),
    'import.meta.env.VITE_KIT_REMINDER': JSON.stringify(wranglerVars.VITE_KIT_REMINDER || '47'),
    'import.meta.env.VITE_KIT_PRICE': JSON.stringify(wranglerVars.VITE_KIT_PRICE || '249'),
  }
});
