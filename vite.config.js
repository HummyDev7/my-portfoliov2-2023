// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'html-files/about.html'),
        work: resolve(__dirname, 'html-files/work.html'),
        contact: resolve(__dirname, 'html-files/contact.html'),
      },
    },
  },
});