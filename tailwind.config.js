/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Kept from the original palette so brand references stay stable
        orange: "#f4631c",
        gray: "#36454F",

        ember: {
          50: "#fff4ed",
          100: "#ffe5d4",
          200: "#ffc7a8",
          300: "#ffa070",
          400: "#ff6f37",
          500: "#f4631c",
          600: "#e04a0c",
          700: "#b9360c",
          800: "#932d12",
          900: "#772912",
          950: "#401107",
        },
        charcoal: {
          50: "#f6f6f7",
          100: "#e2e3e5",
          200: "#c5c7cb",
          300: "#9ea1a8",
          400: "#767a83",
          500: "#5b5f68",
          600: "#474a52",
          700: "#36383e",
          800: "#232529",
          900: "#141518",
          950: "#0a0a0c",
        },
      },
      // Extra steps used by the glass borders / ambient glows
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "ember-gradient": "linear-gradient(135deg, #ff8a3d 0%, #f4631c 45%, #b9360c 100%)",
      },
      boxShadow: {
        ember: "0 18px 50px -18px rgba(244, 99, 28, 0.65)",
        "ember-sm": "0 10px 30px -12px rgba(244, 99, 28, 0.55)",
        lift: "0 24px 60px -24px rgba(0, 0, 0, 0.85)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
        "smoke-drift": {
          "0%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.08)", opacity: "0.5" },
          "100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.3" },
        },
        // Smoke plumes: each layer drifts on its own path and timing so they
        // never visibly loop together
        "smoke-a": {
          "0%, 100%": { transform: "translate3d(-3%, 0, 0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translate3d(4%, -7%, 0) scale(1.18)", opacity: "0.6" },
        },
        "smoke-b": {
          "0%, 100%": { transform: "translate3d(4%, 2%, 0) scale(1.1)", opacity: "0.28" },
          "50%": { transform: "translate3d(-5%, -5%, 0) scale(1)", opacity: "0.5" },
        },
        "smoke-c": {
          "0%, 100%": { transform: "translate3d(0, 3%, 0) scale(0.95)", opacity: "0.2" },
          "50%": { transform: "translate3d(2%, -9%, 0) scale(1.25)", opacity: "0.42" },
        },
        "smoke-texture": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1.1)", opacity: "0.05" },
          "50%": { transform: "translate3d(-3%, -4%, 0) scale(1.3)", opacity: "0.1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flicker: "flicker 4.5s ease-in-out infinite",
        "smoke-drift": "smoke-drift 18s ease-in-out infinite",
        "smoke-a": "smoke-a 24s ease-in-out infinite",
        "smoke-b": "smoke-b 31s ease-in-out infinite -6s",
        "smoke-c": "smoke-c 19s ease-in-out infinite -11s",
        "smoke-texture": "smoke-texture 38s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};
