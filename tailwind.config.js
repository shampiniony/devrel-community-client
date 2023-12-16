/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'green': '#0FE873',
      'red': '#F14C4C',
      'violet': '#B17CFF',
      'yellow': '#F9C82F',
      'orange': '#FE9D2A',
      'blue': '#15A3F1',
      'slate': '#94a3b8',
      'gray': '#4A4D6A',
    },
    extend: {
      colors: {
        "primary": "#794DFD",
        "second-primary": "#1D2145",
        "dark": "#131420",
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

