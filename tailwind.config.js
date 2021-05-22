module.exports = {
  //purge: ["./src/**/*.html"],
  purge: {
    content: ['./src/**/*.html'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false,
  theme: {
    boxShadow: {
      DEFAULT: '0 4px 8px 0 #aaa6ca',
      md: '0 8px 16px 0 #aaa6ca',
    },
    extend: {
      colors: {
        violet: {
          dark: '#0c0c22',
          light: '#aaa6ca'
        }
      },
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Cenobyte': ['Cenobyte'],
        'Sacramento': ['Sacramento', 'cursive']
      },
      textShadow: {
        white: '-1px 1px 0 #fff'
      },
      letterSpacing: {
        xwidest: '0.95rem'
      },
      height: {
        vp: '85vh'
      },
      gridTemplateColumns: {
        'portada': 'auto 1fr 2fr 1fr'
      },
      gridTemplateRows: {
        'portada': 'auto 1fr auto auto'
      },
      backgroundImage: theme => ({
        'arcana': "url('/src/assets/images/arcana_dark.jpg')",
        'puas': "url('/src/assets/images/alambrePuas.png')"
      }),
      animation: {
        // 'signature': 'signature 6s'
        'signature': 'signature 4s steps(60, end)'
      },
      keyframes: {
        signature: {
          'from': { width: '0' },
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ]

}
