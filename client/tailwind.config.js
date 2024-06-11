/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#F9F9F9",
        darkenColoe: "#141416",
        middleGray: "#EDEDED",
        smallGray: "#C2C3CB",
        textGray: "#676767",
      },
      height: {
        500: "500px",
        141: "141px",
      },
      width: { 305: "305px" },
      screens: {
        450: "450px",
      },
    },
  },
  plugins: [],
};
