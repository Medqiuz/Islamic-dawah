/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        islamic: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          gold: '#D4AF37',
          white: '#FFFFFF',
          black: '#1A1A1A',
        },
      },
      fontFamily: {
        arabic: ['"Noto Sans Arabic"', 'sans-serif'],
        amharic: ['"Noto Sans Ethiopic"', 'sans-serif'],
        english: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-islamic': 'linear-gradient(135deg, #16a34a 0%, #166534 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
        'pattern-geometric': 'url("/patterns/geometric-pattern.svg")',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}