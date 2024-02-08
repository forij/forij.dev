const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFD0EC',
        'secondary': '#474F7A',
        'accent': '#7360DF',
        'bg': '#1F2544',
      }
    }
  },
  plugins: [],
}

