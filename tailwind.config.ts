import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'green': '#0FE873',
      'red': '#F14C4C',
      'violet': '#B17CFF',
      'blue': '##15A3F1',
    },
    extend: {
      colors: {
        "primary": "#794DFD",
        "second-primary": "#1D2145",
        "dark": "#131420",
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
} satisfies Config;
