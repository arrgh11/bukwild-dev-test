module.exports = {
  purge: [],
  theme: {
    theme: {
      fontFamily: {
        'sans': ['Helvetica Neue'],
      },
    },
    extend: {
    	fontSize: {
    		'bukwild': '0.95rem',
    		'7xl': '5.25rem'
    	},
    	colors: {
    		'bukwild-yellow': '#ffc001',
    		'bukwild-yellow-hover': '#ffc004',
    	},
    	translate: {
    		'14': '3.5rem'
    	}
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '2rem',
          paddingRight: '2rem',
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
            maxWidth: '1440px',
          },
        }
      })
    }
  ]
}
