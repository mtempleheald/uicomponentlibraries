import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    target: "esnext",
    lib: {
      entry: ['src/lib/_index.js'],
      name: 'MthLib',
      fileName: 'mth-lib',// extensions added for us
      //fileName: (format, entryName) => `${entryName}.${format}`,
      formats: ['es'] // https://rollupjs.org/configuration-options/#output-format
    },
  },
})
