import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace <REPO_NAME> with your GitHub repository name for correct asset paths when deploying.
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment with custom domain, set base to '/'.
  // Custom domain: abhi-anitha.wedding
  base: '/'
});
