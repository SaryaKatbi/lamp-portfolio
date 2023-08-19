/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primmariFont: ["Poppins"],
      },

      transformOrigin: {
        "bottom-center1": "50% 97%",
        "bottom-center2": "50% 95%",
        "bottom-center3": "50% 86% ",
      },

      backgroundImage: {
        "gradient-radial":
          "radial-gradient(150% 154% at 50% 50%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.00) 28%)",
      },

      colors: {
        primmaryDark: "rgb(17, 17, 17)",
      },
    },
  },
  plugins: [],
};
