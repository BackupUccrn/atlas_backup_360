import { defineConfig } from "vite";

export default defineConfig({
  base: "/atlas_backup_360/",  // Set to your GitHub Pages repo name
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
});