/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#F5F4F9',
          medium: '#5E3DB3',
          dark: '#090C35',
        }
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1920px',
      },
    },
  },
  plugins: [],
}

