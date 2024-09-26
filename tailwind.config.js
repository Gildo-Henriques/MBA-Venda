/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  // Inclui arquivos dentro da pasta src
    "./public/**/*.{html,js}", // Adiciona a pasta public
    "./components/**/*.{html,js}", // Adiciona a pasta components (ou qualquer outra que desejar)
    "./**/*.{html,js}" // Inclui todos os arquivos HTML e JS do projeto inteiro
  ],
  theme: {
    extend: {
      colors: {
        escuro: {
          "100": "#1a1a1a",
        },
        sangue: {
          "100": "#e40326",
        },
      },
    },
  },
  plugins: [],
}
