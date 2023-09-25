/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway Variable", "arial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        marron: "#1c170b",
      },
    },
  },
  plugins: [],
};
