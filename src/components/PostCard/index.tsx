import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

type PostCardProps = {
  slug: string
  frontmatter: {
    image: string
    date: string
    title: string
    description: string
  }
}

const PostCard = ({ slug, frontmatter }: PostCardProps) => (
  <Link href={`/blog/${slug}`}>
    <S.Card>
      <S.ImgWrapper>
        <Image src={frontmatter.image} layout="fill" />
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
