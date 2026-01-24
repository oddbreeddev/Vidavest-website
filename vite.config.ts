
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  const API_KEY = env.API_KEY || process.env.API_KEY || "";
  
  // Firebase Configuration from the user's provided project credentials
  const FIREBASE_API_KEY = env.VITE_FIREBASE_API_KEY || "AIzaSyCIke08wv5WEkhh79EpAthyLSCbx9gi5rs";
  const FIREBASE_AUTH_DOMAIN = env.VITE_FIREBASE_AUTH_DOMAIN || "vidavest-b4ccd.firebaseapp.com";
  const FIREBASE_PROJECT_ID = env.VITE_FIREBASE_PROJECT_ID || "vidavest-b4ccd";
  const FIREBASE_STORAGE_BUCKET = env.VITE_FIREBASE_STORAGE_BUCKET || "vidavest-b4ccd.firebasestorage.app";
  const FIREBASE_MESSAGING_SENDER_ID = env.VITE_FIREBASE_MESSAGING_SENDER_ID || "895765387363";
  const FIREBASE_APP_ID = env.VITE_FIREBASE_APP_ID || "1:895765387363:web:015ace3406c952279f8056";
  const FIREBASE_MEASUREMENT_ID = env.VITE_FIREBASE_MEASUREMENT_ID || "G-70W9YMVKL9";

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      'process.env.API_KEY': JSON.stringify(API_KEY),
      'process.env.FIREBASE_CONFIG': JSON.stringify({
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID,
        measurementId: FIREBASE_MEASUREMENT_ID
      })
    }
  };
});
