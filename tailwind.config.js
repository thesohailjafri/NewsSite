module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '100': '100px',
        '150': '150px',
        '200': '200px',
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
