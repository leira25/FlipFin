/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'solana-purple': '#9945FF',
        'solana-green': '#14F195',
        'dark-bg': '#0F0F17',
        'card-bg': '#1A1A2E',
        'accent-yellow': '#FBBF24',
      },
      // fontFamily: {
      //   sans: ['Inter', 'system-ui', 'sans-serif'],
      //   heading: ['Orbitron', 'monospace'],
      // },
    },
  },
  plugins: [],
}