/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, ts, jsx,tsx}"],
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
          DEFAULT: "#d97706",
          light: "#fbbf24",
          dark: "#78350f",
        },
        neutral: {
          /* represents backgrounds-borders and text: Slate pallette */
          DEFAULT: "#475569",
          light: "#94a3b8",
          dark: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
