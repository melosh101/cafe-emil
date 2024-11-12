/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        "courier-prime": ["Courier Prime", "monospace"],
      },
      colors: {
        "secondary": "#478091",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

