import { defineConfig } from "vite";

const productionConfig = {
  base: '/atlas_backup_360/',  // UPDATED TO YOUR NEW REPO
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

const developmentConfig = {
  base: '/', // Use root for local development
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

// Export a configuration based on environment
export default defineConfig(process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig);