/** @type {import('tailwindcss').Config} */
import bg from './src/assets/bgImgSm.jpg'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        lgBgImg: "url('./src/assets/bgImg.webp')",
        smBgImg: "url('./src/assets/test.jpg')",
      }
    },
  },
  plugins: [],
}

