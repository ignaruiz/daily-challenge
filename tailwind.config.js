/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    require.resolve('react-widgets/styles.css'),
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
