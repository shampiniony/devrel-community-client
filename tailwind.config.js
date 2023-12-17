/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#1D2145",
        "second-primary": "#161936",
        "light": "#4A4D6A",
        transparent: 'transparent',
        current: 'currentColor',
      },
      backgroundImage: {
        'search-field': 'url("./assets/search.svg")',
      },
      backgroundPosition: {
        'left-with-space': '5%',
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

