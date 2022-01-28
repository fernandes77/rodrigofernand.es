import { RichText, RichTextBlock } from 'prismic-reactjs'

import Container from 'components/Container'
import { linkResolver } from '../../../prismicConfiguration'
import * as S from './styles'

export type PostProps = {
  uid: string
  thumbnail: {
    url: string
    alt: string | undefined
  }
  date: Date
  title: RichTextBlock[]
  description: RichTextBlock[]
  content: RichTextBlock[]
}

const BlogPost = () => (
  <Container>
    <S.Wrapper>
      {/* <header>
        <time>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <RichText render={title} linkResolver={linkResolver} />
        <RichText render={description} linkResolver={linkResolver} />
      </header>
      <section>
        <RichText render={content} linkResolver={linkResolver} />
      </section> */}
    </S.Wrapper>
  </Container>
)

export default BlogPost
