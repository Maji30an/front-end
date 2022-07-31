/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#CB0F4C',
        secondary: '#362424',
      },
      screens: {
        '3xl': '1640px'
      },
      letterSpacing: {
        45: '.045em'
      },
      boxShadow: {
        my: '0px 10px 40px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
