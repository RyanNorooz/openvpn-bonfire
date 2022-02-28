/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */

const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,

  basePath: process.env.BASE_URL ?? '',
  assetPrefix: process.env.BASE_URL ?? '',

  images: {
    loader: 'asdf',
    path: '',
  },

  i18n,
}
