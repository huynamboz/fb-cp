/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './assets/**/*.{css,scss,sass}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'],
      },
      colors: {
        primary: '#377DFF',
        secondary: '#FF5555',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-accent')({
      colors: ['violet', 'blue'],
      root: 'violet',
    }),
  ],
}
