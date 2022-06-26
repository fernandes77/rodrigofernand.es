import styled from 'styled-components'

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
