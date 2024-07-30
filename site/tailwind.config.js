/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark Blue
        secondary: '#D4AF37', // Gold
        accent: '#F59E0B', // Amber
        neutral: '#3D4451', // Gray
        base: '#FFFFFF', // White
        info: '#3B82F6', // Blue
        success: '#10B981', // Green
        warning: '#F59E0B', // Amber
        error: '#EF4444', // Red
        cream: '#F5F5DC', // Cream color
      },
    },
  },
  plugins: [],
}
