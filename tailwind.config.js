module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'lexend': ['Lexend Deca'],
      'inter': ['Inter'],
    },
    extend: {
      colors: {
        'dark-body': '#13131F',
        'purple-light': '#8257E6',
      },
      height: {
        '900': '56.25rem',
      }
    },
  },
  plugins: [],
}
