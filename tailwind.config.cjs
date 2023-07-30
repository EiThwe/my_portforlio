/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#7C7C7C",
        primary: "#c90076",
      },
      fontFamily:{
        sourcePro:"Source Code Pro, monospace"
      }
    },
  },
  plugins: [],
};
