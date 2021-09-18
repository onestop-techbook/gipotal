module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand": "#ffc107",
        // 本来はイベントごとに違う色になるはず
        "event-banner": "#4daf50"
      }
    },
    fontFamily: {
      "button": ["Roboto"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
