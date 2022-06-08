import Main from 'components/Main'
import Sidebar from 'components/Sidebar'

import * as S from './styles'

const Container = ({ children }) => (
  <S.Wrapper>
    <Sidebar />
    <Main>{children}</Main>
  </S.Wrapper>
)

export default Container
