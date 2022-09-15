/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
     sans:['Inter','sans-serif'] 
    },
    extend: {
      backgroundImage: {
        galaxy: "url('./Fundo.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 20.08%, #43E7Ad ,#E1D55D 85.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%);'
      },
    },
  },
  plugins: [],
};
