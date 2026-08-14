/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm off-white base instead of pure white
        cream: {
          DEFAULT: '#FFF8F1',
          soft: '#FFFDF8',
        },
        // Blush pink
        blush: {
          50: '#FFF1F5',
          100: '#FFE3EC',
          200: '#FFCBDD',
          300: '#FFA9C6',
          400: '#FF82AE',
          500: '#FF5C8A',
        },
        // Lavender / lilac
        lavender: {
          50: '#F6F2FF',
          100: '#ECE3FF',
          200: '#DCCBFF',
          300: '#C3AFFF',
          400: '#A58BFF',
          500: '#8B6CFF',
        },
        // Peach
        peach: {
          50: '#FFF6EC',
          100: '#FFEBD3',
          200: '#FFD9B0',
          300: '#FFC489',
        },
        // Soft sunny yellow
        sunny: {
          50: '#FFFBE8',
          100: '#FFF6CE',
          200: '#FFEDAA',
          300: '#FFE27F',
        },
        // Mint / sage
        mint: {
          50: '#EAFBF3',
          100: '#D2F5E6',
          200: '#A8EACF',
          300: '#7DDCB5',
        },
        // Confident coral accent for CTAs
        coral: {
          400: '#FF8A6B',
          500: '#FF6B4E',
          600: '#EF5237',
          700: '#D13E26',
        },
        // Deep violet / purple accent
        violet: {
          500: '#7C5CE0',
          600: '#6443C9',
        },
        // Deep plum for dark mode backgrounds + headings
        plum: {
          DEFAULT: '#3A2B4F',
          soft: '#574A68',
          muted: '#7A6C8C',
          800: '#2D2140',
          900: '#221830',
          950: '#181024',
        },
      },
      fontFamily: {
        // Friendly, slightly rounded display font
        display: ['"Baloo 2"', 'Quicksand', 'ui-rounded', 'system-ui', 'sans-serif'],
        // Clean, readable body font
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      boxShadow: {
        soft: '0 12px 32px -12px rgba(58, 43, 79, 0.18)',
        lift: '0 24px 48px -16px rgba(58, 43, 79, 0.28)',
        glow: '0 0 32px -8px rgba(255, 107, 78, 0.55)',
        'glow-violet': '0 0 32px -8px rgba(124, 92, 224, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(4deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 1.4s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
};
