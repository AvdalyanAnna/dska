/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],

  theme: {
    extend: {
        screens: {
            'hover-hover': {'raw': '(hover: hover)'},
        },
      colors: { 
          dark: {
          100: "#d3d3d3",
          200: "#a7a7a7",
          300: "#7b7b7b",
          400: "#303030",
          500: "#232323",
          600: "#1c1c1c",
          700: "#151515",
          800: "#0e0e0e",
          900: "#070707"
}, 
         grey: {
          100: "#e2e2e2",
          200: "#c4c4c4",
          300: "#F5F5F5",
          400: "#595959",
          500: "#6c6c6c",
          600: "#565656",
          700: "#414141",
          800: "#2b2b2b",
          900: "#161616"
}, 
        primary: {
          100: "#f8d5d9",
          200: "#f1abb2",
          300: "#ea828c",
          400: "#e35865",
          500: "#dc2e3f",
          600: "#b02532",
          700: "#841c26",
          800: "#C22838",
          900: "#F1384C"
},
      },
      padding: {
        24:'24px'
      }
    },
  },
  plugins: [],
}
 