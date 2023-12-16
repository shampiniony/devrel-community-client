import colors, { lime } from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#794DFD",
        "second-primary": "#1d2145",
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
