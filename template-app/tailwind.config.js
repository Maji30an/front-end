/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        balsamiq: ['Balsamiq Sans', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#CB0F4C',
        secondary: '#362424',
        third: '#191234',
        dot: '#C4C4C4',
      },
      screens: {
        '3xl': '1640px'
      },
      letterSpacing: {
        45: '.045em'
      },
      boxShadow: {
        my: '0px 10px 40px rgba(0, 0, 0, 0.1)',
        us: '5px 5px 25px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'blog-pic-1': "url('/src/assets/img/pic-1.svg')",
        'blog-pic-2': "url('/src/assets/img/pic-2.svg')",
        'blog-pic-3': "url('/src/assets/img/pic-3.svg')",
      },
    },
  },
  plugins: [],
}
