import * as S from './styles'

const Main = ({
  title = 'Front-end Developer',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/white.png" alt="Logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of a screen with code"
    />
  </S.Wrapper>
)

export default Main
