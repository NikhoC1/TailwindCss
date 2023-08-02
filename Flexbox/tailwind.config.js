/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-fast' : 'spin 0.5s linear infinite',
      },   
      spacing :{
      '13': '3.25rem', 
    },
  },
  },
  plugins: [],
}

