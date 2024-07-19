/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--primary-color))',
        'hero-title': {
          DEFAULT: 'rgb(var(--primary-text))',
          70: 'rgb(var(--primary-text) / .70)',
          60: 'rgb(var(--primary-text) / .60)',
          50: 'rgb(var(--primary-text) / .50)',
          40: 'rgb(var(--primary-text) / .40)',
          30: 'rgb(var(--primary-text) / .30)',
        }
      },
      fontFamily: {
        gilroy: 'Gilroy',
        sans: ['Helvetica', 'Nunito']
      }
    },
  },
  plugins: [],
}

