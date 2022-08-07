const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 theme: {
  container: {
   center: true,
  },
  fontFamily: {
   sans: ['Mikhak', ...defaultTheme.fontFamily.sans],
  },
  colors: {
   blue: '#3291ff',
   pink: '#f633a2',
   black: '#000',
   white: '#fff',
   transparent: 'transparent',
  },
  opacity: {
   0: '0',
   20: '0.2',
   40: '0.4',
   60: '0.6',
   80: '0.8',
   100: '1',
  },
 },
 plugins: [],
};
