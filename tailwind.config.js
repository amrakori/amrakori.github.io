const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bee-picture': "url('https://drive.google.com/uc?id=1kuqKC-EtgfVnfK2gGD0zrEoBsLFc4kCv')",
        'kubjub-instagram': "url('https://drive.google.com/uc?id=16WXtD-NkQoyPxD600-FY-1TdL37XUix0')",
        'kubjub-logo-intro': "url('https://drive.google.com/uc?id=1TfG2qdJ_hTZTZqjYqJukfc5ldFh1xTT5')",
        'kubjub-transparent': "url('https://drive.google.com/uc?id=103ylYPpLlQlUskgwi6zzKjQtLGdSRWoi')"
      }),
      colors: {
        orange: colors.orange,
        yellow: {
          050: '#fffdf5',
          550: '#fcbf32'
        },
        gray: {
          darkest: '#000000',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc'
        },
        purple: {
          darkest: '#ab4198'
        }
      },
      fontFamily: {
        'arista': ['Arista Pro Trial']
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)'
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        }
      },
      rotate: {
        '-180': '-180deg',
         '-90': '-90deg',
        '-45': '-45deg',
         '0': '0',
         '45': '45deg',
         '90': '90deg',
        '135': '135deg',
         '180': '180deg',
        '270': '270deg'
       },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
