import Image from 'next/image'

import Menu from 'components/Menu'

import * as S from './styles'
import SocialIcon from 'components/SocialIcon'

const Sidebar = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <S.Logo>
        <Image src="/img/logo-white.svg" alt="Logo" width={50} height={61} />
      </S.Logo>
      <S.Name>
        Rodrigo Fernandes
        <S.Title>Web Developer</S.Title>
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
