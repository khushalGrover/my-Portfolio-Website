/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "primary-text": "FBFCEE",
        "secondary-text": "#E9C6A6",
        "tertiary-text": "#F7F8D7 ",
        "quaternary-text": "#FBFCEE",
        "quinary-text": "#F7F8D7",
        "senary-text": "#F7F8D7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg3.png')",
      },
    },
  },
  plugins: [],
};
