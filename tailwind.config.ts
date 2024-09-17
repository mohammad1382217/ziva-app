import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          25: "#FFF8F4",
          50: "#FFEEE5",
          100: "#FFDDCC",
          200: "#FFBB99",
          300: "#FF9866",
          400: "#FF7633",
          500: "#FF5400",
          600: "#CC4300",
          700: "#993200",
          800: "#662200",
          900: "#331100",
        },
      },
      boxShadow: {
        'Box': '0px 16px 40px -16px var(--MainColorGray100)',
      }
    },
  },
  // darkMode: "class",
  plugins: [nextui()],
};

export default config;