import Link from 'next/link'
import { useRouter } from 'next/router'

import projectList from 'config/projectList'

import * as S from './styles'

type MenuItemProps = {
  label: string
  href: string
}

const MenuItem = ({ label, href }: MenuItemProps) => {
  const router = useRouter()

  const parsedProjectPaths = projectList.map((project) => project.slug)

  return (
    <S.Wrapper
      active={
        href == '/'
          ? router.pathname === '/' ||
            parsedProjectPaths.includes(router.pathname)
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
