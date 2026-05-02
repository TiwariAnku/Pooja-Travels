/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        
      colors: {
        navy: '#1A1A2E',
        'navy-mid': '#16213E',
        'navy-light': '#0F3460',
        gold: '#C9A84C',
        'gold-dark': '#A68A3D', // Added for the button gradient
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
      }
      
    },
  },
  plugins: [],
}