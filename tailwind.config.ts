import colors, { lime } from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.lime, DEFAULT: lime[600] },
        "text-primary": {
          DEFAULT: "#03045E",
        },
        "second-primary": {
          DEFAULT: "#e5e7eb",
        },
        detail: {
          DEFAULT: "#474306",
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
    fontFamily: {
      forNumbers: ["Graduate", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
