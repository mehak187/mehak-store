/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brand: {
          50: '#FDF7F0',
          100: '#F9EBD9',
          200: '#F0D2A6',
          300: '#E5B26E',
          400: '#D89040',
          500: '#B87333',
          600: '#8B5A2B',
          700: '#5C3A1D',
          800: '#3D2712',
          900: '#211406',
        },
        ink: {
          50: '#F7F7F5',
          100: '#EFEFEB',
          200: '#D5D5CD',
          300: '#A8A79B',
          400: '#787869',
          500: '#4F4E42',
          600: '#38372F',
          700: '#2A2924',
          800: '#1A1916',
          900: '#0D0D0B',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: { '0%': { transform: 'translateY(30px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
        slideInRight: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } },
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
