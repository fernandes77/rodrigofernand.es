import * as S from './styles'

export type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => <S.Wrapper>{children}</S.Wrapper>

export default Main
