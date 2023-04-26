import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/custom-elements/main.ce.ts",
      name: 'vue-material-u',
      // formats: ["es", "cjs", "umd"],
      // fileName: format => `vue-material-u.${format}.js`
      fileName: 'vue-material-u'
    },
    cssCodeSplit: true,
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0'
  }
});
