/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '.theme-toggle:checked ~ .theme-wrapper'],
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        studio: {
          dark: '#1a1a1a',
          muted: '#94a3b8',
          carddark: '#111111',
          lighttext: '#cbd5e1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
