import styled, { css } from 'styled-components'

export const Card = styled.article`
  ${({ theme }) => css`
    display: block;
    width: 30rem;
    height: fit-content;
    background-color: ${theme.colors.card};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
    cursor: pointer;
    transition: ${theme.transition.fast};

    &:hover,
    &:focus {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    &:hover h1 {
      color: ${theme.colors.primary};
    }
  `}
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;

  & img {
    object-fit: cover;
  }
`

export const TextWrapper = styled.div`
  padding: 2.4rem 3rem;
`

export const Date = styled.time`
  font-weight: 300;
`

export const Title = styled.h1`
  font-size: 2.4rem;
  margin-top: 1rem;
`

export const Description = styled.h2`
  font-weight: 300;
  font-size: 1.8rem;
  margin-top: 1rem;
`
