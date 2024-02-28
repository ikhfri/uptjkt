/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      roboto:["Roboto","sans-serif"],
      whisper:["Whisper"],
      Slab:["Roboto Slab"],
      Afacad : ["Afacad"]
    }
  },
  plugins: [require("daisyui")],
}
