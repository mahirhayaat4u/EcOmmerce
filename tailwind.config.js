/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        navBg: "#131921",
        searchColor: "#febd69",
        addressColor:"#cccccc",
        selectColor:"#f3f3f3",
        EnColor:"#a7acb2",
        panelBgColor:"#232F3E"
      },
    },
  },
  plugins: [],
}

