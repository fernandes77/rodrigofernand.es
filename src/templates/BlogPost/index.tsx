import { useEffect } from 'react'
import Prism from 'prismjs'

import Container from 'components/Container'

import * as S from './styles'

const BlogPost = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [post])

  return (
    <Container>
      <S.Wrapper>
        <header>
          <time>{post.frontmatter.date}</time>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.description}</h2>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
      </S.Wrapper>
    </Container>
  )
}

export default BlogPost
