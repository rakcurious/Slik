/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'urbanist' : ['Urbanist', 'sans-serif'],
        'poiretone' : ['Poiret One', 'sans-serif'],
        'julius' : ['Julius Sans One', 'sans-serif'],
      },
      screens: {
        'lol': {'max': '1025px'},
      },  
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

