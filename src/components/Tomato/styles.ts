import styled, { css, keyframes } from 'styled-components'

import { TomatoProps } from '.'

const blink = keyframes`
from, to {
  opacity: 1;
}

50% {
  opacity: 0.5;
}`

export const Wrapper = styled.div<TomatoProps>`
  ${({ theme, completed }) => css`
    width: 100%;
    height: auto;

    & svg {
      filter: drop-shadow(0 5px 3px rgb(0 0 0 / 0.2));
      width: 100%;
      height: auto;

      ${!completed &&
      css`
        animation: 1s ${blink} ease infinite;
      `}
    }

    & svg path {
      fill: ${completed ? theme.colors.pomodoro : theme.colors.card};
    }
  `}
`
