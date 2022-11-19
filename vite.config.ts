import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/to-camp-or-not/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    outDir: "docs",
  },
  server: {
    port: 3000,
    host: '127.0.0.1'
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'docs/sw.js',
        globDirectory: 'docs',
        globPatterns: [
          '**/*.{html,js,css,json, png}',
        ],
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
