import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding-left: ${theme.grid.sidebar};
    min-height: 100vh;
    width: 100%;
  `}
`
