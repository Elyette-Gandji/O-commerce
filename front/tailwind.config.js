/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "luxury"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "luxury",
  },
};
