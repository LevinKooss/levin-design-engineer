/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        card: "#0A0A0A",
        sub: "#A1A1AA",
        muted: "#525252",
        pulse: "#007AFF", 
        magic: "#8B5CF6", 
        lumi: "#FFB7B2", 
        lexi: "#007AFF",
        fit: "#06B6D4", 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' }, 
      }
    },
    animation: {
      float: 'float 2s ease-in-out infinite',
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}