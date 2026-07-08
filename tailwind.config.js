/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#081610',
          900: '#0D2418',
          800: '#1B4332',
          700: '#2D6A4F',
          600: '#40916C',
          500: '#52B788',
          400: '#74C69D',
          300: '#95D5B2',
          200: '#B7E4C7',
          100: '#D8F3DC',
          50:  '#EAFAF0',
        },
        gold: {
          700: '#8A6E28',
          600: '#A8883A',
          500: '#C9A84C',
          400: '#D4B96A',
          300: '#E2CE8E',
        },
        cream: '#F8F6F0',
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'ui-serif', 'serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
        'hero-gradient': 'linear-gradient(160deg, #081610 0%, #1B4332 60%, #2D6A4F 100%)',
      },
      animation: {
        'fade-in':  'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'blob-1': 'blobDrift1 18s ease-in-out infinite',
        'blob-2': 'blobDrift2 24s ease-in-out infinite',
        'blob-3': 'blobDrift3 15s ease-in-out infinite',
        'blob-4': 'blobDrift4 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blobDrift1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%':      { transform: 'translate(40px, -70px) scale(1.08)' },
          '50%':      { transform: 'translate(-30px, 40px) scale(0.93)' },
          '75%':      { transform: 'translate(60px, 50px) scale(1.05)' },
        },
        blobDrift2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '20%':      { transform: 'translate(-50px, 30px) scale(1.1)' },
          '55%':      { transform: 'translate(60px, -40px) scale(0.9)' },
          '80%':      { transform: 'translate(-20px, 60px) scale(1.06)' },
        },
        blobDrift3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '35%':      { transform: 'translate(30px, 50px) scale(1.12)' },
          '70%':      { transform: 'translate(-40px, -30px) scale(0.88)' },
        },
        blobDrift4: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '40%':      { transform: 'translate(-60px, -50px) scale(1.07)' },
          '70%':      { transform: 'translate(40px, 30px) scale(0.94)' },
        },
      },
    },
  },
  plugins: [],
}
