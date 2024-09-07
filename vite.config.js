import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //the next 3 lines need to be added in order to launch it on mobile devices
    host: true  
  }
})
