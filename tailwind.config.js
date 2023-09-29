/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryColor: '#181B33',
      primaryLightColor: '#282D49',
      blueColor: '#004680',
      greenColor: '#34C364',
      white:'#FFF',
      gray: '#73747C'
    }
  },
  plugins: [],
}