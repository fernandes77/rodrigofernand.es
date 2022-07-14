import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem 8rem 5rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 92rem;
    letter-spacing: 0.07rem;
    word-wrap: break-word;

    @media (max-width: 1024px) {
      padding: 6rem 2rem 4rem;
    }

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

        @media (max-width: 1024px) {
          font-size: 4.8rem;
        }

        @media (max-width: 768px) {
          font-size: 4rem;
        }
      }

      & h2 {
        font-size: 3.2rem;
        font-weight: 300;
        line-height: 1.1;
        margin: 0;

        @media (max-width: 1024px) {
          font-size: 2.6rem;
        }
      }
    }

    & h2 {
      font-size: 2.8rem;
      margin: 5rem 0 1.6rem;

      @media (max-width: 768px) {
        font-size: 2.4rem;
      }

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

      & code {
        background-color: ${theme.colors.highlight};
        padding: 0.1rem 0.3rem;
        border-radius: 3px;
        font-size: 1.8rem;
      }
    }

    & ol,
    ul {
      padding-left: 2.5rem;
    }

    & pre {
      margin-bottom: 2.4rem;
      background-color: ${theme.colors.sidebarBg};
      padding: 1.2rem;
      max-width: 100%;
      overflow-x: auto;
    }

    & img {
      max-width: 100%;
      max-height: 100vh;
    }
  `}
`
