/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2A9D8F", // Teal from the logo ribbon
        secondary: "#E76F51", // Orange from the lightbulb
        darkblue: "#0D2B3E", // Deep navy from logo background
        "background-light": "#F8FAFC",
        "background-dark": "#0A1929",
        "card-light": "#FFFFFF",
        "card-dark": "#132F45",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Nunito", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
    },
  },
  plugins: [],
}
