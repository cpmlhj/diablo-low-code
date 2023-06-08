import react from '@vitejs/plugin-react'
import  dts from 'vite-plugin-dts'
import {defineConfig} from 'vite'


export const externalPackages = [
   'react',
   'react-dom',
   '@craftjs/core',
   'antd'
]

export default defineConfig({
   plugins: [react(), dts()],
   build: {
   lib: {
     entry: './index.ts',
     name: 'diablo.material',
     fileName: (format) => `index.${format}.js`
  },
  rollupOptions: {
      external: externalPackages,
      output: {
        globals: {
           'react': 'React',
           'react-dom': "ReactDOM"
        },
        minifyInternalExports: true
    },
  }
}
})