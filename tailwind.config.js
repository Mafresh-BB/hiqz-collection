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
          purple: '#3b0764',     // Deep Royal Purple (Brand Primary)
          gold: '#C5A059',       // Muted Luxury Gold (Brand Accent)
          dark: '#0f0f0f',       // Charcoal Black (Backgrounds)
          light: '#f9fafb',      // Off-white (Text)
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Luxury Headers
        sans: ['"Montserrat"', 'sans-serif'],   // Clean Body Text
      }
    },
  },
  plugins: [],
}