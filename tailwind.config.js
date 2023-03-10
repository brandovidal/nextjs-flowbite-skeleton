/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{ts,tsx}",
    "./src/public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
