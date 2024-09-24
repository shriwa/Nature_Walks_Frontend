/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d8c44",
        secondary: "#058789",
        tertiary: "#87dfe0",
      },
    },
  },
  plugins: [],
};
