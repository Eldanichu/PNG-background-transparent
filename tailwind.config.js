module.exports = {
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        yellow: {

        }
      },
      fontSize: {
        'ns': '12px',
        'nm': '14px',
        'nl': '16px'
      },
      zIndex: {
        '100': 100,
        'max': 999
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover','disabled'],
      textDecoration: ['active', 'hover','disabled'],
      scale: ['hover']
    },
  },
  plugins: [],
};
