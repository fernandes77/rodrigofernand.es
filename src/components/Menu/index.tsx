import MenuItem from 'components/MenuItem'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <MenuItem label="Blog" href="/" />
    <MenuItem label="Projects" href="/projects" />
    <MenuItem label="Contact" href="/contact" />
  </S.Wrapper>
)

export default Menu
