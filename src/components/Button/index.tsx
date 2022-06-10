import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonProps = {
  label: string
  type: 'button' | 'submit' | 'reset'
  loading?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ label, type, loading = false, onClick }) => (
  <S.Wrapper type={type} onClick={onClick}>
    {label}
  </S.Wrapper>
)

export default Button
