/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, ts, jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          /* Represents main colors for interactive elements: Blue pallette */
          DEFAULT: "#2563eb",
          light: "#60a5fa",
          dark: "#1e3a8a",
        },
        secondary: {
          /* represents highlights, call to actions or warnings: Amber pallette */
          DEFAULT: "#16a34a",
          light: "#4ade80",
          dark: "#14532d",
        },
        tertiary: {
          /* For tertiary elements, cards, backgrounds on backgrounds, etc. */
          DEFAULT: "#4338ca",
          light: "#a5b4fc",
          dark: "#312e81"
        },
        neutral: {
          /* represents backgrounds-borders and text: Slate pallette */
          DEFAULT: "#475569",
          light: "#94a3b8",
          dark: "#0f172a",
        },
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-105%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 10s linear infinite",
        "slide-right": "slide-right 40s reverse linear infinite",
      },
    },
  },
  plugins: [],
};
