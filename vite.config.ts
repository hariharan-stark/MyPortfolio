import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MyPortfolio2/', // Set to "/<repo-name>/" if the repo is not named username.github.io
  plugins: [react()],
});
