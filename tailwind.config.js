/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, ts, jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        glowDark: "0 0 40px 5px rgba(68, 255, 51, 1)",
        glowLight: "0 0 40px 5px rgba(115, 234, 225, 1)",
      },
      fontFamily: {
        header: ["Moonstrike-nRqzP", "sans-serif"],
      },
      colors: {
        primary: {
          /* Represents main colors for interactive elements: Blue pallette */
          DEFAULT: "#0f6292",
          light: "#3f81a7",
          dark: "#093a57",
        },
        secondary: {
          /* represents highlights, call to actions or warnings: Amber pallette */
          DEFAULT: "#16ff00",
          light: { DEFAULT: "#4f3", 50: "#44ff3380" },
          dark: "#0d9900",
        },
        tertiary: {
          /* For tertiary elements, cards, backgrounds on backgrounds, etc. */
          DEFAULT: "#ffed00",
          light: "#fff24c",
          dark: "#998e00",
        },
        highlight: {
          DEFAULT: "#37e2d5",
          light: { DEFAULT: "#73eae1", 50: "#73eae180" },
          dark: "#21877f",
        },
        neutral: {
          /* represents backgrounds-borders and text: Slate pallette */
          DEFAULT: "#191919",
          light: "#cecece",
          dark: "#000",
        },
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 50s linear infinite",
        "slide-right": "slide-right 60s reverse linear infinite",
      },
    },
  },
  plugins: [],
};
