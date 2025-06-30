/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1D37',
          50: '#E6EBF2',
          100: '#CCD7E5',
          200: '#99AFCB',
          300: '#6687B1',
          400: '#335F97',
          500: '#0A1D37',
          600: '#08172C',
          700: '#061121',
          800: '#040B16',
          900: '#02050B'
        },
        gold: {
          DEFAULT: '#B88900',
          50: '#F5F0CC',
          'dark-yellow': '#b58900', 
          100: '#F2EABB',
          200: '#ECDE99',
          300: '#E6D277',
          400: '#E0C655',
          500: '#DABA33',
          600: '#B88900',
          700: '#8F6A00',
          800: '#664B00',
          900: '#3D2C00'
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'heading': ['Oswald', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}