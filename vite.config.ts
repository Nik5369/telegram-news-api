import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@app': path.resolve(__dirname, 'src/app/'),
      '@entities': path.resolve(__dirname, 'src/entities/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@widgets': path.resolve(__dirname, 'src/widgets/'),
      '@types': path.resolve(__dirname, 'src/types/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@lib': path.resolve(__dirname, 'src/lib/'),
    },
  },
})
