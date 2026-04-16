/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shuvium-blue': '#0B1120',
        'shuvium-saffron': '#F97316',
        'shuvium-gold': '#EAB308',
      }
    },
  },
  plugins: [],
}