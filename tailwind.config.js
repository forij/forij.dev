const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['play', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#F2AFEF',
        'secondary': '#C499F3',
        'accent': '#7360DF',
        'bg': '#33186B',
      }
    }
  },
  plugins: [],
}

