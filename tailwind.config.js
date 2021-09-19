module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        badge: "#ffc107",
        // 本来はイベントごとに違う色になるはず
        "event-banner": "#4daf50",
        "gray-right": "#c4c4c4",
      },
      spacing: {
        main: "980px",
      },
      backgroundImage: {
        topcover: "url('/images/top-cover.png')",
      },
    },
    fontFamily: {
      button: ["Roboto"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
