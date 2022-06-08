import styled, { css } from 'styled-components'

export const Wrapper = styled.textarea`
  ${({ theme }) => css`
    border: 0;
    border-bottom: 3px solid transparent;
    background-color: ${theme.colors.inputBg};
    height: 18rem;
    font-size: ${theme.font.sizes.medium};
    padding: 1.2rem 2rem 0;
    color: ${theme.colors.grey};
    width: 100%;
    resize: none;
    font-family: ${theme.font.family};

    &::placeholder {
      color: ${theme.colors.greyDark};
      font-size: ${theme.font.sizes.medium};
    }

    &:focus {
      outline: 0;
      border-bottom: 3px solid ${theme.colors.primary};
    }
  `}
`
