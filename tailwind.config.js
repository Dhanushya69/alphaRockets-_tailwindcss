/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/*.js"],
  theme: {
    extend: {
      Screens:{
        'widescreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw':'(min-aspect-ratio:1/2)'},
      }
    },
  },
  plugins: [],
}

