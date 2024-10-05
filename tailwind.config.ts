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
    screens: {
      '4xl-max': { max: '1920px' },
      '3xl-max': { max: '1440px' },
      '2xl-max': { max: '1320px' },
      'xl-max': { max: '1140px' },
      'lg-max': { max: '960px' },
      'md-max': { max: '720px' },
      'sm-max': { max: '540px' },
      'xs-max': { max: '420px' },
      '1200-max': { max: '1200px' },
      '768-max': { max: '768px' },
      '768-min': { min: '768px' },

      '4xl-min': { min: '1921px' },
      '3xl-min': { min: '1441px' },
      '2xl-min': { min: '1321px' },
      'xl-min': { min: '1141px' },
      'lg-min': { min: '961px' },
      'md-min': { min: '721px' },
      'sm-min': { min: '541px' },
    },
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
        Folly: {
          500: '#FF0054'
        },
        Murrey: {
          500: '#9E0059'
        },
        Duke: {
          500: '#390099'
        },

      },
      boxShadow: {
        'Box': '0px 16px 40px -16px var(gray-100)',
      },
      fontSize: {
        '10': '10px',
        "40": "40px",
        '32': '32px'
      },
      backgroundImage: {
        "RectangleOrange": "url('./assests/RectangleLoginPage.webp')",
        "pattern": "url('./assests/pattern.png')"
      },
      padding:{
        '156':'156px'
      }
    },
  },
  // darkMode: "class",
  plugins: [nextui()],
};

export default config;