/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
