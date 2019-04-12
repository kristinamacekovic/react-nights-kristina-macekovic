// contains an object with commonly used css properties
// that will be used thoughout the project (a _theme_)

const presets = {
  color: {
    black: '#252522',
    softGray: '#f9f9f9',
    gray: '#e5e5e5',
    primary: '#f8cb00',
    purple: '#845EC2',
    white: '#fff',
    red: '#ef0d33',
    teal: '#00C9A7',
    darkPurple: '#4B4453',
    mediumPurple: '#9B89B3',
    pink: '#D65DB1',
  },
  radius: {
    basic: '5px',
  },
  shadow: {
    basic: '0 0 5rem -1.3rem rgb(150, 150, 150)',
    lively: '5px 5px #845EC2',
    pink: '8px 8px #D65DB1',
  },
  fontSize: {
    small: '1.2rem',
    normal: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xLarge: '2rem',
    xxLarge: '2.4rem',
  },
  space: ['0rem', '2rem', '4rem', '8rem', '16rem', '32rem'],
  border: {
    basic: '2px solid black',
  },
}

export default presets
