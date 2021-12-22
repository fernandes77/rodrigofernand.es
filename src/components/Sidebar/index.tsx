import Image from 'next/image'

import Menu from 'components/Menu'

import * as S from './styles'
import SocialIcon from 'components/SocialIcon'
import Logo from 'components/Logo'

const Sidebar = () => (
  <S.Wrapper>
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
)

export default Sidebar
