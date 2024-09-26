/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        escuro: {
          "100" : "#1a1a1a"
        },
        sangue: {
          "100": "#e40326"
        }
      }
    },
  },
  plugins: [],
}
