/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "arial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        marron: "#1c170b",
      },
      keyframes: {
        drawSVG: {
          to: {
            strokeDashoffset: 0,
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
