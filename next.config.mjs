/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [
      "@chakra-ui/icons",
      "@chakra-ui/next-js",
      "@chakra-ui/react",
      "@chakra-ui/system",
      "@chakra-ui/theme-tools",
      "@nextui-org/react",
      // "@tanstack/react-table",
      "antd",
      "embla-carousel",
      "embla-carousel-react",
      "framer-motion",
      "react",
      "react-dom",
      "next",
      "next-seo",
      "next-sitemap",
      "react-custom-scrollbars-2",
      "react-multi-date-picker",
      "react-otp-input",
      "solar-icon-set",
      "stylis-plugin-rtl",
    ],
  },
};

export default nextConfig;