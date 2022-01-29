import * as S from './styles'

const Button = ({ label, type, loading }) => (
  <S.Wrapper type={type}>{label}</S.Wrapper>
)

export default Button
