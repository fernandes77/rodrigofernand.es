import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Counter = styled.span`
  font-weight: 700;
  font-size: 10rem;
`

type ButtonsWrapperProps = {
  center: boolean
}

export const ButtonsWrapper = styled.div<ButtonsWrapperProps>`
  ${({ center }) => css`
    margin-top: 2.4rem;
    display: flex;
    justify-content: ${center ? 'center' : 'space-between'};
    align-items: center;

    & button {
      width: min(11rem, 100%);
    }
  `}
`
