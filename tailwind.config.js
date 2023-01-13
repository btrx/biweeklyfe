/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        backround: '#00000'
      },
      keyframes: {
        slideTop: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        slideBtm: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100px)' }
        }
      },
      animation: {
        'slide-top': 'slideTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-btm': 'slideBtm 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide': 'backround 0.5s ease'
      }

    },
  },
  plugins: [],
}
