import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#85C8CB",
        skyLight: "#A6E3E6",
        green: "#98BE32",
        greenLight: "#C5E66D",
        gray: "#D9D9D9",
        blackLight: "#3D3C38",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        mochiypopone: ["var(--font-mochiypopone)"],
      },
      backgroundImage: {
        'bannerLanding': "url('/landing/banner.png')",
        'bannerLandingMobile': "url('/landing/banner-mobile.png')",
      },
    },
  },
  plugins: [],
};
export default config;
