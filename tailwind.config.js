/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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

    // firefox only modifier
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`
        })
      })
    }),
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
