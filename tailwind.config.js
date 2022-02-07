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
        'bg-scroll': '#282830',
        'gray-desc': '#C4C4C4',
        'input': '#282830'
      },
      height: {
        '900': '56.25rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
