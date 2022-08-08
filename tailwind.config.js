/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  purge: {
    content: [
      "./src/**/*.{html,ts,css}",
      "./src/app/*.{html,ts,css}",
      "./src/app/*/*.{html,ts,css}",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "10%",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
