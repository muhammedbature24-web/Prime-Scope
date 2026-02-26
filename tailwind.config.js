module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        premium: {
          dark: '#1a1a2e',
          light: '#eaeaea',
        },
        accent: {
          'blue': '#1f4068',
          'green': '#2a9d8f',
          'purple': '#9a5a9a'
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      gradients: {
        'premium-gradient': ['to right', '#2a9d8f', '#1f4068'],
      },
    },
  },
  plugins: [],
};