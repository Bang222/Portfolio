/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(80px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 0, transform: 'translateY(0)' },
          '100%': { opacity: 1, transform: 'translateY(-80px)' },
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translateX(-80px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeRight: {
          '0%': { opacity: 0, transform: 'translateX(80px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        fadeOut: 'fadeOut 1.5s ease-in-out',
        fadeLeft: 'fadeLeft 1.5s ease-in-out',
        fadeRight: 'fadeRight 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

