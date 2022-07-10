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


  @font-face {
    font-family: 'Droid Sans Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/droid-sans-mono-v2.woff2') format('woff2');
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

  ${({ theme, removeBg }: any) => css`
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

    code {
      font-family: ${theme.font.code};
    }

    /* Scroll bar stylings */
    ::-webkit-scrollbar {
      width: 16px;
      height: 16px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.scrollbar.default};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.scrollbar.hover};
    }
  `}
`
export default GlobalStyles
