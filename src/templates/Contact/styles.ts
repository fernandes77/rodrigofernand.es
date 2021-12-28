import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  & main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Contact = styled.div`
  ${({ theme }) => css`
    padding-left: 8rem;
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
