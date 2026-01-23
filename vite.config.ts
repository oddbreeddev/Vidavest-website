
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Credentials provided by the user or from environment
  const API_KEY = env.API_KEY || process.env.API_KEY || "";
  const SUPABASE_URL = env.SUPABASE_URL || process.env.SUPABASE_URL || "https://rsvvsqvoukjjflnqcu.supabase.co";
  const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_8DCplz8MO7FPRPG-DYQX5g_RvxDgtzo";
  
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      // Individual key replacement is more reliable in Vite's 'define'
      'process.env.API_KEY': JSON.stringify(API_KEY),
      'process.env.SUPABASE_URL': JSON.stringify(SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(SUPABASE_ANON_KEY),
      // Fallback for full process.env access
      'process.env': JSON.stringify({
        API_KEY,
        SUPABASE_URL,
        SUPABASE_ANON_KEY
      })
    }
  };
});
