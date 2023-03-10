/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
  ],
  important: '#__next',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
