/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'viking': ['viking']
      },
      'animation': {
        'slide': 'slide 8s infinite'
      }
    }
  },
  plugins: [],
}
