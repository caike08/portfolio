import react from '@vitejs/plugin-react-swc'
import { PluginOption, defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint';

const PLUGIN_OPTIONS: PluginOption[] = [
  react(),
  eslint(
    {
      cache: false,
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['node_modules', 'dist'],
    }
  )
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...PLUGIN_OPTIONS],
  base: '/portfolio/',
})
