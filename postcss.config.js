module.exports = {
  plugins: {
    // https://tailwindcss.com/
    tailwindcss: {},

    /**
     * disable plugins in dev environment
     */
    ...(process.env.NODE_ENV === 'development'
      ? {} // No transformations in development
      : {
          // https://github.com/csstools/postcss-preset-env
          'postcss-flexbugs-fixes': {},
          'postcss-preset-env': {
            stage: 3,
            autoprefixer: {
              flexbox: 'no-2009',
            },
            features: {
              'custom-properties': false,
            },
          },
        }),
  },
}
