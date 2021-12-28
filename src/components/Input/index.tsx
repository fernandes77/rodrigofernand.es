import * as S from './styles'

export type InputProps = {
  type: 'text' | 'email'
  name: string
  id: string
  placeholder: string
  required?: boolean
  maxLength: number
}

const Input = ({
  type,
  name,
  id,
  placeholder,
  required = false,
  maxLength
}: InputProps) => (
  <S.Wrapper
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
  />
)

export default Input
