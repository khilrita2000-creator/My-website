import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  // If you use a project page on GitHub Pages (username.github.io/repo-name),
  // you may want to set base: '/repo-name/' here.
  base: '/'
});

