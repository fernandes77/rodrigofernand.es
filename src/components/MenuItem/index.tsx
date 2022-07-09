import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

type MenuItemProps = {
  label: string
  href: string
}

const MenuItem = ({ label, href }: MenuItemProps) => {
  const router = useRouter()

  return (
    <S.Wrapper
      active={
        href == '/'
          ? router.pathname === '/' || router.asPath.includes('/blog')
          : router.asPath.includes(href)
      }
    >
      <Link href={href}>
        <S.MenuLink>{label}</S.MenuLink>
      </Link>
    </S.Wrapper>
  )
}

export default MenuItem
