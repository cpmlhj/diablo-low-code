import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
       entry: 'src/index.ts',
       fileName: fomat => `index.${fomat}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
         // 配置UMD
         globals: {
           react: 'react',
           'react-dom': 'ReactDom'
        },
        // 配置minify 减少输出文件大小
        minifyInternalExports: true
      }
    }
  }
})
