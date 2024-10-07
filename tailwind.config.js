/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      transform: {
        'style-3d': 'transform-style: preserve-3d;',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      backfaceVisibility: {
        'hidden': 'backface-visibility: hidden;',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
