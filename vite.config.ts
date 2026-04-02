import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/jernst/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon-16x16.png',
        'favicon-32x32.png',
        'rocket.ico',
        'web-app-manifest-192x192.png',
        'web-app-manifest-512x512.png',
        'offline.html',
      ],

      manifest: {
        name: 'Julia Ernst Webpage 2.0',
        short_name: 'JEApp',
        description:
          'Personal webpage implemented with React, TypeScript and Github Actions as Progressive Web App',
        start_url: '/jernst/',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone'],
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,webp}'],
        // TODO: implement offline fallback page
        navigateFallback: '/offline.html',
      },
    }),
  ],
});
