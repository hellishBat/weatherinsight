import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert'
import { createHtmlPlugin } from 'vite-plugin-html'
import { imagetools } from 'vite-imagetools'
import svgr from 'vite-plugin-svgr'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import eslintPlugin from 'vite-plugin-eslint'
import { APP_INFO } from './_info'

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: './dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  preview: {
    open: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: APP_INFO,
      },
    }),
    imagetools(),
    svgr(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
    }),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['node_modules/**', 'dist/**'],
      fix: true,
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
