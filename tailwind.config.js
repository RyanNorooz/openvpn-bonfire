/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // darkMode: 'media', // 'media' or 'class' or false

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require('tailwindcss-logical'),
    // ...
  ],

  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },

    extend: {
      fontWeight: {
        extrablack: 950,
      },
    },
  },
}
