/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas", "sans-serif"], // Class will be `font-bebas`
        markazi: ["Markazi", "sans-serif"], // Class will be `font-markazi`
        sans: ["Inter var", "sans-serif"],
        iceland: ["Iceland", "sans-serif"],
      },
    },
  },
  plugins: [],
});