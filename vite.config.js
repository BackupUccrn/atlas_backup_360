import { defineConfig } from "vite";

const productionConfig = {
  base: '/atlas_backup_360/',
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

const developmentConfig = {
  base: '/atlas_backup_360/',
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return developmentConfig;
  } else {
    return productionConfig;
  }
});
