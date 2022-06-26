import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 3.6rem;
    cursor: pointer;
  `}
`

type SwitchModifiers = {
  isTurnedOn: boolean
}

export const Circle = styled.div<SwitchModifiers>`
  ${({ isTurnedOn, theme }) => css`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: auto;

    ${isTurnedOn &&
    css`
      right: 0;
      left: auto;
    `}
  `}
`

export const Background = styled.div<SwitchModifiers>`
  ${({ isTurnedOn, theme }) => css`
    position: absolute;
    top: 1px;

    & svg rect {
      transition: ${theme.transition.default};
      fill: ${theme.colors.card};

      ${isTurnedOn &&
      css`
        fill: ${theme.colors.primary};
      `}
    }
  `}
`
