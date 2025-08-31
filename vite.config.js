import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'pages/auth/login.html'),
        signup: path.resolve(__dirname, 'pages/auth/signup.html')
      }
    },
    outDir: 'dist'
  }
});
