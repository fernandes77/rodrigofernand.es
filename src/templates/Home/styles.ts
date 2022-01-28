import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 8rem 10rem;
`

export const Introduction = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;

  & > span {
    display: block;
    font-size: 3.2rem;
    font-weight: 700;
  }
`

export const Description = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.6;
  width: 76rem;

  & p {
    margin-top: 1rem;
  }
`
