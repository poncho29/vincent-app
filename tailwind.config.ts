import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#85C8CB",
        green: "#98BE32",
        gray: "#D9D9D9",
        blackLight: "#3D3C38",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        mochiypopone: ["var(--font-mochiypopone)"],
      }
    },
  },
  plugins: [],
};
export default config;
