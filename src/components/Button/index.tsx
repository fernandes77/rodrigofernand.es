import * as S from './styles'

type ButtonProps = {
  label: string
  type: 'button' | 'submit' | 'reset'
  loading: boolean
}

const Button = ({ label, type, loading }: ButtonProps) => (
  <S.Wrapper type={type}>{label}</S.Wrapper>
)

export default Button
