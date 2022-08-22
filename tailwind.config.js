/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/templates/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Festive", ],
        display: ["'Stardos Stencil'",],
      }
    },
  },
  plugins: [],
}
