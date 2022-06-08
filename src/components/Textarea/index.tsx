import * as S from './styles'

type TextAreaProps = {
  name?: string
  id?: string
  placeholder?: string
  required?: boolean
  maxLength?: number
}

const Textarea = ({
  name,
  id,
  placeholder,
  required = false,
  maxLength
}: TextAreaProps) => (
  <S.Wrapper
    name={name}
    id={id}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
  />
)

export default Textarea
