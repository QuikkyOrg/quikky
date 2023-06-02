/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundColor: {
          'EFF8FF': '#EFF8FF',
          'B7E0CA': '#B7E0CA',
          'F6FDF9': '#F6FDF9',
          'F6FBFF': '#F6FBFF',
        },
        fontFamily: {
          'Lato': ['Lato'],
        },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}