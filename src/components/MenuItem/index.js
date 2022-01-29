import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

const MenuItem = ({ label, href }) => {
  const router = useRouter()

  return (
    <S.Wrapper
      active={
        href == '/' ? router.pathname === '/' : router.asPath.includes(href)
      }
    >
      <Link href={href}>
        <S.MenuLink>{label}</S.MenuLink>
      </Link>
    </S.Wrapper>
  )
}

export default MenuItem