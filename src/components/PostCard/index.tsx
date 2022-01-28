import Image from 'next/image'
import Link from 'next/link'

import { PostProps } from 'templates/BlogPost'
import * as S from './styles'

const PostCard = ({ uid, thumbnail, date, title, description }: PostProps) => (
  <Link href={`/blog/${uid}`}>
    <S.Card>
      <S.ImgWrapper>
        <Image src={thumbnail.url} layout="fill" placeholder="blur" />
      </S.ImgWrapper>
      <S.TextWrapper>
        <S.Date>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </S.Date>
        <S.Title>{title[0].text}</S.Title>
        <S.Description>{description[0].text}</S.Description>
      </S.TextWrapper>
    </S.Card>
  </Link>
)

export default PostCard
