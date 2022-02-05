import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`

export const Contact = styled.div`
  ${({ theme }) => css`
    padding-left: 10rem;
    padding-right: 8rem;
    max-width: 96rem;

    & > h1 {
      font-size: ${theme.font.sizes.huge};

      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }

    & > p {
      margin-top: ${theme.spacings.medium};

      @media (max-width: 768px) {
        margin-top: 1rem;
      }
    }

    & > form {
      margin-top: ${theme.spacings.large};

      @media (max-width: 768px) {
        margin-top: 1rem;
      }
    }

    @media (max-width: 768px) {
      padding: 5rem 2rem;
    }
  `}
`
