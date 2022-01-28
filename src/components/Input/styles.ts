import styled, { css } from 'styled-components'

export const Wrapper = styled.input`
  ${({ theme }) => css`
    border: 0;
    border-bottom: 3px solid transparent;
    background-color: ${theme.colors.inputBg};
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: 3px 2rem 0;
    color: ${theme.colors.grey};
    width: 100%;

    &:focus {
      outline: 0;
      border-bottom: 3px solid ${theme.colors.primary};
    }

    &::placeholder {
      color: ${theme.colors.greyDark};
    }
  `}
`
