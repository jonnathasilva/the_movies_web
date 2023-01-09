const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",

          "scrollbar-width": "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        },

        ".scrollbar-width::-webkit-scrollbar": {
          width: "6px",
          "border-radius": "10px",
          "background-color": "#F5F5F5",
        },

        ".scrollbar-width::-webkit-scrollbar-thumb": {
          "border-radius": "10px",
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
          "background-color": "#555",
        },
      });
    }),
  ],
};
