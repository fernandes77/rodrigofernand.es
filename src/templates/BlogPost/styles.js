import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem 8rem 5rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 92rem;

    & header {
      margin-bottom: 6rem;

      & time {
        font-weight: 300;
        margin: 0;
        font-size: 1.6rem;
      }

      & h1 {
        font-size: 6.4rem;
        line-height: 1;
        margin: 1.6rem 0;
      }

      & h2 {
        font-size: 3.2rem;
        font-weight: 300;
        line-height: 1.1;
        margin: 0;
      }
    }

    & h2 {
      font-size: 3.2rem;
      margin: 3.6rem 0 1.6rem;
    }

    & p,
    ol,
    ul {
      margin-bottom: 2.4rem;
      font-size: 2rem;
      font-weight: 300;
      line-height: 1.6;
    }

    & ol,
    ul {
      padding-left: 2.5rem;
    }

    & pre {
      margin-bottom: 2.4rem;
      background-color: ${theme.colors.sidebarBg};
    }

    & .block-img {
      max-width: 100%;

      & img {
        max-width: 100%;
        max-height: 100vh;
      }
    }

    & strong {
      font-weight: 400;
      background-color: ${theme.colors.highlight};
    }
  `}
`
