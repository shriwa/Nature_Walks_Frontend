/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      smm: "768px",
      md: "976px",
      lg: "1200px",
      xl: "1300px",
    },
    extend: {
      fontFamily: {
        rubikWetPaint: ['"Rubik Wet Paint"', "cursive"],
      },
      colors: {
        primary: "rgb(20 83 45)",
        secondary: "rgb(22 163 74)",
        tertiary: "rgb(66, 237, 92 )",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(40) 1 forwards",
        typing_2: "typing 1.5s steps(40) 1 forwards",
        blink: "blink .7s infinite",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
