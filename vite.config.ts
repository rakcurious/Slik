import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,jpg,png,svg,webp,aviv}'],
      },
      manifest: {
        name: 'Slik',
        short_name: 'Slik',
        description: "'drip, drippy, drippin'",
        theme_color: '#F3E8FF',
        background_color: '#F3E8FF',
        start_url: '/',
        display: 'standalone',
        prefer_related_applications: false,
        shortcuts: [
          {
            name: 'Women',
            url: '/women',
            icons: [{ src : 'shorticonwomen.png', sizes: "192x192" }],
          },
          {
            name: 'Men',
            url: '/men',
            icons: [{ src : 'shorticonmen.png', sizes: "192x192" }],
          },
          {
            name: 'Wishlist',
            url: '/profile',
            icons: [{ src : 'shorticonwishlist.png', sizes: "192x192" }]
          },
        ],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
        ],
        screenshots: [
          {
            "src": "screenshotwide1200x630.png",
             "sizes": "1200x630",
             "type": "image/png",
             "form_factor": "wide",
             "label": "drip, drippy, drippin'",
             
           },
          {
            "src": "screenshotnarrow1080x2344a.png",
             "sizes": "1080x2344",
             "type": "image/png",
             "form_factor": "narrow",
             "label": "drip, drippy, drippin'"
          },
          {
            "src": "screenshotnarrow1080x2344b.png",
             "sizes": "1080x2344",
             "type": "image/png",
             "form_factor": "narrow",
             "label": "drip, drippy, drippin'"
          },
        ]
      },
      devOptions: {
        enabled: false, // for enabling pwa in dev mode ;)
      },
    }),
  ],
});