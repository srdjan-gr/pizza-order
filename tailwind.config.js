/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      "light", "dark"],
  },
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        'ibm': ['IBM_PLex_Serif', 'serif'],
      },
      colors :{
        // 'pizza_black': '#130912',
        'pizza_black': '#242424',
        'pizza_light': '#f5f5f5',
        'pizza_gray': '#767676',


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
        'pizza_wood': {
          DEFAULT: '#AA8B56',
          50: '#E7DFD0',
          100: '#E1D6C3',
          200: '#D3C3A7',
          300: '#C5B08C',
          400: '#B89E71',
          500: '#AA8B56',
          600: '#856D43',
          700: '#604E30',
          800: '#3A301D',
          900: '#15110B',
          950: '#020201'
        },
        'pizza_blue': {
          DEFAULT: '#1D293E',
          50: '#5F7EB4',
          100: '#5173AD',
          200: '#446091',
          300: '#374E76',
          400: '#2A3B5A',
          500: '#1D293E',
          600: '#0B1018',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'pizza_red': {
          DEFAULT: '#8C3333',
          50: '#DB9C9C',
          100: '#D58D8D',
          200: '#CB6F6F',
          300: '#C05151',
          400: '#AA3E3E',
          500: '#8C3333',
          600: '#632424',
          700: '#3A1515',
          800: '#110606',
          900: '#000000',
          950: '#000000'
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
