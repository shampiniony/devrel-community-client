import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: { ...colors.indigo, DEFAULT: indigo[900] },
        "primary": {
          DEFAULT: "#1D2145",
        },
        "text-primary": {
          DEFAULT: "#FFFFFF",
        },
        "second-primary": {
          DEFAULT: "#131420",
        },
        "light-primary": {
          DEFAULT: "#4A4D6A",
        },
        detail: {
          DEFAULT: "#343858",
        },
        ...colors
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
    fontFamily: {
      forNumbers: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
