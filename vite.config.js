import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from 'tailwindcss'
import tailwindPostcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

// rest of your config...


export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('flowbite-')
        }
      }
    }),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindPostcss(),
        autoprefixer()
      ]
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'flowbite-vue',
      'flowbite',
      '@heroicons/vue',
      '@headlessui/vue'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})



