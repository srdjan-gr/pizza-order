/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      colors :{
        'pizza_black': '#130912',
        'pizza_dark': '#f5f5f5',
        'pizza_gray': '#767676',


        'pizza_red': '#8C3333',
        'pizza_wood': '#AA8B56',
        'pizza_dark_blue': '#1d293e',


        'pizza_green': {
          DEFAULT: '#03663C',
           50: '#07EC8B',
          100: '#06DD82',
          200: '#06BF70',
          300: '#05A15F',
          400: '#04844D',
          500: '#03663C',
          600: '#01301C',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'pizza_orange': {
          DEFAULT: '#E77917',
          50: '#F8D9BD',
          100: '#F7CEAB',
          200: '#F3B985',
          300: '#EFA460',
          400: '#EC8E3B',
          500: '#E77917',
          600: '#B45E12',
          700: '#81440D',
          800: '#4E2908',
          900: '#1B0E03',
          950: '#010100'
        },
      },
    },
  },
  plugins: [],
}
