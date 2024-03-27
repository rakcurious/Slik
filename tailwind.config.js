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
      }  
    },
  },
  plugins: [],
}

