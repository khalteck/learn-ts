/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
    },
    screens: {
      sm: "640px", // Small screens (e.g., smartphones)
      md: "868px", // Medium screens (e.g., tablets)
      lg: "1400px", // Large screens (e.g., laptops)
      // xl: "1280px", // Extra-large screens (e.g., desktops)
      "2xl": "1536px", // 2x extra-large screens (e.g., large desktops)
    },
    fontFamily: {
      neu: ["Neucha", "cursive"],
    },
  },
  plugins: [],
};
