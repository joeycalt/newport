/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily :{
      'inter': ['Inter', 'sans-serif'],
      'work-sans': ['Work Sans', 'sans-serif'],
      'silkscreen': ['Silkscreen', 'sans-serif'],
    }
  },
  plugins: [],
}

