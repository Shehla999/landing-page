/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        buttonColor: "#00B4A9",
        textColor: 111827,
        hoverColor: "#065f63"
      }
    },
    
  },
  plugins: [],
}

