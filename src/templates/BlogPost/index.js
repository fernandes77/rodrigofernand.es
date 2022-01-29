import Container from 'components/Container'
import * as S from './styles'

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
