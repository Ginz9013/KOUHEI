/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#EAE339",
        "primary-blue": "#33CCCC",
        "secondary-blue": "#88F0F0",
        "primary-black": "#000000",
        "secondary-black": "#111111",
      },
      width: {
        "20vw": "20vw",
        "80vw": "80vw",
        120: "30rem",
      },
      inset: {
        "20vw": "20vw",
        n20vw: "-20vw",
        "80vw": "80vw",
        n100: "-100%",
        n50: "-50%",
      },
      maxHeight: {
        "4/5": "80%",
      },
      translate: {
        n40: "-40px",
      },
      keyframes: {
        flash: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
      },
      animation: {
        flash: "flash 1.4s infinite linear",
      },
    },
  },
  plugins: [],
};
