/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primmariFont: ["Poppins"],
        secondaryFont: ["Inter"],
      },

      transformOrigin: {
        "bottom-center1": "50% 97%",
        "bottom-center2": "50% 95%",
        "bottom-center3": "50% 86% ",
      },

      backgroundImage: {
        "gradient-radial":
          "radial-gradient(150% 154% at 50% 50%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.00) 28%)",

        "gradient-white-radial":
          "radial-gradient(190% 190% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.0) 26%)",
      },

      colors: {
        primmaryDark: "rgb(17, 17, 17)",
        html: "#E44D26",
        vsCode: "#3FAAF2",
        css: "#1572B6",
        javaScript: "#F7DF1E",
        typeScript: "#3178C6",
        react: "#61DAFB",
        illustrator: "#FF9A00",
        reactNative: "#00A7D4",
        figma: "#A259FF",
        inDesign: "#FF3366",
        nodeJs: "#90C53F",
        photoshop: "#31A8FF",
        blender: "#E87D0D",
        dribbble: "#E74D89",
        lightroom: "#31A8FF",
        audition: "#00D9BB",
        premierePro: "#EA77FF",
        afterEffects: "#9999FF",
        behance: "#0057FF",
        github: "#A97DFF",
      },
    },
  },
  plugins: [],
};
