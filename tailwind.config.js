const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    extend: {
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        times: 'times',
      },
      boxShadow: {
        'solid-teal': '#00d4c1 4px 4px 0px',
        'solid-teal-lg': '#00d4c1 8px 8px 0px',
        'solid-orange-lg-br': '#f85c45 8px 8px 0px',
        'solid-orange-lg-bl': '#f85c45 -8px 8px 0px',
        'solid-orange-lg-tl': '#f85c45 -8px -8px 0px',
        'solid-navy-lg-br': '#182742 8px 8px 0px',
      },
      colors: {
        primary: {
          50: '#B2B8A1',
          200: '#7C8464',
          500: '#646B4B',
          700: '#4B5331',
        },
        secondary: {
          100: '#EFEBE6',
          300: '#CDA66D',
          500: '#F3A756',
          600: '#DF7300',
        },
        grey: {
          50: '#FFFFFF',
          100: '#F8F8F8',
          200: '#F1F3F4',
          300: '#EDEDED',
          400: '#D9D9D9',
          500: '#CCCCCC',
        },
        sand: {
          50: '#fefefe',
          100: '#fefefd',
          200: '#fcfcfb',
          300: '#fafbf8',
          400: '#f7f7f3',
          500: '#f3f4ee',
          600: '#dbdcd6',
          700: '#b6b7b3',
          800: '#92928f',
          900: '#777875',
        },
        orange: {
          50: '#fff7f6',
          100: '#feefec',
          200: '#fdd6d1',
          300: '#fcbeb5',
          400: '#fa8d7d',
          500: '#f85c45',
          600: '#df533e',
          700: '#ba4534',
          800: '#953729',
          900: '#7a2d22',
        },
        'dark-green': {
          50: '#f8f8f8',
          100: '#f1f2f2',
          200: '#dbdedd',
          300: '#c6cbc9',
          400: '#9ba3a1',
          500: '#707c78',
          600: '#65706c',
          700: '#545d5a',
          800: '#434a48',
          900: '#373d3b',
        },
        teal: {
          50: '#f2fdfc',
          100: '#e6fbf9',
          200: '#bff4f0',
          300: '#99eee6',
          400: '#4de1d4',
          500: '#00d4c1',
          600: '#00bfae',
          700: '#009f91',
          800: '#007f74',
          900: '#00685f',
        },
        navy: {
          50: '#f3f4f6',
          100: '#e8e9ec',
          200: '#c5c9d0',
          300: '#a3a9b3',
          400: '#5d687b',
          500: '#182742',
          600: '#16233b',
          700: '#121d32',
          800: '#0e1728',
          900: '#0c1320',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}