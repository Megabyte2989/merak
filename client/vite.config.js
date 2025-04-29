import react from '@vitejs/plugin-react';
import cssnano from 'cssnano';
import { minify } from 'html-minifier'; // Corrected import method
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  build: {
    
    postcss: [
      cssnano(), // Minify CSS
    ],
    terserOptions: {
      compress: {
        // Keep console logs
      },
    },
    rollupOptions: {
      plugins: [
        {
          name: 'html-minify', // Custom plugin for minifying HTML
          transformIndexHtml(html) {
            return minify(html, {
              collapseWhitespace: true,
              removeComments: true,
              minifyCSS: true,
              minifyJS: true,
            });
          },
        },
      ],
    },
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        changeOrigin: true,
        secure:false
      }
    }
  },
  plugins: [
    react(), // Plugin for React support
    compression(), // Compression for gzip/deflate
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.jsx'], // Files to lint
    }),
  ],
});


// import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';
// import compression from 'vite-plugin-compression';
// import eslintPlugin from 'vite-plugin-eslint';
// import postcss from 'postcss';
// import cssnano from 'cssnano';
// import htmlMinifier from 'html-minifier'; // This is a different npm package than vite-plugin-html-minifier

// export default defineConfig({
//   build:{
//     postcss:[
//       cssnano(),
//     ],
//   },
//   plugins: [
//     react(),
//     compression(),
//     eslintPlugin({
//       include: ['src/**/*.js', 'src/**/*.jsx'], // Files to lint
//     }),
//   ],
// });
