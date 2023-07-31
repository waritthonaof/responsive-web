/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        primary: '#E7E7E7',
        secondary: '#C2C2C2',
        tertiary: '#F5F4F9',
        purple: '#5E3DB3',
        'purple-sec': '#603EBE',
        'dark-blue': '#090C35',
      },
    },
  },
  plugins: [],
};
