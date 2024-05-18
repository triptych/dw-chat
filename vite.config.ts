import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: "app",
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    proxy: {
      "/.netlify": "http://localhost:9999/.netlify",
      "/api": {
        target: "https://storied-biscuit-773d0e.netlify.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "https://smart-floor-5017.puter.site",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  },
  build: {
    outDir: "../dist",
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [],
});
