import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: block;
    width: 30rem;
    max-width: 100%;
    height: fit-content;
    background-color: ${theme.colors.card};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
    cursor: pointer;
    transition: ${theme.transition.fast};

    &:hover,
    &:focus {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    &:hover h1 {
      color: ${theme.colors.primary};
    }
  `}
`
