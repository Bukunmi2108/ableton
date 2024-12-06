/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto : ['Roboto', 'san-serif']
      },
      colors: {
        primary: {
          1: '#fbffa7',
          2: '#ff764d',
          3: '#b1c5ff',
          4: '#d5b3ff',
          5: '#b6ffc0',
          6: '#0000ff',
        }
      }
    },
  },
  plugins: [],
}

