import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 6rem;
  width: min(100%, 48rem);
  margin: 0 auto;

  & > div {
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    & :first-child {
      margin-left: 0;
    }

    & :last-child {
      margin-right: 0;
    }
  }
`
