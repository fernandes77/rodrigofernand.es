import MenuItem from 'components/MenuItem'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <MenuItem label="About" href="/" />
    <MenuItem label="Portfolio" href="/portfolio" />
    <MenuItem label="Blog" href="/blog" />
    <MenuItem label="Contact" href="/contact" />
  </S.Wrapper>
)

export default Menu
