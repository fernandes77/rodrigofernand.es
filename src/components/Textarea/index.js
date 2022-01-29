import * as S from './styles'

const Textarea = ({ name, id, placeholder, required = false, maxLength }) => (
  <S.Wrapper
    name={name}
    id={id}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
  />
)

export default Textarea
