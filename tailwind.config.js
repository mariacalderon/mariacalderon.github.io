/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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

      }
    },
  },
  plugins: [],
};
