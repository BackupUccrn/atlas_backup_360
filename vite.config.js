import { defineConfig } from "vite";

export default defineConfig({
  base: "/atlas_backup_360/", // Ensures correct paths for GitHub Pages
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["@arcgis/core"],
  },
});