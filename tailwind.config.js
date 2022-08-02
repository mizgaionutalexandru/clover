const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      "yellow-1": "#ffe600",
      "yellow-2": "#ffe605",
      neutral: colors.neutral,
    },
    extend: {},
  },
  plugins: [],
};
