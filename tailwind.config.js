/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Definición de colores globales
      colors: {
        'brand-primary': '#c3d9c9',
        'brand-secondary': '#2F4F3F',
        'brand-dark': '#1d3326',
        'brand-tittle': '#2F4F3F',
        'brand-text': '#000000',
        'brand-main': '#C3D9C9',
        'brand-white': '#ffffff',
        'brand-black': '#000000',
        'brand-orange': '#c8a57a',
      },
      // Definición de tipografías globales
      fontFamily: {
        'andada': ['"Andada Pro"', 'sans-serif'],
        'lato': ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}