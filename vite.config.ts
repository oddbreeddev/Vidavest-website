import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.API_KEY || process.env.API_KEY || "";
  
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      // Define specific string replacement for the Gemini SDK
      'process.env.API_KEY': JSON.stringify(apiKey),
      // Define the process.env object to avoid "process is not defined" errors
      'process.env': {
        API_KEY: apiKey
      }
    }
  };
});