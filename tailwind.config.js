/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Obsidian-Violet Surface Palette (Reference Theme)
        slate: {
          50: '#faf8ff',
          100: '#f5f3ff',
          200: '#e9e5f5',
          300: '#d4cbed',
          400: '#a99ac7',
          500: '#8776a8',
          600: '#665587',
          700: '#4d3d6b',
          800: '#341f5e', // Sleek violet border stroke
          850: '#1e1145', // Violet pill button surface
          900: '#130b2e', // Frosted dark violet card surface
          950: '#080414', // Deep obsidian violet background
        },
        // Electric Indigo & Deep Violet
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // Mapped to Radiant Purple / Lavender for all existing cyan utilities
        cyan: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Mapped to Neon Fuchsia / Magenta for all existing teal utilities
        teal: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        navy: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#5b21b6',
          800: '#341f5e',
          900: '#130b2e',
          950: '#080414',
        },
        gold: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        skyAccent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
        'premium': '0 10px 30px -5px rgba(26, 10, 56, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(217, 70, 239, 0.45)',
        'glow-sky': '0 0 25px -5px rgba(168, 85, 247, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(168, 85, 247, 0.5)',
        'glow-purple': '0 0 30px -5px rgba(168, 85, 247, 0.55)',
        'glow-fuchsia': '0 0 30px -5px rgba(217, 70, 239, 0.55)',
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
