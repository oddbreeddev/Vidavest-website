
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F3C77A',
        brandPurple: '#8E44AD',
        bgDark: '#0B0B0F',
        bgCard: '#14141C',
        purple: {
          950: '#1a0b2e',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}
