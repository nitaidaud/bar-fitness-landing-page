/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff1e1e',
          dark: '#cc0000',
        },
        navy: {
          light: '#1f2937',
          DEFAULT: '#151b27',
        },
      }
    },
  },
  plugins: [],
}

