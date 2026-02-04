/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#538e79",
        secondary: "#93afbd",
      },
      fontFamily: {
        // Titles use Playfair Display
        title: ["var(--font-playfair)", "serif"],
        // Body text uses Montserrat
        body: ["var(--font-montserrat)", "sans-serif"],
        // Keep Inter as default sans if needed
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
