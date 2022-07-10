import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 4rem;
  }
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  text-align: center;
`

export const AdviceCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-top: 3.2rem;
    background-color: ${theme.colors.card};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
    padding: 4rem;
    width: min(48rem, 100%);
    font-size: 2.4rem;
  `}
`

export const Advice = styled.p`
  text-align: center;
  font-style: italic;
`

export const Line = styled.hr`
  ${({ theme }) => css`
    margin: 3.6rem 0;
    border: 0;
    border-top: 1px solid ${theme.colors.white};
  `}
`

const rotation = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const Refresh = styled.button`
  ${({ theme, disabled }) => css`
    border-radius: 99px;
    background-color: ${theme.colors.primary};
    cursor: pointer;
    border: 0;
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    ${disabled &&
    css`
      opacity: 0.7;
    `}

    &:hover {
      opacity: 0.85;
    }

    &:active {
      opacity: 0.7;
    }

    & svg {
      ${disabled &&
      css`
        animation: ${rotation} 1s infinite linear;
      `}
    }
  `}
`
