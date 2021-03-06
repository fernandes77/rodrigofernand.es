import Masonry from 'react-masonry-css'

import Container from 'components/Container'
import PostCard from 'components/PostCard'

import * as S from './styles'

const breakpointColumnsObj = {
  default: 3,
  1400: 2,
  768: 1
}

const Blog = ({ posts }) => {
  return (
    <Container>
      <S.Wrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </Masonry>
      </S.Wrapper>
    </Container>
  )
}

export default Blog
