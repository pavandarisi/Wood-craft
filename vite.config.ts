import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to 0.0.0.0 to expose the app to the network
    port: 5173       // Ensure the port is set
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});