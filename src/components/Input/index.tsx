import * as S from './styles'

type InputProps = {
  type?: React.HTMLInputTypeAttribute
  name?: string
  id?: string
  placeholder?: string
  required?: boolean
  maxLength?: number
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
