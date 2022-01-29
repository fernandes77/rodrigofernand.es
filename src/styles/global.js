import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/open-sans-v27-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/open-sans-v27-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/open-sans-v27-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('/fonts/open-sans-v27-latin-800.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

${({ theme, removeBg }) => css`
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};

    ${!removeBg &&
    css`
      background-color: ${theme.colors.mainBg};
    `}
  }

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;

    &:hover,
    &:focus {
      opacity: 0.85;
    }

    &:active {
      opacity: 0.7;
    }
  }
`}
`
export default GlobalStyles
