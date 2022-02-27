import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      // '@common': path.resolve(__dirname, './src/styles/common.scss')
    },
  },
  plugins: [
    vue(),
    vueJsx(),
  ]
});