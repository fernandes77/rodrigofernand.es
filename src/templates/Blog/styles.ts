import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 8rem 2rem;
  max-width: 106rem;

  & .my-masonry-grid {
    display: flex;
    width: auto;
  }

  & .my-masonry-grid_column {
    background-clip: padding-box;
  }

  & .my-masonry-grid_column > article {
    margin-bottom: 4rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1400px) {
    max-width: 72rem;
  }
`
