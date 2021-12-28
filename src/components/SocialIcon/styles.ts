import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    transition: ${theme.transition.default};

    & > svg > path {
      fill: ${theme.colors.grey};
    }

    &:hover > svg > path {
      fill: ${theme.colors.primary};
      transition: ${theme.transition.default};
    }
  `}
`
