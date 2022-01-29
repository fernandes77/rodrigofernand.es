import * as S from './styles'

const Input = ({
  type,
  name,
  id,
  placeholder,
  required = false,
  maxLength
}) => (
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
