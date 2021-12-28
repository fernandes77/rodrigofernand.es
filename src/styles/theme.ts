export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
    sidebar: '30rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    black: 800,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#2EB396',
    secondary: '#B3404A',
    mainBg: '#282C35',
    lightBg: '#F2F2F2',
    sidebarBg: '#21252A',
    white: '#FFFFFF',
    black: '#121212',
    grey: '#ABB2BF',
    greyActive: '#323841',
    inputBg: '#343A45'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    slow: '0.3s ease-in-out',
    default: '0.2s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
