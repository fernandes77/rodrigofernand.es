import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: min(48rem, 100%);
    background-color: ${theme.colors.card};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
  `}
`

export const Label = styled.h1`
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
`

export const TimerWrapper = styled.div`
  padding: 3rem 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`
