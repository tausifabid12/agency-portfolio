/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#90a4f6',

          secondary: '#ffdc60',

          accent: '#292930',

          neutral: '#89cefb',

          'base-100': '#f1f1f1',

          info: '#7EBDF1',

          success: '#58E997',

          warning: '#975107',

          error: '#F76B69',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
