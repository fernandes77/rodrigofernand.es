import Masonry from 'react-masonry-css'

import { PostProps } from 'templates/BlogPost'
import Container from 'components/Container'
import PostCard from 'components/PostCard'
import * as S from './styles'

export type BlogProps = {
  posts: PostProps[]
}

const breakpointColumnsObj = {
  default: 3,
  1400: 2,
  1024: 1
}

const Blog = () => {
  return (
    <Container>
      <S.Wrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))} */}
        </Masonry>
      </S.Wrapper>
    </Container>
  )
}

export default Blog
