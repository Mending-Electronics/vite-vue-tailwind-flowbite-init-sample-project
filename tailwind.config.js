/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme (default)
        primary: {
          DEFAULT: '#0D6986',
          light: '#0d5a77',
          dark: '#0c4c68'
        },
        secondary: '#546e7a',
        third: '#0b203c',
        dark: '#212529',
        light: '#dee2e6',
        white: '#FFFFFF',
        grad1: '#0d5a77',
        grad2: '#0c4c68',
        grad3: '#0c3d5a',
        grad4: '#0b2f4b',
        gradG1: '#66747a',
        gradG2: '#4b5458',
        success: '#5bc460',
        info: '#60a3bc',
        warning: '#fa983a',
        danger: '#e55039',
        magenta: '#ae2573',
        brown: '#978c87',
        grey: '#e4e4e8',
        darkGrey: '#515569',
        blue: '#0080ff',
        indigo: '#6610F2',
        purple: '#6F42C1',
        pink: '#e83e8c',
        red: '#D9534F',
        orange: '#df6919',
        yellow: '#f2c12e',
        green: '#5cb85c',
        teal: '#20C997',
        cyan: '#5bc0de',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      ringColor: ['dark'],
      ringOffsetColor: ['dark'],
      divideColor: ['dark'],
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
    plugin(function({ addVariant, e }) {
      // Add variant for colorblind themes
      ['protanopia', 'deuteranopia', 'tritanomaly'].forEach(theme => {
        addVariant(theme, `:merge(.theme-${theme} &)`);
      });
    }),
  ],
}
