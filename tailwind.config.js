// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest', 'sans-serif'], // 👈 this makes `font-onest` usable
        roboto: ['var(--font-roboto)'],  // optional: to use Roboto
      },
    },
  },
  plugins: [],
}
