/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

