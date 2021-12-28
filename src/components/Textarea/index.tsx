import * as S from './styles'

export type TextareaProps = {
  name: string
  id: string
  placeholder: string
  required?: boolean
  maxLength: number
}

const Textarea = ({
  name,
  id,
  placeholder,
  required = false,
  maxLength
}: TextareaProps) => (
  <S.Wrapper
    name={name}
    id={id}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
  />
)

export default Textarea
