/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/theme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // // single component styles
    // "./node_modules/@nextui-org/theme/dist/components/button.js", 
    // // or you can use a glob pattern (multiple component styles)
    // './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}