import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

export const Contact = styled.div`
  ${({ theme }) => css`
    padding-left: 10rem;
    padding-right: 8rem;
    max-width: 96rem;

    & > h1 {
      font-size: ${theme.font.sizes.huge};
    }

    & > p {
      margin-top: ${theme.spacings.medium};
    }

    & > form {
      margin-top: ${theme.spacings.large};
    }
  `}
`
