/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    colors: {
      light: {
        primary: '#6DABE2',
        secondary: '#F3F3F3'
      },
      warning: '#B42318',
      alert: '#B7720B',
      success: '#039855'
    }
  },
  plugins: []
}
