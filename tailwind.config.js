/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(20 83 45)",
        secondary: "rgb(22 163 74)",
        tertiary: "#87dfe0",
      },
    },
  },
  plugins: [],
};
