import styled, { css } from 'styled-components'

import { TomatoProps } from '.'

export const Wrapper = styled.div<TomatoProps>`
  ${({ theme, completed }) => css`
    & svg {
      filter: drop-shadow(0 5px 3px rgb(0 0 0 / 0.2));
    }

    & svg path {
      fill: ${completed ? theme.colors.pomodoro : theme.colors.card};
    }
  `}
`
