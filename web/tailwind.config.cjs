/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        holo: "url('/background-informations.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 20.57%);',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
        'shadow-light': "radial-gradient(50% 50% at 50% 50%, rgba(161, 95, 244, 0.1) 0%, rgba(217, 217, 217, 0) 100%);",
        'footer-bg': "radial-gradient(81.99% 81.99% at 50% 50%, #2A2634 0%, rgba(42, 38, 52, 0.75) 100%);"
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        'landing-page': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}
