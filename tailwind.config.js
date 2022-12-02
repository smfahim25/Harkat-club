module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mnftheme: {
          accent: "#ffe2e5",
          neutral: "#ee3c4d",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
