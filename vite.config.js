import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Dyrane's Invoice App - Bill",
        short_name: "bill",
        description: "A lightweight and beautiful invoicing app.",
        start_url: '/',
        theme_color: "#2044e0",
        background_color: "#ffffff",
        display: 'standalone',
        icons: [
          {
            src: '/bill.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/bill.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});

