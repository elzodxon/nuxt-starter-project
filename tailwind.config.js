module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  theme: {
    screens: {
      a: { max: '1200px' },
      b: { max: '1024px' },
      c: { max: '900px' },
      d: { max: '768px' },
      e: { max: '600px' },
      f: { max: '480px' },
      g: { max: '375px' },
    },
    extend: {
      colors: {
        pink: '#F00073',
        red: '#FF0000',
        blue: '#0088CC',
        dopeBlue: '#1877F2',
      },
    },
  },
}
