import { useState } from 'react'

import Menu from 'components/Menu'
import SocialIcon from 'components/SocialIcon'
import Logo from 'components/Logo'

import * as S from './styles'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.OpenSidebar onClick={() => setIsOpen(!isOpen)}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </S.OpenSidebar>

      <S.Wrapper isOpen={isOpen}>
        <S.LogoWrapper>
          <S.Logo>
            <Logo />
          </S.Logo>
          <S.Name>
            Rodrigo Fernandes
            <S.Title>Software Developer</S.Title>
          </S.Name>
        </S.LogoWrapper>
        <Menu />
        <S.Links>
          <SocialIcon platform="GitHub" />
          <SocialIcon platform="LinkedIn" />
        </S.Links>
      </S.Wrapper>

      <S.Overlay isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}></S.Overlay>
    </>
  )
}

export default Sidebar
