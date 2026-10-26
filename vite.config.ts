import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function spaFallbackPlugin(): Plugin {
  return {
    name: 'spa-fallback-plugin',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const distIndex = path.resolve(distDir, 'index.html');
      const dist404 = path.resolve(distDir, '404.html');
      const dist200 = path.resolve(distDir, '200.html');
      const distRedirects = path.resolve(distDir, '_redirects');

      // 1. Generate 404.html and 200.html for native Cloudflare Pages / Workers SPA routing
      if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, dist404);
        fs.copyFileSync(distIndex, dist200);
      }

      // 2. Sanitize dist/_redirects to prevent Cloudflare Error 100324:
      // "Invalid _redirects configuration: Infinite loop detected in this rule. This would cause a redirect to strip .html or /index and end up triggering this rule again. [code: 100324]"
      if (fs.existsSync(distRedirects)) {
        try {
          const rawContent = fs.readFileSync(distRedirects, 'utf-8');
          const lines = rawContent.split(/\r?\n/);
          const filteredLines = lines.filter(line => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return false;
            // Drop circular SPA catch-all rules like '/* /index.html 200', '/* /200.html 200', '/* / 200', etc.
            if (/^\/\*\s+(\/index(\.html)?|\/200(\.html)?|\/)\s*(200|301|302)?!?$/.test(trimmed)) {
              return false;
            }
            return true;
          });

          if (filteredLines.length === 0) {
            // Delete dist/_redirects so Cloudflare does not parse a circular or empty redirects file
            fs.unlinkSync(distRedirects);
          } else {
            fs.writeFileSync(distRedirects, filteredLines.join('\n') + '\n', 'utf-8');
          }
        } catch {
          // Ignore file operation errors
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), spaFallbackPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

