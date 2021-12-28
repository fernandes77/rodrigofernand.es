import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    width: 100%;
    padding: 1.2rem 0;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    transition: ${theme.transition.fast};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.mainBg};
    }

    &:active {
      opacity: 0.7;
    }
  `}
`
