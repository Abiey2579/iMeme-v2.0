/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11145A",
        secondary: "#8198AF",
        accent: "#FF7F5D",
      },
      fontFamily: {
        fredoka: "Fredoka Bold",
        quicksand: "Quicksand",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
