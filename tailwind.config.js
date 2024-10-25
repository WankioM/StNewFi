/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trend': ['Trend-Sans', 'sans-serif'],
        'lastica': ['Lastica', 'sans-serif']
      }
    },
  },
  plugins: [],
}