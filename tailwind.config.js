module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Poppins', 'sans-serif'],
      // },
      minWidth: {
        '100': '100px',
        '150': '150px',
        '200': '200px',
      },
      rotate: {
        '120': '120deg',
        '240': '240deg',
      },
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
      screens: {
        'sm': { 'min': '0px', 'max': '547px' },
        'md': { 'min': '548px', 'max': '767px' },
        'lg': { 'min': '768px', 'max': '1023px' },
        'xl': { 'min': '1024px', 'max': '1679px' },
        '2xl': { 'min': '1680px' },
      },

    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
