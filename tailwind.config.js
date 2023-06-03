/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      }
    },
    fontFamily: {
      "montserrat": "Montserrat, sans-serif",
      "raleway": "Raleway, sans-serif",
      "nunito": "Nunito Sans, sans-serif",
    }
  },
  plugins: [],
}

