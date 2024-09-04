/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ajuste o caminho conforme sua estrutura de projeto
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EA1821',    
        secondary: '#1B1D1C',  
        terciary: '#C4C393',   
      },
      width: {
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
      },
      boxShadow: {
        'almost-black': '0 4px 6px rgba(0, 0, 0, 0.7)', // Sombra quase preta
        'soft-white': '0 4px 6px rgba(255, 255, 255, 0.3)', // Sombra branca suave
        'custom-primary': '3px 3px 0px #EA1821 ',
      }
    },
  },
  plugins: [],
}
