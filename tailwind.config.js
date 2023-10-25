/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orange': '#f4631c',
      'gray': '#36454F',
      'white': '#ffffff',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}

