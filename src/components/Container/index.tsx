import Main from 'components/Main'
import Sidebar from 'components/Sidebar'
import React from 'react'
import * as S from './styles'

const Container: React.FC = ({ children }) => (
  <>
    <Sidebar />
    <Main>{children}</Main>
  </>
)

export default Container
