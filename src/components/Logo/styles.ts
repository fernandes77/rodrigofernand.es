import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-block;

    & path {
      fill: ${theme.colors.white};
    }
  `}
`
