/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Josefin Sans"],
        headTitle: ["Comfortaa"],
        main: ["Nunito"],
        logo: ["Poppins"],
        name: ["Allura"],
        basic: ["Sora"],
      }
    },
  },
  plugins: [],
}
