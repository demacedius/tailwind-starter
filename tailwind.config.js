/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ["'Lato', sans-serif"],
      },
      width:{
        '150': '100rem',
      },
      height:{
        '100': '60rem',
      }
    },
  },
  plugins: [],
}
