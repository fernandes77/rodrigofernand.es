import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem 8rem 5rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 92rem;
    letter-spacing: 0.07rem;

    & header {
      margin-bottom: 5rem;

      & time {
        font-weight: 300;
        margin: 0;
        font-size: 1.6rem;
      }

      & h1 {
        font-size: 6.4rem;
        line-height: 1;
        margin: 1.6rem 0 2rem;
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
      margin: 5rem 0 1.6rem;

      & a {
        color: ${theme.colors.white};
      }
    }

    & h3 {
      font-size: 2rem;
      margin-bottom: 1.6rem;

      & a {
        color: ${theme.colors.white};
      }
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
      padding: 1.2rem;
    }

    & .block-img {
      max-width: 100%;

      & img {
        max-width: 100%;
        max-height: 100vh;
      }
    }
  `}
`
