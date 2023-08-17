/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      colors: {
        centerWhite: "rgba(255, 255, 255, 0.3)",
        middleWhite: "rgba(255, 255, 255, 0)",
        outWhite: "rgba(255, 255, 255, 0)",
      },
    },
  },
  plugins: [],
};
