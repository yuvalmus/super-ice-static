/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#3b82f6",
        "primary-light": "#60a5fa",
        "primary-dark": "#2563eb",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
