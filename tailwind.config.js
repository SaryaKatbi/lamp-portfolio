/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(150% 154% at 50.00% 50.00%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.00) 28%)",
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
