/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hiqz: {
          purple: '#2b0a45',     // Deep Royal Purple (Brand Primary)
          gold: '#C5A059',       // Muted Luxury Gold (Brand Accent)
          dark: '#0b0b0e',       // Charcoal Black (Backgrounds)
          light: '#f5f1e8',      // Warm Off-white (Text)
        }
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],           // Hero & Headlines
        serif: ['"Cormorant Garamond"', 'serif'], // Elegant Subheads
        sans: ['"Manrope"', 'sans-serif'],        // Clean Body Text
      }
    },
  },
  plugins: [],
}
