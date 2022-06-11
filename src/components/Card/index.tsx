import Link from 'next/link'

import * as S from './styles'

type CardProps = {
  slug: string
  children: React.ReactNode
}

const Card = ({ slug, children }: CardProps) => {
  return (
    <Link href={slug}>
      <S.Wrapper>{children}</S.Wrapper>
    </Link>
  )
}

export default Card
