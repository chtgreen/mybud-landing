import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

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

export default defineConfig({
  plugins: [
    react(), 
    cloudflare(),
    htmlEnvReplace()
  ],
});
