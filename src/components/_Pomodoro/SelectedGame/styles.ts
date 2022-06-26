import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectedGame = styled.h2``

export const GameIcon = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 2px solid ${theme.colors.primary};
    margin-bottom: 2rem;

    &:hover {
      opacity: 0.7;
    }

    & img {
      object-fit: cover;
      border-radius: 50%;
    }
  `}
`
