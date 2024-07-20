/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--primary-color))',
        'secondary': 'rgb(var(--secondary-color))',
        'hero-title': {
          DEFAULT: 'rgb(var(--primary-text))',
          70: 'rgb(var(--primary-text) / .70)',
          60: 'rgb(var(--primary-text) / .60)',
          50: 'rgb(var(--primary-text) / .50)',
          40: 'rgb(var(--primary-text) / .40)',
          30: 'rgb(var(--primary-text) / .30)',
        },
        'body': 'rgb(var(--body-text))',
        'gray': 'rgb(var(--gray))',
        'ayoba-blue': 'rgb(var(--ayoba-blue))',
        'ayoba-light-blue': 'rgb(var(--ayoba-light-blue))',
        'ayoba-red': 'rgb(var(--ayoba-red))',
        'ayoba-purple': 'rgb(var(--ayoba-purple))',
        'newitts-gray': 'rgb(var(--newitts-gray))',
      },
      fontFamily: {
        gilroy: 'Gilroy',
        sans: 'Nunito',
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

