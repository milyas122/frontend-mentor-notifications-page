/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        red: "#F65351",
        blue: "#0A317B",
      },
      natural: {
        white: "#FFFFFF",
        "light-grayish": {
          100: "#F7FAFD",
          200: "#E5EFFA",
          300: "#DDE7EE",
        },
        "grayish-blue": "#939DAE",
        "dark-grayish-blue": "#5E6778",
        "dark-blue": "#1C202B",
      },
    },
    fontFamily: {
      "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
