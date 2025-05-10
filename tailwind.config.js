/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A78BFA',
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
        },
        secondary: {
          light: '#F9A8D4',
          DEFAULT: '#EC4899',
          dark: '#BE185D',
        },
        dark: {
          background: '#000000',
          card: '#0A0A0A',
          surface: '#101010',
          border: '#181818',
          text: {
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
            muted: '#999999',
          }
        },
        background: '#F8FAFC',
        text: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 