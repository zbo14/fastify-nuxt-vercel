const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors
  },

  variants: {},
  plugins: [],
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
