/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcdbff',
          300: '#8ec3ff',
          400: '#59a0ff',
          500: '#327cff',
          600: '#1d5ef7',
          700: '#1446e4',
          800: '#1638b8',
          900: '#183391',
          950: '#132158',
        },
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf6',
          200: '#c3d9ed',
          300: '#95bee0',
          400: '#609dcf',
          500: '#3a7ebe',
          600: '#2764a3',
          700: '#1d4f84',
          800: '#19426e',
          900: '#0a192f',
          950: '#060d1b',
        },
        gold: {
          50: '#fefbf2',
          100: '#fdf6e2',
          200: '#faeac5',
          300: '#f6d89b',
          400: '#f0be64',
          500: '#e5a338',
          600: '#c98322',
          700: '#9f601b',
          800: '#7f4b1c',
          900: '#683e1b',
        },
        skyAccent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'premium': '0 10px 30px -5px rgba(10, 25, 47, 0.1)',
        'glow-gold': '0 0 25px -5px rgba(229, 163, 56, 0.4)',
        'glow-sky': '0 0 25px -5px rgba(14, 165, 233, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
