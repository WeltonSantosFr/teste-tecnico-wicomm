/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black1: "#0B0B0B",
      white1: "#FFFFFF",
      orange1: "#FF9601",
      orange2: "#FFC470",
      dark1: "#1C1C1E",
      dark2: "#2C2C2E",
      dark3: "#3A3A3C",
      grey1: "#9A9A9A",
      grey2: "#CACACA",
      background: "#F1F1F1",
    },
    fontFamily: {
      roboto: ["Roboto Condensed", "ui-monospace", "SFMono-Regular"],
      inter: ["Inter", "ui-monospace", "SFMono-Regular"],
      barlow: ["Barlow", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      backgroundImage: {
        "primary-image": "url('/assets/unsplash_FP7cfYPPUKM.png')",
      },
    },
  },
  plugins: [],
};
