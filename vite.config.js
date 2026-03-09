import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  // Deployed at https://khilrita2000-creator.github.io/My-website/
  // so base must match the repo name for GitHub Pages.
  base: '/My-website/'
});

