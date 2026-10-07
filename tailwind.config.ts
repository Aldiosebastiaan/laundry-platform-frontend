import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './layers/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00685f',
          50: '#e6f5f3',
          100: '#c2e7e3',
          200: '#99d7d1',
          300: '#6ec7bd',
          400: '#3db6a9',
          500: '#00685f',
          600: '#005d55',
          700: '#004f48',
          800: '#00403b',
          900: '#002d29',
          950: '#001917',
        }
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'sans-serif'],
      }
    }
  }
}
