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
        description: 'curated drip from your favorite fashion brands',
        theme_color: '#F3E8FF',
        background_color: '#F3E8FF',
        start_url: 'https://beslik.in/',
        display: 'fullscreen',
        prefer_related_applications: false,
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
            "src": "screenshot2349x1080.jpg",
             "sizes": "2349x1080",
             "type": "image/jpg",
             "form_factor": "wide",
             "label": "Curated drip from your favorite fashion brands",
             
           },
          {
            "src": "screenshot1080x2336.jpg",
             "sizes": "1080x2336",
             "type": "image/jpg",
             "form_factor": "narrow",
             "label": "Curated drip from your favorite fashion brands"
          },
        ]
      },
      devOptions: {
        enabled: false, // for enabling pwa in dev mode ;)
      },
    }),
  ],
});