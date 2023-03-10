import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react({ jsxRuntime: 'classic' })],
  build: {
    commonjsOptions: {
      include: [/dynamic-island/, /node_modules/],
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@junhoyeo/iphone',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
