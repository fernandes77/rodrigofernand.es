import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

const PostCard = ({ slug, frontmatter }) => (
  <Link href={`/blog/${slug}`}>
    <S.Card>
      <S.ImgWrapper>
        <Image
          src="/img/jake-walker-mpkqidpmyqu-unsplash.jpg"
          layout="fill"
          placeholder="blur"
        />
      </S.ImgWrapper>
      <S.TextWrapper>
        <S.Date>{frontmatter.date}</S.Date>
        <S.Title>{frontmatter.title}</S.Title>
        <S.Description>{frontmatter.description}</S.Description>
      </S.TextWrapper>
    </S.Card>
  </Link>
)

export default PostCard
